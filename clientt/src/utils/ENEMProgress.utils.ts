import { DISCIPLINES, IDiscipline, TRecurrenceCategories } from '@/data/DISCIPLINES_AND_TOPICS';
import { IENEMProgress } from '@/interfaces/IENEMProgress';
import { IGetLastTopicKCSessions, IKCSessionPublic, IKCSessionRedis } from '@/interfaces/IKnowledgeCheck';
import { ICommonMetrics, IDailyStudyInfo, IUserMetrics, IWeeklyStudyInfo } from '@/interfaces/IMetrics';
import { dayjsBR } from './dayjsBR';
import {
  IAccuracyRule,
  IActivityCoverageRule,
  IReviewRule,
} from '@/components/Sections/ENEMInteligente/StudyPriorityTD';

export function getTopicNextReview(studyMapProgressData: IENEMProgress, topicSlug: string): number | null {
  for (const discipline of Object.values(studyMapProgressData)) {
    const topic = discipline.topics[topicSlug];
    if (topic) {
      return topic.sm2?.nextReviewAt ?? null;
    }
  }

  return null; // não encontrado
}

export function countTopicsToReview(studyMapProgressData: IENEMProgress, disciplineSlug?: string): number {
  const now = Date.now();
  let count = 0;

  // Se vier um disciplineSlug, restringimos só a ela
  const disciplines = disciplineSlug
    ? [studyMapProgressData[disciplineSlug]].filter(Boolean) // evita undefined
    : Object.values(studyMapProgressData);

  for (const discipline of disciplines) {
    for (const topicSlug of Object.keys(discipline.topics)) {
      const nextReviewAt = getTopicNextReview(studyMapProgressData, topicSlug);
      if (nextReviewAt !== null && nextReviewAt <= now) {
        count++;
      }
    }
  }

  return count;
}

// Recebe frequência de acertos e volta uma cor respectiva
export function getColorFromFrequency(frequency: number | null) {
  if (frequency === null) return 'var(--color-gray)';
  if (typeof frequency !== 'number') return 'var(--color-gray)';
  if (frequency >= 0.75) return 'var(--color-green)';
  if (frequency > 0.6) return 'var(--color-yellow)';
  return 'var(--color-red)';
}

interface ActivitiesResult {
  activitiesDone: number;
  correctAnswers: number;
}

// Extrai atividades/acertos de um único info (diário ou semanal)
export function extractActivitiesFromInfo(
  info: IDailyStudyInfo | IWeeklyStudyInfo,
  disciplineSlug?: string,
  topicSlug?: string,
): ActivitiesResult | null {
  if (disciplineSlug) {
    const disciplineData = info.activities[disciplineSlug];
    if (!disciplineData) return null;

    if (topicSlug) {
      const topicData = disciplineData.meta?.[topicSlug];
      if (!topicData || !topicData.activitiesDone) return null;
      return {
        activitiesDone: topicData.activitiesDone,
        correctAnswers: topicData.correctAnswers,
      };
    }

    if (!disciplineData.activitiesDone) return null;
    return {
      activitiesDone: disciplineData.activitiesDone,
      correctAnswers: disciplineData.correctAnswers,
    };
  }

  if (!info.activitiesDone) return null;
  return {
    activitiesDone: info.activitiesDone,
    correctAnswers: info.correctAnswers,
  };
}

export type TMinimalData = {
  activitiesDone: number | null;
  averageSolveTime: number | null;
  correctAnswers: number | null;
  correctAnswersFreq: number | null;
};

interface IInfoSummary {
  disciplines: { [slug: string]: TMinimalData };
  topics: {
    [disciplineSlug: string]: {
      [slug: string]: TMinimalData;
    };
  };
}

function iterationToMinimalData(
  array: { activitiesDone: number; correctAnswers: number; averageSolveTime: number }[],
): TMinimalData {
  let totalActivitiesDone = 0;
  let totalCorrectAnswers = 0;

  // total do tempo (soma de avgSolveTime * activitiesDone)
  let weightedSolveTimeSum = 0;

  array.forEach(({ activitiesDone, averageSolveTime = 0, correctAnswers }) => {
    totalActivitiesDone += activitiesDone;
    totalCorrectAnswers += correctAnswers;
    weightedSolveTimeSum += averageSolveTime * activitiesDone;
  });

  const correctAnswersFreq =
    totalActivitiesDone > 0 ? Math.round((totalCorrectAnswers / totalActivitiesDone) * 100) : null;

  const averageSolveTime = totalActivitiesDone > 0 ? Math.round(weightedSolveTimeSum / totalActivitiesDone) : null;

  return {
    activitiesDone: totalActivitiesDone,
    correctAnswers: totalCorrectAnswers,
    averageSolveTime,
    correctAnswersFreq,
  };
}

function KCSessionToActivitiesObject(KCSessions: IKCSessionPublic[]): ICommonMetrics['activities'][] {
  const activities: ICommonMetrics['activities'][] = [];

  KCSessions.forEach(({ disciplineSlug, meta, topicSlug }) => {
    const { totalActivities, correctAnswers, averageSolveTime } = meta;
    activities.push({
      [disciplineSlug]: {
        activitiesDone: totalActivities,
        correctAnswers,
        averageSolveTime,
        meta: { [topicSlug]: { activitiesDone: totalActivities, correctAnswers, averageSolveTime } },
      },
    });
  });

  return activities;
}

function getAllTimeActivitiesObject(
  userMetrics: IUserMetrics,
  ENEMProgress: IENEMProgress,
): ICommonMetrics['activities'][] {
  const activities: ICommonMetrics['activities'][] = [];

  Object.entries(ENEMProgress).forEach(([disciplineSlug, { activitiesDone, correctAnswers, topics }]) => {
    const avgSolveTimeInUserMainMetrics = userMetrics.mainMetrics.activities[disciplineSlug]?.averageSolveTime;
    const item: ICommonMetrics['activities'][][0] = {
      [disciplineSlug]: {
        activitiesDone,
        correctAnswers,
        averageSolveTime: avgSolveTimeInUserMainMetrics ? avgSolveTimeInUserMainMetrics : 0,
        meta: {},
      },
    };

    Object.entries(topics).forEach(([topicSlug, { activitiesDone, correctAnswers, averageSolveTime }]) => {
      item[disciplineSlug].meta[topicSlug] = { activitiesDone, correctAnswers, averageSolveTime };
    });

    activities.push(item);
  });

  return activities;
}

// Used in ActivitiesTable/Table.tsx
function getInfoSummary(
  filterValue: 'last7Days' | 'last4Weeks' | 'lastSessions' | 'allTime',
  userMetrics?: IUserMetrics,
  KCSessions?: IKCSessionPublic[],
  ENEMProgress?: IENEMProgress,
): IInfoSummary {
  const data: ICommonMetrics['activities'][] = (() => {
    if (filterValue === 'last7Days') {
      if (!userMetrics) throw new Error('Data not received: getInfoSummary');
      return Object.values(userMetrics.currentWeekStudyInfo.dailyStudyInfos).map(({ activities }) => activities);
    }
    if (filterValue === 'last4Weeks') {
      if (!userMetrics) throw new Error('Data not received: getInfoSummary');
      return userMetrics.last4WeeksStudyInfos.map(({ activities }) => activities);
    }
    if (filterValue === 'lastSessions') {
      if (!KCSessions) throw new Error('Data not received: getInfoSummary');
      return KCSessionToActivitiesObject(KCSessions);
    }
    if (filterValue === 'allTime') {
      if (!userMetrics || !ENEMProgress) throw new Error('Data not received: getInfoSummary');
      return getAllTimeActivitiesObject(userMetrics, ENEMProgress);
    }

    throw new Error('Unsupported filterValue');
  })();

  if (data) {
    // Inicializa disciplinas e tópicos com todos os slugs do DISCIPLINES
    const disciplines: IInfoSummary['disciplines'] = {};
    const topics: IInfoSummary['topics'] = {};

    Object.entries(DISCIPLINES).forEach(([disciplineSlug, { topics: _topics }]) => {
      disciplines[disciplineSlug] = {
        activitiesDone: null,
        correctAnswers: null,
        averageSolveTime: null,
        correctAnswersFreq: null,
      };

      topics[disciplineSlug as string] = {};

      _topics.forEach(({ slug: topicSlug }) => {
        topics[disciplineSlug][topicSlug] = {
          activitiesDone: null,
          correctAnswers: null,
          averageSolveTime: null,
          correctAnswersFreq: null,
        };
      });
    });

    // Agrega os dados reais
    const disciplinesArrays: {
      [disciplineSlug: string]: { activitiesDone: number; correctAnswers: number; averageSolveTime: number }[];
    } = {};
    const topicsArrays: {
      [disciplineSlug: string]: {
        [topicSlug: string]: { activitiesDone: number; correctAnswers: number; averageSolveTime: number }[];
      };
    } = {};

    data.forEach((activities) => {
      Object.entries(activities).forEach(([disciplineSlug, disciplineObj]) => {
        const { activitiesDone, averageSolveTime, correctAnswers, meta } = disciplineObj;

        if (!disciplinesArrays[disciplineSlug]) {
          disciplinesArrays[disciplineSlug] = [];
        }
        disciplinesArrays[disciplineSlug].push({ activitiesDone, averageSolveTime, correctAnswers });

        if (!topicsArrays[disciplineSlug]) {
          topicsArrays[disciplineSlug] = {};
        }

        Object.entries(meta || {}).forEach(([topicSlug, topicObj]) => {
          const {
            activitiesDone: tActivitiesDone,
            averageSolveTime: tAverageSolveTime,
            correctAnswers: tCorrect,
          } = topicObj;

          if (!topicsArrays[disciplineSlug][topicSlug]) {
            topicsArrays[disciplineSlug][topicSlug] = [];
          }

          topicsArrays[disciplineSlug][topicSlug].push({
            activitiesDone: tActivitiesDone,
            averageSolveTime: tAverageSolveTime,
            correctAnswers: tCorrect,
          });
        });
      });
    });

    // Calcula métricas finais e sobrescreve os valores nulos
    Object.entries(disciplinesArrays).forEach(([disciplineSlug, array]) => {
      disciplines[disciplineSlug] = iterationToMinimalData(array);
    });

    Object.entries(topicsArrays).forEach(([disciplineSlug, topicsMap]) => {
      Object.entries(topicsMap).forEach(([topicSlug, array]) => {
        topics[disciplineSlug][topicSlug] = iterationToMinimalData(array);
      });
    });

    return { disciplines, topics };
  }

  throw new Error('Invalid data or filter for lastSessions');
}

function getOverallFromInfoSummary(
  filteredSummary: IInfoSummary['disciplines'] | IInfoSummary['topics'],
): TMinimalData {
  let totalActivitiesDone: null | number = null;
  let totalCorrectAnswers: null | number = null;

  let totalAverageSolveTime: null | number = null;
  let iterations = 0;

  if (Object.values(filteredSummary)[0]) {
    Object.values(filteredSummary).forEach(({ activitiesDone, averageSolveTime, correctAnswers }) => {
      if (activitiesDone) {
        if (!totalActivitiesDone) totalActivitiesDone = 0;
        totalActivitiesDone += activitiesDone;
        iterations++;
      }
      if (correctAnswers) {
        if (!totalCorrectAnswers) totalCorrectAnswers = 0;
        totalCorrectAnswers += correctAnswers;
      }
      if (correctAnswers) {
        if (!totalAverageSolveTime) totalAverageSolveTime = 0;
        totalAverageSolveTime += averageSolveTime;
      }
    });
  }

  let correctAnswersFreq: null | number = null;

  if (totalActivitiesDone && totalCorrectAnswers) {
    correctAnswersFreq = totalActivitiesDone > 0 ? Math.round((totalCorrectAnswers / totalActivitiesDone) * 100) : null;
  }

  let averageSolveTime: null | number = null;
  if (totalAverageSolveTime) {
    averageSolveTime = iterations > 0 ? Math.round(totalAverageSolveTime / iterations) : null;
  }

  return {
    activitiesDone: totalActivitiesDone,
    averageSolveTime,
    correctAnswers: totalCorrectAnswers,
    correctAnswersFreq,
  };
}

export interface KCSessionSourceItem {
  date: number; // timestamp (startedAt)
  disciplineSlug: string;
  topicSlug: string;
  activitiesDone: number;
  correctAnswers: number;
  averageSolveTime: number;
}

function standardizeDataForFreqGraph(
  data: { startDate: number; endDate?: number | null; correctAnswers: number; activitiesDone: number }[], // tipar se necessário
  filterValue: 'last7Days' | 'last4Weeks' | 'lastSessions' | 'allTime',
): {
  dateLabel: string; // rótulo no eixo X
  fullDate: string | Date; // data completa
  activitiesDone: number;
  correctAnswers: number;
  frequency: number; // de 0 a 1
}[] {
  if (filterValue === 'last7Days') {
    return data
      .map(({ startDate, activitiesDone, correctAnswers, endDate }) => ({
        dateLabel: dayjsBR(startDate).format('DD/MM'),
        fullDate: `${startDate}`,
        activitiesDone,
        correctAnswers,
        frequency: activitiesDone > 0 ? correctAnswers / activitiesDone : 0,
        endDate,
      }))
      .filter(Boolean)
      .sort((a, b) => (a.endDate || 0) - (b.endDate || 0));
  }

  if (filterValue === 'last4Weeks') {
    return data
      .map(({ startDate, activitiesDone, correctAnswers, endDate }) => ({
        dateLabel: `${dayjsBR(startDate).format('DD/MM')} - ${dayjsBR(endDate).format('DD/MM')}`,
        fullDate: `${startDate}`,
        activitiesDone: activitiesDone,
        correctAnswers: correctAnswers,
        frequency: activitiesDone > 0 ? correctAnswers / activitiesDone : 0,
        endDate,
      }))
      .filter(Boolean)
      .sort((a, b) => (a.endDate || 0) - (b.endDate || 0));
  }

  if (filterValue === 'lastSessions') {
    return data
      .map(({ activitiesDone, correctAnswers, endDate }) => ({
        dateLabel: dayjsBR(endDate).format('DD/MM HH:mm'),
        fullDate: ``,
        activitiesDone: activitiesDone,
        correctAnswers: correctAnswers,
        frequency: activitiesDone > 0 ? correctAnswers / activitiesDone : 0,
        endDate,
      }))
      .filter(Boolean)
      .sort((a, b) => (a.endDate || 0) - (b.endDate || 0));
  }

  return [];
}

function getColorFromSolveTime(solveTime: number | null | undefined) {
  if (typeof solveTime !== 'number') return 'var(--color-gray)';

  const ThreeMinutesToMS = 3 * 60 * 1000;
  const TwoAndAHalfMinutesToMS = 2.5 * 60 * 1000;

  if (solveTime >= ThreeMinutesToMS) return 'var(--color-red)';
  if (solveTime > TwoAndAHalfMinutesToMS) return 'var(--color-yellow)';
  return 'var(--color-green)';
}

function calculateStudyPriorityScore({
  recurrence,
  recurrenceWeight,
  activitiesDone,
  correctAnswersFreq,
  toReviewCount,
  nextReviewAt,
  activityCount,
}: {
  recurrence: TRecurrenceCategories | null;
  recurrenceWeight: number;
  activitiesDone: number | null;
  correctAnswersFreq: number | null;
  toReviewCount?: number | null;
  nextReviewAt?: number | null;
  activityCount: number;
}): { score: number; reasons: string[] } {
  // Regras de cobertura de atividades
  const activityCoverageRules: IActivityCoverageRule[] = [
    { threshold: 0.3, points: 30, message: 'Você ainda não explorou muito este conteúdo.' },
    { threshold: 0.5, points: 10, message: 'Você já começou, mas ainda não consolidou este conteúdo.' },
  ];

  // Regras de precisão
  const accuracyRules: IAccuracyRule[] = [
    { threshold: 50, message: 'Você precisa melhorar sua taxa de acertos.' },
    { threshold: 70, message: 'Sua taxa de acertos precisa ser melhorada.' },
  ];

  // Regras de revisão
  const reviewRules: IReviewRule = {
    overduePoints: 30,
    toReviewMultiplier: 2,
    overdueMessage: 'Sua revisão está atrasada — revise este conteúdo.',
    toReviewMessage: (count: number) => `${count} tópicos aguardando revisão.`,
  };

  // Mensagem default caso nenhum critério seja aplicado
  const defaultReason = 'Bom desempenho até agora — continue mantendo o ritmo!';

  // Pontos base para cada categoria
  const categoryScoreMap: Record<TRecurrenceCategories, number> = {
    'really-low': 0,
    low: 15,
    medium: 30,
    high: 50,
    'really-high': 70,
  };
  /*  */

  const reasons: string[] = [];

  // Caso não iniciou nada
  if (!activitiesDone || activitiesDone === 0) {
    reasons.push('Você ainda não iniciou este conteúdo — comece a praticar agora!');
    return { score: categoryScoreMap[recurrence || 'medium'], reasons };
  }

  // Base da disciplina
  let score = recurrenceWeight * 10;

  // Cobertura de atividades
  const coverageRatio = activitiesDone / activityCount;
  for (const rule of activityCoverageRules) {
    if (coverageRatio < rule.threshold) {
      score += rule.points;

      // Mensagem dinâmica com número de atividades feitas e total
      const dynamicMessage = `${rule.message} — Você fez ${activitiesDone} atividades e já tiveram ${activityCount} no ENEM`;
      reasons.push(dynamicMessage);
      break; // pega apenas a regra mais urgente
    }
  }

  // Precisão
  if (correctAnswersFreq !== null) {
    score += (100 - correctAnswersFreq) * 0.3;
    for (const rule of accuracyRules) {
      if (correctAnswersFreq < rule.threshold) {
        reasons.push(rule.message);
        break;
      }
    }
  }

  // Revisões
  if (toReviewCount && toReviewCount > 0) {
    score += toReviewCount * reviewRules.toReviewMultiplier;
    reasons.push(reviewRules.toReviewMessage(toReviewCount));
  }
  if (nextReviewAt && nextReviewAt < Date.now()) {
    score += reviewRules.overduePoints;
    reasons.push(reviewRules.overdueMessage);
  }

  if (!reasons.length) reasons.push(defaultReason);

  return { score, reasons };
}

function scoreToCategory(score: number): TRecurrenceCategories {
  if (score >= 70) return 'really-high';
  if (score >= 50) return 'high';
  if (score >= 30) return 'medium';
  if (score >= 15) return 'low';
  return 'really-low';
}

export default {
  getTopicNextReview,
  countTopicsToReview,
  extractActivitiesFromInfo,
  standardizeDataForFreqGraph,
  getInfoSummary,
  getOverallFromInfoSummary,

  calculateStudyPriorityScore,
  scoreToCategory,

  getColorFromFrequency,
  getColorFromSolveTime,
};
