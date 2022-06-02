import React from 'react';
import { observer } from 'mobx-react';
import WeatherIcon from '@/components/common/WeatherIcon';
import useViewModel from './model.view';
import { WIND_LEVEL } from '@/meta';
import dayjs from 'dayjs';
import * as weather from '@/utils/weather';

import {
  PageWrapper,
  SummaryBlock,
  NavBar,
  InfoBlock,
  SummaryWeatherWrapper,
  SummaryDetailButton,
  SummaryData,
  SummaryPosition,
  SummaryDataLeft,
  SummaryTemperature,
  SummaryTime,
  SummaryDataRight,
  SummaryWeather,
  SummaryWindLevel,
  InfoItemLabel,
  InfoItem,
  InfoItemIcon,
  WIcon,
  Point,
  NavButton,
  NavButtonIcon,
  NavButtonLabel,
} from './styled';

import rainIcon from '@assets/images/noun-rain.svg';
import humidityIcon from '@assets/images/noun-humidity.svg';
import windIcon from '@assets/images/noun-wind.svg';
import homeIcon from '@assets/images/home-icon.svg';

function PageHome(): JSX.Element {
  const model = useViewModel();

  const {
    appModel: { todayWeather },
  } = model;

  return (
    <PageWrapper>
      <WIcon />
      {model.points.map((args, idx) => (
        <Point {...args} key={idx} />
      ))}

      <NavBar>
        <NavButton>
          <NavButtonIcon src={homeIcon} />
          <NavButtonLabel>Home</NavButtonLabel>
        </NavButton>
      </NavBar>

      <InfoBlock>
        <InfoItem>
          <InfoItemLabel>
            <InfoItemIcon src={rainIcon} />
            降水量
          </InfoItemLabel>

          <div>{todayWeather.precip} mm</div>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>
            <InfoItemIcon src={humidityIcon} />
            湿度
          </InfoItemLabel>

          <div>{todayWeather.humidity}%</div>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>
            <InfoItemIcon src={windIcon} />
            风速
          </InfoItemLabel>

          <div>{todayWeather.windSpeed} km/h</div>
        </InfoItem>
      </InfoBlock>
      <SummaryBlock>
        <SummaryWeatherWrapper>
          <WeatherIcon type={weather.translateDescriptionToType(todayWeather.text)} />
        </SummaryWeatherWrapper>

        <SummaryPosition>杭州市, 浙江省</SummaryPosition>
        <SummaryData>
          <SummaryDataLeft>
            <SummaryTemperature fontSizeInPx={64}>{todayWeather.temp}</SummaryTemperature>
            <SummaryTime>
              {dayjs().locale('zh-cn').format('dddd').replace('星期', '周')}，{dayjs().format('h a')}
            </SummaryTime>
          </SummaryDataLeft>

          <SummaryDataRight>
            <SummaryWindLevel>
              <span>{(WIND_LEVEL as any)[todayWeather.windScale]}</span>
            </SummaryWindLevel>
            <SummaryWeather>
              <span>{todayWeather.text}</span>
            </SummaryWeather>
          </SummaryDataRight>
        </SummaryData>

        <SummaryDetailButton to={'/today'}>详情</SummaryDetailButton>
      </SummaryBlock>
    </PageWrapper>
  );
}

export default observer(PageHome);
