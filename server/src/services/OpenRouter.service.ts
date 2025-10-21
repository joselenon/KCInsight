import URLS from '@/config/urls.config';
import axios from 'axios';

export type IMessageContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string; detail?: 'low' | 'high' } };

export interface IMessage {
  role: 'user' | 'assistant' | 'system';
  // The next key (content), has it's name "content" and not contentPart because that's how openRouter receives the content of the request
  content: IMessageContentPart[];
}

interface IChatRequest {
  model: string;
  history: IMessage[]; // Mensagens anteriores (contexto)
  message: IMessage; // Nova mensagem a ser enviada
  temperature?: number;
  max_tokens?: number;
}

interface IChatResponse {
  id: string;
  choices: {
    message: IMessage;
    finish_reason: string;
  }[];
}

const MODEL_CONFIGS: {
  [model: string]: { temperature: number; max_tokens: number };
} = {
  'google/gemini-pro-1.5': { temperature: 0.2, max_tokens: 2000 },
  'deepseek/deepseek-r1-0528': { temperature: 0.5, max_tokens: 2000 },
  'openai/gpt-4o-mini': { temperature: 0.5, max_tokens: 2000 },
  'openai/gpt-5-mini': { temperature: 0.5, max_tokens: 6000 },
};

export class OpenRouterService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(apiKey: string) {
    if (!apiKey) throw new Error('OpenRouter API Key is required');
    this.apiKey = apiKey;
  }

  async sendMessage({ model, history, message }: IChatRequest): Promise<IMessage> {
    try {
      const systemPrompt: IMessage = {
        role: 'system',
        content: [
          {
            type: 'text',
            text: 'Você é um assistente de texto. Não gere nem sugira imagens. Responda apenas com texto.',
          },
        ],
      };

      const fullMessages = [systemPrompt, ...history, message];

      const config = MODEL_CONFIGS[model] || { temperature: 0.5, max_tokens: 2000 };

      const response = await axios.post<IChatResponse>(
        this.baseUrl,
        {
          model,
          messages: fullMessages,
          ...config,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'HTTP-Referer': URLS.MAIN_URLS.SERVER_FULL_URL,
            'Content-Type': 'application/json',
            'X-Title': 'EstudinoAI',
          },
        },
      );

      function normalizeToContentParts(content: string | IMessageContentPart[]): IMessageContentPart[] {
        if (typeof content === 'string') {
          return [{ type: 'text', text: content }];
        }

        return content;
      }

      const rawMessage = response.data.choices[0].message;
      const contentPart = normalizeToContentParts(rawMessage.content);

      return { role: 'assistant', content: contentPart };
    } catch (error: any) {
      console.error('Erro ao se comunicar com a IA via OpenRouter:', error?.response?.data || error.message);
      throw new Error('Falha ao obter resposta da IA');
    }
  }
}
