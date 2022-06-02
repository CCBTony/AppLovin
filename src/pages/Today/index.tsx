import React from 'react';
import useViewModel from './model.view';
import { observer } from 'mobx-react';
import PredicationChart from './components/PredicationChart';

import WeatherIcon from '@/components/common/WeatherIcon';
import rainIcon from '@assets/images/color-rain.svg';
import humidityIcon from '@assets/images/color-humidity.svg';
import windIcon from '@assets/images/color-wind.svg';

import {
  PageWrapper,
  BackButton,
  PositionWrapper,
  TodayWeatherWrapper,
  Temperature,
  DataBar,
  DataItemRainChance,
  DataItemIcon,
  DataItemHumidity,
  DataItemWindLevel,
  ChartTitle,
  ChartContainer,
  ChartWrapper,
  RecentTemperatureBlock,
  RecentTemperatureCardWrapper,
  HeightLightMark,
  RecentTemperatureCard,
  TimeLabel,
  PredictionItem,
  PredictionTime,
  PredictionWeatherIcon,
  PredictionTemperatureRange,
  MinTemperature,
  PredictionTemperature,
  PredictionBlock,
  CardTemperature,
} from './styled';

function PageToday(): JSX.Element {
  const {
    app: { todayWeather },
    chartData,
    days,
    todayWeatherType,
  } = useViewModel();

  return (
    <PageWrapper>
      <TodayWeatherWrapper>
        <WeatherIcon type={todayWeatherType} />
      </TodayWeatherWrapper>

      <BackButton to={'/'} />

      <PositionWrapper>
        <div>杭州市, </div>
        <div>浙江省</div>
      </PositionWrapper>

      <Temperature fontSizeInPx={96}>{todayWeather.temp}</Temperature>

      <DataBar>
        <DataItemRainChance>
          <DataItemIcon src={rainIcon} />
          {todayWeather.precip} mm
        </DataItemRainChance>

        <DataItemHumidity>
          <DataItemIcon src={humidityIcon} />
          {todayWeather.humidity}%
        </DataItemHumidity>

        <DataItemWindLevel>
          <DataItemIcon src={windIcon} />
          {todayWeather.windSpeed} km/h
        </DataItemWindLevel>
      </DataBar>

      <ChartTitle>Today</ChartTitle>
      <ChartContainer>
        <ChartWrapper>
          <PredicationChart data={chartData} />
        </ChartWrapper>
      </ChartContainer>

      <RecentTemperatureBlock>
        <RecentTemperatureCardWrapper>
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>{chartData[0].val}</CardTemperature>
            <TimeLabel>{chartData[0].name}</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>

        <RecentTemperatureCardWrapper>
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>{chartData[1].val}</CardTemperature>
            <TimeLabel>{chartData[1].name}</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>

        <RecentTemperatureCardWrapper>
          <HeightLightMark />
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>{chartData[2].val}</CardTemperature>
            <TimeLabel>{chartData[2].name}</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>
      </RecentTemperatureBlock>

      <PredictionBlock>
        {days.map(({ day, weather, max, min }, idx) => (
          <PredictionItem key={idx}>
            <PredictionTime>{day}</PredictionTime>

            <PredictionWeatherIcon>
              <WeatherIcon type={weather} />
            </PredictionWeatherIcon>

            <PredictionTemperatureRange>
              <MinTemperature fontSizeInPx={18}>{min}</MinTemperature>
              <PredictionTemperature fontSizeInPx={18}>{max}</PredictionTemperature>
            </PredictionTemperatureRange>
          </PredictionItem>
        ))}
      </PredictionBlock>
    </PageWrapper>
  );
}

export default observer(PageToday);
