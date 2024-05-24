import dayjs from 'dayjs';

export const formatDate = (dateStr: string) => {
  return dayjs(dateStr).format('YYYY/MM/DD');
}