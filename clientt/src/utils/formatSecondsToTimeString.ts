function formatSecondsToTimeString(totalSeconds: number, maxParts: number = 2, tillHoursOnly: boolean = false): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return '0s';
  }

  const addPart = (value: number, unit: string, parts: string[]) => {
    if (value > 0) parts.push(`${value}${unit}`);
  };

  if (tillHoursOnly) {
    const totalHours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const parts: string[] = [];
    addPart(totalHours, 'h', parts);
    addPart(minutes, 'm', parts);
    addPart(seconds, 's', parts);

    // corta apenas se há mais de maxParts, mas não mostra zeros
    return parts.slice(0, maxParts).join(' ') || '0s';
  }

  // Com dias
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const parts: string[] = [];
  addPart(days, 'd', parts);
  addPart(hours, 'h', parts);
  addPart(minutes, 'm', parts);
  addPart(seconds, 's', parts);

  return parts.slice(0, maxParts).join(' ') || '0s';
}

export { formatSecondsToTimeString };
