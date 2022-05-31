import React from 'react';
import { observer } from 'mobx-react';
import useViewModel from './view.model';
import WeatherIcon from '@/components/common/WeatherIcon';
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

import rainIcon from '@assets/images/noun-rain.png';
import humidityIcon from '@assets/images/noun-humidity.png';
import windIcon from '@assets/images/noun-wind.png';
import homeIcon from '@assets/images/home-icon.png';

function PageHome(): JSX.Element {
  const { title } = useViewModel();

  return (
    <PageWrapper>
      <WIcon />
      {[
        { size: 7.98, top: 10.48, right: 72.96 },
        { size: 5, top: 31.92, right: 140.94 },
        { size: 11, bottom: 247, right: -5 },
        { size: 5, bottom: 210, right: 48 },
        { size: 4, bottom: 150, left: 57 },
        { size: 11, bottom: 109, left: 27 },
        { size: 5, bottom: 95, left: 94 },
      ].map((args, idx) => (
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

          <div>6%</div>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>
            <InfoItemIcon src={humidityIcon} />
            湿度
          </InfoItemLabel>

          <div>90%</div>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>
            <InfoItemIcon src={windIcon} />
            风速
          </InfoItemLabel>

          <div>19 km/h</div>
        </InfoItem>
      </InfoBlock>
      <SummaryBlock>
        <SummaryWeatherWrapper>
          <WeatherIcon themeType={'day'} type={'storm'} />
        </SummaryWeatherWrapper>

        <SummaryPosition>杭州市, 浙江省</SummaryPosition>
        <SummaryData>
          <SummaryDataLeft>
            <SummaryTemperature fontSizeInPx={64}>15</SummaryTemperature>
            <SummaryTime>周日, 11 am</SummaryTime>
          </SummaryDataLeft>

          <SummaryDataRight>
            <SummaryWindLevel>
              <span>强风</span>
            </SummaryWindLevel>
            <SummaryWeather>
              <span>多云</span>
            </SummaryWeather>
          </SummaryDataRight>
        </SummaryData>

        <SummaryDetailButton>详情</SummaryDetailButton>
      </SummaryBlock>
    </PageWrapper>
  );
}

export default observer(PageHome);
