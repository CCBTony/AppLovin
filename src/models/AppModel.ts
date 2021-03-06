import { makeAutoObservable, runInAction } from 'mobx';
import { IModelApp } from '@/types/models';
import { AppStatus } from '@/meta';
import * as services from '@/services';
import { WeatherNow, WeatherPredictionDay, WeatherPredictionHour } from '@/types/entries';
import { ThemeType } from '@/meta';

const getThemeFromUrl = () => {
  const url = location.href.toLowerCase();
  if (url.includes('theme=day')) return 'day';
  else if (url.includes('theme=night')) return 'night';
};

export class AppModel implements IModelApp {
  status = AppStatus.Init;

  /**
   * 指定主题 or 根据实际时间使用主题
   * 6:00 ~ 18:00 = 白天
   */
  theme: ThemeType = getThemeFromUrl() ?? (new Date().getHours() > 6 && new Date().getHours() < 18 ? 'day' : 'night');

  todayWeather: WeatherNow = null;
  next7DayWeather: WeatherPredictionDay[] = null;
  next24hoursWeather: WeatherPredictionHour[] = null;

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    const [{ now }, { hourly }, { daily }] = await Promise.all([
      services.getRealtimeWeather(),
      services.get24HourPredicationWeather(),
      services.get7DayPredicationWeather(),
    ]);
    runInAction(() => {
      this.todayWeather = now;
      this.next7DayWeather = daily;
      this.next24hoursWeather = hourly;
      this.status = AppStatus.Done;
    });
  }
}
