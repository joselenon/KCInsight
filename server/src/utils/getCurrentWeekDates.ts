import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek'; // para semanas ISO, se preferir
dayjs.extend(isoWeek);

export function getCurrentWeekDates() {
  const today = dayjs();
  const startOfWeek = today.startOf('week'); // domingo
  const dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(startOfWeek.add(i, 'day').format('YYYY-MM-DD'));
  }
  return dates;
}
