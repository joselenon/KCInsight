import { IUser, TPlanType } from '@/interfaces/IUser';
import { LIMITS } from '@/config/PlansUsage.config';
import { toast } from 'react-toastify';
import { TLimitType, TPlanUsage } from '@/interfaces/IPlanUsage';

export class PlanUsageChecker {
  constructor(
    private userPlanUsage: TPlanUsage,
    private planType: IUser['subscription']['planType'],
  ) {}

  private isPRO() {
    return this.planType !== 'free';
  }

  private shouldReset(lastReset: number): boolean {
    const now = new Date();
    const resetDate = new Date(lastReset);
    return (
      now.getFullYear() !== resetDate.getFullYear() ||
      now.getMonth() !== resetDate.getMonth() ||
      now.getDate() !== resetDate.getDate()
    );
  }

  private getDailyLimit(type: TLimitType): number {
    const usage = this.userPlanUsage[type];
    if (usage.dailyLimitOverride != null && usage.dailyLimitOverride > 0) return usage.dailyLimitOverride; // Fix this (dailyLimitOverride)

    return LIMITS[type][this.isPRO() ? this.planType : 'free'];
  }

  /**
   * Tenta consumir 1 uso do tipo especificado
   */
  checkAndConsume(type: TLimitType): {
    success: boolean;
    updated: TPlanUsage;
  } {
    const now = Date.now();
    let usage = this.userPlanUsage[type];

    if (this.shouldReset(usage.lastReset)) {
      usage = { ...usage, usageCount: 0, lastReset: now };
    }

    if (usage.usageCount < this.getDailyLimit(type)) {
      usage = { ...usage, usageCount: usage.usageCount + 1 };

      return {
        success: true,
        updated: { ...this.userPlanUsage, [type]: usage },
      };
    }

    toast.warn(this.isPRO() ? 'Limite diário atingido' : 'Limite diário gratuito atingido');
    return {
      success: false,
      updated: this.userPlanUsage,
    };
  }

  /**
   * Retorna o texto de limite atual e se ainda tem limite disponível
   */
  getUsageInfo(type: TLimitType): {
    limitText: string;
    hasLimit: boolean;
    updated: TPlanUsage;
  } {
    const now = Date.now();
    let usage = this.userPlanUsage[type];

    if (this.shouldReset(usage.lastReset)) {
      usage = { ...usage, usageCount: 0, lastReset: now };
    }

    const limit = this.getDailyLimit(type);

    return {
      limitText: `${usage.usageCount}/${limit}`,
      hasLimit: usage.usageCount < limit,
      updated: { ...this.userPlanUsage, [type]: usage },
    };
  }

  /**
   * Novo método que já retorna o texto final do relatório inteligente
   */
  getKCSessionInsightReportText(aiGeneratedInsights: any): {
    message: string;
    updated: TPlanUsage;
  } {
    const { limitText, hasLimit, updated } = this.getUsageInfo('KCSessionInsights');

    if (aiGeneratedInsights === undefined) {
      return { message: 'O relatório inteligente não pôde ser gerado agora', updated };
    }
    if (aiGeneratedInsights === null && !hasLimit) {
      return { message: `Você atingiu o limite de relatórios inteligentes (${limitText})`, updated };
    }
    if (aiGeneratedInsights === null && hasLimit) {
      return { message: `Clique no botão abaixo para gerar o relatório inteligente (${limitText})`, updated };
    }
    return { message: '', updated }; // Caso já exista o relatório, não retorna texto adicional
  }

  getExceededLimitMessage(type: TLimitType): string | null {
    const now = Date.now();
    let usage = this.userPlanUsage[type];

    // Reset diário, se necessário
    if (this.shouldReset(usage.lastReset)) {
      usage = { ...usage, usageCount: 0, lastReset: now };
    }

    const limit = this.getDailyLimit(type);

    if (usage.usageCount >= limit) {
      return this.isPRO()
        ? 'Você atingiu o limite diário do seu plano.'
        : `Você atingiu o limite diário gratuito (${limit} revisões). Considere fazer upgrade para PRO.`;
    }

    return null;
  }
}
