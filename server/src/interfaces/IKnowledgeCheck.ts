import { IEstudinoActivity, IEstudinoActivityPublic } from './IActivity';
import { IFirebaseChunksConfig } from './IFirebase';

export interface ICreateKCSessionPayload {
  disciplineSlug: string;
  topicSlug: string;
}

export interface IReplaceActivityPayload {
  disciplineSlug: string;
  topicSlug: string;
  activityId: string;
}

export interface IFinishKCSessionPayload {
  disciplineSlug: string;
  topicSlug: string;
}

export interface ISubmitKCAnswerPayload {
  disciplineSlug: string;
  topicSlug: string;

  activityId: string;
  userAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface IGetLastKCSessionsPayload extends IFirebaseChunksConfig {}

export interface IGetLastTopicKCSessionsPayload {
  disciplineSlug?: string;
  topicSlug?: string;
  chunkConfig: IFirebaseChunksConfig;
}

export interface IGetLastTopicKCSessions {
  activeSessions: IKCSessionRedis[];
  pastSessions: IKCSessionPublic[];
}

export interface IGetActiveKCSessionsResponse {
  activeSessions: IKCSessionRedis[];
  // pastSessions: IKCSessionPublic[];
}

export type KCSessionStatus = 'active' | 'completed' | 'expiredByTimeout' | 'expiredByDurationLimit';

export interface IKCQuestion {
  activityId: string;
  answered: boolean;
  correct: boolean | null;
  correctAlternative: IEstudinoActivity['correctAlternative'] | null;
  userAnswer: IEstudinoActivity['correctAlternative'] | null;
  timestamp: number | null; // Date.now da hora que foi respondida a questão
  cancelled?: boolean; // Caso o usuário tenha mandado feedback de erro na questão e não regerado alguma outra no lugar
}

export interface IKCSessionMeta {
  activitiesAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  correctAnswersFreq: number;
  averageSolveTime: number;
  totalTime: number;
  totalActivities: number;
}

export interface IAIQuestionInsight {
  activityId: string;
  summary: string; // Observações sobre a resposta do aluno para essa questão
  explanation: string; // Possível explicação ou comentário da IA
}

export interface IAIInsight {
  generatedAt: number;
  modelName: string;

  generalSummary: string; // Resumo geral da sessão
  questionInsights: IAIQuestionInsight[];
  suggestedReviewTopics?: string[];
  strengthsMap?: Record<string, string[]>;
  weaknessesMap?: Record<string, string[]>;
}

export interface IKCSession {
  startedAt: number;
  finishedAt: number | null;

  disciplineSlug: string;
  topicSlug: string;

  KCQuestions: IKCQuestion[];

  meta: IKCSessionMeta;
  SM2Info: { qualifiesAsApproved: boolean; nextReviewAt: number } | null;
  status: KCSessionStatus;

  aiGeneratedInsights: IAIInsight | null;
}

export interface IKCSessionPublic {
  id: string;
  startedAt: number;
  finishedAt: number | null;

  disciplineSlug: string;
  topicSlug: string;

  KCQuestions: IKCQuestion[];

  status: KCSessionStatus;
  meta: IKCSessionMeta;
  SM2Info: IKCSession['SM2Info'];
  aiGeneratedInsights: IKCSession['aiGeneratedInsights'];
}

export interface IKCSessionRedis {
  startedAt: IKCSession['startedAt'];
  finishedAt: IKCSession['finishedAt'];

  disciplineSlug: IKCSession['disciplineSlug'];
  topicSlug: IKCSession['topicSlug'];

  KCQuestions: IKCSession['KCQuestions'];

  status: IKCSession['status'];
  meta: IKCSessionMeta | undefined;
  SM2Info: IKCSession['SM2Info'];
  aiGeneratedInsights: IKCSession['aiGeneratedInsights'] | undefined;

  // Redis extra keys
  userId: string;
  expiresAt: number;

  lastQuestionIndex: number;
  totalQuestions: number;

  questions: IEstudinoActivityPublic[];
  cancelledActivitiesIds: string[];
}

export type TCreateKCSessionResponse = IKCSessionRedis;
