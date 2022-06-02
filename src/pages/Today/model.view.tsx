import { useLocalObservable } from 'mobx-react';
import { appModel } from '@/store';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import * as weather from '@/utils/weather';

export default function useViewModel() {
  const app = useLocalObservable(() => appModel);
  const chartData = useMemo(
    () =>
      app.next24hoursWeather.map((w) => ({
        name: dayjs(w.fxTime).format('h a'),
        val: parseInt(w.temp),
      })),
    [app],
  );
  const days = useMemo(
    () =>
      app.next7DayWeather.map((d) => ({
        day: dayjs(d.fxDate).locale('zh-cn').format('dddd').replace('星期', '周'),
        weather: weather.translateDescriptionToType(d.textDay),
        min: d.tempMin,
        max: d.tempMax,
      })),
    [app],
  );

  return { app, chartData, days, todayWeatherType: weather.translateDescriptionToType(app.todayWeather.text) };
}
