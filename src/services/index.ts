/**
 * 封装接口请求
 */

import Axios from 'axios';
import { WeatherNow, WeatherPredictionDay, WeatherPredictionHour } from '@/types/entries';

const axios = Axios.create();

interface BaseQWeatherResData {
  code: string;
  updateTime: string;
  fxLink: string;
  refer: {
    sources?: any;
    license?: any;
  };
}
type QWeatherResData<T> = BaseQWeatherResData & T;

const API_KEY = 'fd1bafe058dd4392a680883bcd1290ee';
const CURRENT_LOCATION_ID = 101210101;

export const getRealtimeWeather = async (): Promise<QWeatherResData<{ now: WeatherNow }>> => {
  const res = await axios.get('https://devapi.qweather.com/v7/weather/now', {
    params: {
      key: API_KEY,
      location: CURRENT_LOCATION_ID,
    },
  });
  return res.data;
};

export const get24HourPredicationWeather = async (): Promise<QWeatherResData<{ hourly: WeatherPredictionHour[] }>> => {
  const res = await axios.get('https://devapi.qweather.com/v7/weather/24h', {
    params: {
      key: API_KEY,
      location: CURRENT_LOCATION_ID,
    },
  });
  return res.data;
};

export const get7DayPredicationWeather = async (): Promise<QWeatherResData<{ daily: WeatherPredictionDay[] }>> => {
  const res = await axios.get('https://devapi.qweather.com/v7/weather/7d', {
    params: {
      key: API_KEY,
      location: CURRENT_LOCATION_ID,
    },
  });
  return res.data;
};
