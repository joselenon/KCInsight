import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosServiceOptions {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  headers?: Record<string, string>;
}

export interface IAPIResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

async function AxiosService<T = any>({
  url,
  method = 'get',
  data,
  headers,
}: AxiosServiceOptions): Promise<IAPIResponse<T>> {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    headers,
  };

  try {
    const response: AxiosResponse<IAPIResponse<T>> = await axios(config);
    return { success: true, message: '', data: response.data as T };
  } catch (error: any) {
    const axiosError = error as AxiosError<IAPIResponse<T>>;

    if (axiosError.response) {
      console.error('Response Data:', axiosError.response.data);
    }

    return { success: false, message: axiosError.response?.data.message || axiosError.message, data: null };
  }
}

export default AxiosService;
