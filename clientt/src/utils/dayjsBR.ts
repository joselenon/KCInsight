import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br'; // importa pt-BR

export const BRAZIL_TZ = 'America/Sao_Paulo';

dayjs.extend(utc);
dayjs.extend(timezone);

// define locale padrão como pt-BR
dayjs.locale('pt-br');

const dayjsBR = (date?: dayjs.ConfigType) => dayjs(date).tz(BRAZIL_TZ);

export { dayjsBR };
