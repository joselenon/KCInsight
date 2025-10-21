import { NextFunction, Request, Response } from 'express';
import { responseBody } from '../helpers/responseHelpers';
import { IAIInsight, IKCSession, IKCSessionRedis } from '@/interfaces/IKnowledgeCheck';
import KCInsightService from '@/services/ENEMServices/KCServices/KCInsight.service';

class KnowledgeCheckController {
  generateReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body as { userName: string; discipline: 'biologia' | 'matemática' };
      if (
        !payload.userName ||
        typeof payload.userName !== 'string' ||
        !payload.discipline ||
        (payload.discipline !== 'biologia' && payload.discipline !== 'matemática')
      ) {
        throw new Error('Payload Inválido');
      }

      const matematicaActivities: IKCSession['KCQuestions'] = [
        {
          activityId: 'a9ec2262-1dba-4221-8343-35287831a86a', // Questão da projeção populacional
          answered: true,
          correct: true,
          correctAlternative: 'B',
          userAnswer: 'B',
          timestamp: Date.now() - 1000 * 60 * 15,
        },
        {
          activityId: '010858b4-9309-4105-88a0-4360a1a4573c', // Questão das empresas (média ponderada)
          answered: true,
          correct: false, // ❌ 1º erro
          correctAlternative: 'C',
          userAnswer: 'B',
          timestamp: Date.now() - 1000 * 60 * 12,
        },
        {
          activityId: '18b76687-c0ce-43b4-8b67-634578a2f931', // Questão da estatura média
          answered: true,
          correct: true,
          correctAlternative: 'D',
          userAnswer: 'D',
          timestamp: Date.now() - 1000 * 60 * 9,
        },
        {
          activityId: '83a5f63d-edae-4ade-8c95-91ab3fd55ec8', // Questão do Ideb
          answered: true,
          correct: false, // ❌ 2º erro
          correctAlternative: 'E',
          userAnswer: 'D',
          timestamp: Date.now() - 1000 * 60 * 6,
        },
      ];

      const biologiaActivities: IKCSession['KCQuestions'] = [
        {
          activityId: '808f133a-74a1-461b-8c94-1e908b676d17',
          answered: true,
          correct: true,
          correctAlternative: 'A',
          userAnswer: 'A',
          timestamp: Date.now() - 1000 * 60 * 13,
        },
        {
          activityId: '879c36a3-df07-4690-a59b-7495e2d4a6b5',
          answered: true,
          correct: false,
          correctAlternative: 'E',
          userAnswer: 'D',
          timestamp: Date.now() - 1000 * 60 * 10,
        },
        {
          activityId: 'c142d594-b44e-4d59-93a5-b236f7a0dcc0',
          answered: false,
          correct: null,
          correctAlternative: null,
          userAnswer: null,
          timestamp: null,
          cancelled: true,
        },
        {
          activityId: '597ee0c5-dd9d-47a6-a2c4-eb4804717a4f',
          answered: true,
          correct: true,
          correctAlternative: 'D',
          userAnswer: 'D',
          timestamp: Date.now() - 1000 * 60 * 6,
        },
        {
          activityId: 'b081200d-9eca-4329-b829-f5e3c0676ce8',
          answered: true,
          correct: true,
          correctAlternative: 'D',
          userAnswer: 'D',
          timestamp: Date.now() - 1000 * 60 * 3,
        },
      ];

      const KCQuestionsMock = payload.discipline === 'matemática' ? matematicaActivities : biologiaActivities;

      const mockKCSession: IKCSession = {
        startedAt: Date.now() - 1000 * 60 * 15, // começou há 15 minutos
        finishedAt: Date.now() - 1000 * 60 * 2, // terminou há 2 minutos

        disciplineSlug: payload.discipline,
        topicSlug: payload.discipline === 'matemática' ? 'Estatística' : 'Genética',

        KCQuestions: KCQuestionsMock,

        meta: {
          activitiesAnswered: 4,
          correctAnswers: 3,
          wrongAnswers: 1,
          correctAnswersFreq: 0.75,
          averageSolveTime: 45, // segundos
          totalTime: 13 * 60, // segundos
          totalActivities: 5,
        },

        SM2Info: {
          qualifiesAsApproved: true,
          nextReviewAt: Date.now() + 1000 * 60 * 60 * 24 * 3, // em 3 dias
        },

        status: 'completed',

        aiGeneratedInsights: null,
      };

      const AIModel = 'openai/gpt-5-mini';

      const response = await KCInsightService.generateAIInsights(payload.userName, mockKCSession, AIModel);

      res.status(200).json(
        responseBody<IAIInsight | null | undefined>({
          success: true,
          type: 'GET_SUCCESS',
          message: '',
          data: response,
        }),
      );
    } catch (error) {
      next(error);
    }
  };
}

export default new KnowledgeCheckController();
