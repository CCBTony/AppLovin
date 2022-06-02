export interface WeatherNow {
  obsTime: string;
  temp: string;
  feelsLike: string;
  icon: string;
  text: string;
  wind360: string;
  windDir: string;
  windScale: string;
  windSpeed: string;
  humidity: string;
  precip: string;
  pressure: string;
  vis: string;
  cloud?: string;
  dew?: string;
}

export type WeatherPredictionHour = Omit<WeatherNow, 'feelsLike' | 'obsTime'> & {
  fxTime: string;
  pop?: string;
};

export type WeatherPredictionDay = {
  fxDate: string;
  tempMax: string;
  tempMin: string;
  textDay: string;
};
