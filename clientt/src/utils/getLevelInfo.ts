// levelSystem.ts
export interface ILevelInfo {
  level: number;
  currentXP: number;
  requiredXP: number;
  progress: number; // 0 ~ 1 para preencher a progress bar
}

const BASE_XP = 100; // xp inicial para ir ao nível 2
const EXPONENT = 1.5; // curva de progressão

// calcula o xp total acumulado necessário para chegar em um nível
function getTotalXPForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(BASE_XP * Math.pow(level - 1, EXPONENT));
}

// dado o xp atual do usuário, retorna infos do level
export function getLevelInfo(xp: number): ILevelInfo {
  let level = 1;

  // encontra o nível do usuário
  while (xp >= getTotalXPForLevel(level + 1)) {
    level++;
  }

  const currentLevelXP = getTotalXPForLevel(level);
  const nextLevelXP = getTotalXPForLevel(level + 1);

  const requiredXP = nextLevelXP - currentLevelXP;
  const currentXP = xp - currentLevelXP;

  const progress = currentXP / requiredXP;

  return {
    level,
    currentXP,
    requiredXP,
    progress,
  };
}
