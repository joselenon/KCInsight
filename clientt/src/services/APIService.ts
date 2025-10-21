import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import URLS from '../config/URLs';

export interface IRequestProps {
  requestConfig: AxiosRequestConfig;
  showSuccessErrorToast?: boolean[]; // [successToast, errorToast]
}

export interface IMyAPIResponse<T = null> {
  success: boolean;
  name: string;
  type: string;
  message: string;
  data?: T;
}

class APIService {
  private myAPI: AxiosInstance;
  private isRefreshing = false; // Avoid multiple requests for token refresh
  private refreshSubscribers: (() => void)[] = []; // callback list to be requested after token refresh

  constructor() {
    this.myAPI = axios.create({
      baseURL: URLS.MAIN_URLS.API_URL,
      withCredentials: true, // send/receive cookies
    });

    this.setupInterceptors();
  }

  onTokenRefreshedCallbacks: (() => void)[] = [];

  private setupInterceptors() {
    this.myAPI.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<IMyAPIResponse>) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (
          error.response?.status === 401 &&
          error.response.data?.name === 'JWTExpiredError' &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            await this.refreshToken();
            this.onRefreshed();
            return this.myAPI(originalRequest); // tenta de novo
          } catch (refreshError) {
            // Arrumar para somente erros 401 limpar a sessão
            this.clearSession();
            return Promise.reject(refreshError);
          }
        }

        if (error.response?.status === 401 && error.response.data.name === 'RefreshTokenNotReceivedError') {
          this.clearSession();
          return Promise.reject();
        }

        return Promise.reject(error);
      },
    );
  }

  private async refreshToken(): Promise<void> {
    if (this.isRefreshing) {
      return new Promise((resolve) => {
        this.subscribeTokenRefresh(() => resolve());
      });
    }

    this.isRefreshing = true;

    try {
      await axios.post(`${URLS.MAIN_URLS.API_URL}${URLS.ENDPOINTS.AUTH.REFRESH_TOKENS}`, {}, { withCredentials: true });

      this.isRefreshing = false;

      // Notificar os callbacks registrados de refresh bem-sucedido
      this.onTokenRefreshedCallbacks.forEach((callback) => callback());
      this.onTokenRefreshedCallbacks = []; // Limpar a lista de callbacks
    } catch (err) {
      this.isRefreshing = false;
      toast.error('Token expirado. Faça login novamente');
      throw err;
    }
  }

  private subscribeTokenRefresh(callback: () => void) {
    this.onTokenRefreshedCallbacks.push(callback);
  }

  private onRefreshed() {
    this.refreshSubscribers.forEach((callback) => callback());
    this.refreshSubscribers = [];
  }

  private clearSession() {
    // A própria resposta do server já limpa a sessão.
  }

  public async request<T>(requestProps: IRequestProps): Promise<IMyAPIResponse<T>> {
    const { requestConfig, showSuccessErrorToast } = requestProps;
    const [showSuccessToast = false, showErrorToast = false] = showSuccessErrorToast || [];

    const configWithCredentials = {
      ...requestConfig,
      withCredentials: true, // sempre envia cookies
    };

    try {
      const response = await this.myAPI.request<IMyAPIResponse<T>>(configWithCredentials);

      if (showSuccessToast) {
        toast.success(response.data.message);
      }

      return response.data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError<IMyAPIResponse>;

      if (axiosError.response) {
        if (showErrorToast) {
          toast.error(i18next.t(axiosError.response.data.message));
        }
      } else {
        // 🚨 Quando o servidor está off ou há erro de rede
        console.error('Erro de rede:', axiosError.message);
        toast.error('Servidor está desligado. Tente novamente mais tarde.');
      }

      return {
        success: false,
        type: 'ERR_AXIOS',
        name: 'AxiosError',
        message: axiosError.response?.data?.message || axiosError.message,
      };
    }
  }
}

export default new APIService();
