// useFinishKCSession.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import APIService from '@/services/APIService';
import URLS from '@/config/URLs';
import { IAIInsight, IFinishKCSessionPayload, IKCSessionMeta, IKCSessionRedis } from '@/interfaces/IKnowledgeCheck';

async function finishKCSession(payload: {
  userName: string;
  discipline: 'biologia' | 'matemática';
}): Promise<IAIInsight | null> {
  const res = await APIService.request<IAIInsight>({
    requestConfig: {
      url: URLS.ENDPOINTS.STUDY_MAP.KNOWLEDGE_CHECK.GENERATE_REPORT,
      method: 'post',
      withCredentials: true,
      data: payload,
    },
  });

  if (!res.success || !res.data) return null;

  return res.data;
}

export default function useGenerateAIInsight() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: finishKCSession,
    mutationKey: ['finishKCSession'],
  });
}
