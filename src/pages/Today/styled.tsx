import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backArrowIcon from '@assets/images/back-arrow.svg';
import TemperatureIcon from '@/components/common/TemperatureIcon';
import { _s } from '@/utils';

export const PageWrapper = styled.div`
  position: relative;
  overflow: auto;
  min-height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BackButton = styled(Link)`
  margin-top: ${_s(65)};
  margin-left: ${_s(20)};
  margin-bottom: ${_s(41)};
  display: block;
  text-decoration: none;
  width: ${_s(24)};
  height: ${_s(24)};
  background: url('${backArrowIcon}');
  background-size: 100%;
  background-position: center;
`;

export const TodayWeatherWrapper = styled.div`
  width: ${_s(100)};
  height: ${_s(100)};
  position: absolute;
  top: ${_s(39)};
  right: ${_s(16)};
`;

export const PositionWrapper = styled.div`
  width: ${_s(375 - 22 * 2)};
  font-weight: 700;
  font-size: ${_s(30)};
  line-height: ${_s(36)};
  position: relative;
  color: #332821;
  margin-left: ${_s(22)};

  > div {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Temperature = styled(TemperatureIcon)`
  margin-left: ${_s(20)};
`;

export const DataBar = styled.div`
  padding: 0 ${_s(21)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DataItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${_s(5)} ${_s(12)};
  font-size: ${_s(14)};
  font-weight: 700;
  border-radius: 100vw;
`;
export const DataItemIcon = styled.img`
  display: block;
  width: ${_s(24)};
  height: ${_s(24)};
  margin-right: ${_s(5)};
`;
export const DataItemRainChance = styled(DataItem)`
  color: #658ed9;
  background: #658ed91a;
`;
export const DataItemHumidity = styled(DataItem)`
  color: #d86191;
  background: #d861911a;
`;
export const DataItemWindLevel = styled(DataItem)`
  color: #5e4fc1;
  background: #5e4fc11a;
`;

export const ChartTitle = styled.div`
  margin: ${_s(20)} 0 ${_s(10)} ${_s(20)};
  font-size: ${_s(18)};
  font-weight: 800;
  color: #332821;
  line-height: ${_s(22)};
  height: ${_s(22)};
`;
export const ChartContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ChartWrapper = styled.div`
  width: 400vw;
  height: ${_s(110)};
`;

export const RecentTemperatureBlock = styled.div`
  padding: 0 ${_s(21)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeLabel = styled.div`
  height: ${_s(17)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: ${_s(14)};
  color: #33282180;
`;
export const RecentTemperatureCardWrapper = styled.div`
  width: ${_s(90)};
  height: ${_s(109)};
  position: relative;
`;
export const HeightLightMark = styled.div`
  width: ${_s(90)};
  height: ${_s(33)};
  position: absolute;
  left: 0;
  bottom: ${_s(-9)};
  background: #ececec;
  filter: blur(${_s(20)});
  border-radius: ${_s(20)};
`;
export const CardTemperature = styled(TemperatureIcon)``;
export const RecentTemperatureCard = styled(RecentTemperatureCardWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  box-sizing: border-box;
  padding-top: ${_s(33)};
  border-radius: ${_s(20)};

  ${TimeLabel} {
    margin-top: ${_s(3)};
  }

  ${CardTemperature} {
    sup {
      font-size: ${_s(13)};
    }
  }
`;

export const PredictionBlock = styled.div`
  margin-top: ${_s(12)};
  padding: 0 ${_s(20)};
`;
export const PredictionItem = styled.div`
  height: ${_s(50)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const PredictionTime = styled.div`
  height: ${_s(22)};
  line-height: ${_s(22)};
  font-size: ${_s(18)};
  font-weight: 700;
  color: #332821;
`;
export const PredictionWeatherIcon = styled.div`
  width: ${_s(30)};
  height: ${_s(30)};
`;
export const PredictionTemperatureRange = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
export const PredictionTemperature = styled(TemperatureIcon)`
  span {
    font-weight: 500;
  }
`;
export const MinTemperature = styled(PredictionTemperature)`
  color: #33282180;
  margin-left: ${_s(10)};
`;
