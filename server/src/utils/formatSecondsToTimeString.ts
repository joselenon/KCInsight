function formatSecondsToTimeString(totalSeconds: number, maxParts: number = 2, tillHoursOnly: boolean = false): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return '0s';
  }

  // Se for até horas apenas, não converte em dias
  if (tillHoursOnly) {
    const totalHours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const allParts: string[] = [];
    if (totalHours > 0) allParts.push(`${totalHours}h`);
    if (minutes > 0 || allParts.length > 0) allParts.push(`${minutes}m`);
    if (seconds > 0 || allParts.length > 0) allParts.push(`${seconds}s`);

    return allParts.slice(0, maxParts).join(' ');
  }

  // Lógica normal com dias
  const days = Math.floor(totalSeconds / 86400); // 24 * 3600
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const allParts: string[] = [];
  if (days > 0) allParts.push(`${days}d`);
  if (hours > 0 || allParts.length > 0) allParts.push(`${hours}h`);
  if (minutes > 0 || allParts.length > 0) allParts.push(`${minutes}m`);
  if (seconds > 0 || allParts.length > 0) allParts.push(`${seconds}s`);

  return allParts.slice(0, maxParts).join(' ');
}

export { formatSecondsToTimeString };
