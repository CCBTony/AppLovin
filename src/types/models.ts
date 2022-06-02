import { WeatherNow, WeatherPredictionDay, WeatherPredictionHour } from '@/types/entries';
import { AppStatus } from '@/meta';
import { ThemeType } from '@/meta';

export interface IModelApp {
  status: AppStatus;
  theme: ThemeType;

  todayWeather?: WeatherNow;
  next24hoursWeather?: WeatherPredictionHour[];
  next7DayWeather?: WeatherPredictionDay[];
}
