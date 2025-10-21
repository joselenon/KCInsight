import { IMissionPublic } from '@/interfaces/IMissions';
import { IUserMetrics, ICommonMetrics } from '@/interfaces/IMetrics';
import { TAllowedMetrics } from '@/interfaces/IMissions';
import { toast } from 'react-toastify';

/**
 * Retorna o objeto de métricas correto de acordo com o tipo de repeat
 */
function getMetricsForRepeat(
  userMetrics: IUserMetrics,
  repeat: IMissionPublic['repeat'],
): ICommonMetrics | Omit<ICommonMetrics, 'activities'> | null {
  switch (repeat) {
    case 'daily':
      return userMetrics.dailyStudyInfo;
    case 'weekly':
      return userMetrics.currentWeekStudyInfo.weeklyStudyInfo;
    case 'never':
      return userMetrics.mainMetrics;
    default:
      return null;
  }
}

/**
 * Calcula o progresso de uma missão a partir das métricas do usuário
 */
export function calculateMissionProgress(
  missions: IMissionPublic[],
  userMetrics?: IUserMetrics,
): { mission: IMissionPublic; current: number; goal: number }[] {
  return missions.map((mission) => {
    const requirement = mission.requirements[0]; // considerar apenas 1 requirement por missão
    const goal = requirement?.target ?? 1;

    if (!requirement || !userMetrics) {
      return { mission, current: 0, goal };
    }

    const { metricKey } = requirement;

    // Caso especial para logIn, que é um evento binário
    if (metricKey === 'logIn') {
      return { mission, current: 1, goal };
    }

    // Obter métricas corretas com base no repeat
    const metrics = getMetricsForRepeat(userMetrics, mission.repeat);
    if (!metrics) {
      toast.error('Não foi possível carregar o progresso da missão');
      return { mission, current: 0, goal };
    }

    // Pega o valor da métrica dinamicamente
    let current: number;
    const value = metrics[metricKey as keyof Omit<ICommonMetrics, 'activities'>];
    current = typeof value === 'number' ? value : 0;

    // Garante que current não ultrapasse o goal
    current = Math.min(current, goal);

    return { mission, current, goal };
  });
}
