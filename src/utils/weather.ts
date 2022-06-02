import { WeatherType } from '@/components/common/WeatherIcon/meta';

export const translateDescriptionToType = (desc: string): WeatherType => {
  const has = (...texts: string[]) => {
    for (const text of texts) {
      if (desc.includes(text)) return true;
    }
    return false;
  };
  if (has('雷', '电')) return 'storm';
  if (has('雪')) return 'snow';
  if (has('雨')) return 'rain';
  if (has('云', '阴')) return 'clouds';
  if (has('晴')) return 'fine';
  return 'wind';
};
