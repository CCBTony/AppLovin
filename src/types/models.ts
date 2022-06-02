import { WeatherNow, WeatherPredictionDay, WeatherPredictionHour } from '@/types/entries';
import { AppStatus } from '@/meta';

export interface IModelApp {
  status: AppStatus;

  todayWeather?: WeatherNow;
  next24hoursWeather?: WeatherPredictionHour[];
  next7DayWeather?: WeatherPredictionDay[];
}
