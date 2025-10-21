import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const BRAZIL_TZ = 'America/Sao_Paulo';

dayjs.extend(utc);
dayjs.extend(timezone);

const dayjsBR = (date?: dayjs.ConfigType) => dayjs(date).tz(BRAZIL_TZ);

export { dayjsBR };
