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
  const { title } = useViewModel();

  return (
    <PageWrapper>
      <TodayWeatherWrapper>
        <WeatherIcon themeType={'day'} type={'snow'} />
      </TodayWeatherWrapper>

      <BackButton to={'/'} />

      <PositionWrapper>
        <div>杭州市, </div>
        <div>浙江省</div>
      </PositionWrapper>

      <Temperature fontSizeInPx={96}>15</Temperature>

      <DataBar>
        <DataItemRainChance>
          <DataItemIcon src={rainIcon} />
          6%
        </DataItemRainChance>

        <DataItemHumidity>
          <DataItemIcon src={humidityIcon} />
          90%
        </DataItemHumidity>

        <DataItemWindLevel>
          <DataItemIcon src={windIcon} />
          19 km/h
        </DataItemWindLevel>
      </DataBar>

      <ChartTitle>Today</ChartTitle>
      <ChartContainer>
        <ChartWrapper>
          <PredicationChart
            data={[
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 15 },
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 0 },
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 0 },
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 0 },
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 0 },
              { name: '10 am', val: 10 },
              { name: '11 am', val: 20 },
              { name: '12 am', val: 0 },
            ]}
          />
        </ChartWrapper>
      </ChartContainer>

      <RecentTemperatureBlock>
        <RecentTemperatureCardWrapper>
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>12</CardTemperature>
            <TimeLabel>10 am</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>

        <RecentTemperatureCardWrapper>
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>12</CardTemperature>
            <TimeLabel>10 am</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>

        <RecentTemperatureCardWrapper>
          <HeightLightMark />
          <RecentTemperatureCard>
            <CardTemperature fontSizeInPx={36}>12</CardTemperature>
            <TimeLabel>10 am</TimeLabel>
          </RecentTemperatureCard>
        </RecentTemperatureCardWrapper>
      </RecentTemperatureBlock>

      <PredictionBlock>
        <PredictionItem>
          <PredictionTime>周一</PredictionTime>

          <PredictionWeatherIcon>
            <WeatherIcon themeType={'night'} type={'clouds'} />
          </PredictionWeatherIcon>

          <PredictionTemperatureRange>
            <MinTemperature fontSizeInPx={18}>10</MinTemperature>
            <PredictionTemperature fontSizeInPx={18}>12</PredictionTemperature>
          </PredictionTemperatureRange>
        </PredictionItem>

        <PredictionItem>
          <PredictionTime>周2</PredictionTime>

          <PredictionWeatherIcon>
            <WeatherIcon themeType={'day'} type={'clouds'} />
          </PredictionWeatherIcon>

          <PredictionTemperatureRange>
            <MinTemperature fontSizeInPx={18}>10</MinTemperature>
            <PredictionTemperature fontSizeInPx={18}>12</PredictionTemperature>
          </PredictionTemperatureRange>
        </PredictionItem>

        <PredictionItem>
          <PredictionTime>周一</PredictionTime>

          <PredictionWeatherIcon>
            <WeatherIcon themeType={'night'} type={'clouds'} />
          </PredictionWeatherIcon>

          <PredictionTemperatureRange>
            <MinTemperature fontSizeInPx={18}>10</MinTemperature>
            <PredictionTemperature fontSizeInPx={18}>12</PredictionTemperature>
          </PredictionTemperatureRange>
        </PredictionItem>

        <PredictionItem>
          <PredictionTime>周一</PredictionTime>

          <PredictionWeatherIcon>
            <WeatherIcon themeType={'night'} type={'clouds'} />
          </PredictionWeatherIcon>

          <PredictionTemperatureRange>
            <MinTemperature fontSizeInPx={18}>10</MinTemperature>
            <PredictionTemperature fontSizeInPx={18}>12</PredictionTemperature>
          </PredictionTemperatureRange>
        </PredictionItem>

        <PredictionItem>
          <PredictionTime>周一</PredictionTime>

          <PredictionWeatherIcon>
            <WeatherIcon themeType={'night'} type={'clouds'} />
          </PredictionWeatherIcon>

          <PredictionTemperatureRange>
            <MinTemperature fontSizeInPx={18}>10</MinTemperature>
            <PredictionTemperature fontSizeInPx={18}>12</PredictionTemperature>
          </PredictionTemperatureRange>
        </PredictionItem>
      </PredictionBlock>
    </PageWrapper>
  );
}

export default observer(PageToday);
