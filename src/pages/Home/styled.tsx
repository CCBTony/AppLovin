import styled, { css } from 'styled-components';
import { _s } from '@/utils';
import TemperatureIcon from '@/components/common/TemperatureIcon';
import wIcon from '@assets/images/w-icon.svg';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  background: linear-gradient(180deg, #e75481 -22.84%, #929cde 113.36%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: ${_s(20)};
`;
export const WIcon = styled.div`
  background-image: url('${wIcon}');
  background-size: 100%;
  background-position: center;
  width: ${_s(60)};
  height: ${_s(60)};
  position: absolute;
  top: ${_s(49)};
  left: ${_s(16)};
`;
export const Point = styled.div<{ size: number; top?: number; left?: number; bottom?: number; right?: number }>(
  ({ size, top, left, right, bottom }) => {
    return css`
      width: ${_s(size)};
      height: ${_s(size)};
      position: absolute;
      top: ${top ? _s(top) : undefined};
      bottom: ${bottom ? _s(bottom) : undefined};
      left: ${left ? _s(left) : undefined};
      right: ${right ? _s(right) : undefined};
      background: white;
      border-radius: 100px;
    `;
  },
);

export const SummaryBlock = styled.div`
  position: relative;
  width: ${_s(230)};
  height: ${_s(247)};
  border-radius: ${_s(30)};
  background: white;
  box-shadow: ${_s(4)} 0 ${_s(20)} rgba(0, 0, 0, 0.25);
  margin-top: ${_s(110)};
  box-sizing: border-box;
  padding-top: ${_s(79)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SummaryPosition = styled.div`
  font-size: ${_s(20)};
  font-weight: 700;
  width: 90%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const SummaryData = styled.div`
  width: ${_s(230 - 18 * 2)};
  display: flex;
  justify-content: space-between;
`;
export const SummaryDataLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SummaryTemperature = styled(TemperatureIcon)`
  line-height: ${_s(77)};
`;
export const SummaryTime = styled.div`
  font-size: ${_s(14)};
  font-weight: 500;
  color: rgba(51, 40, 33, 0.5);
  margin-top: ${_s(-9)};
`;
export const SummaryDataRight = styled.div`
  padding-top: ${_s(25)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const SummaryLabel = styled.div`
  height: ${_s(16)};
  margin-bottom: ${_s(4)};
  border-radius: ${_s(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  span {
    font-size: ${_s(10)};
    font-weight: 500;
    transform: scale(${10 / 12});
    transform-origin: center;
  }
`;
export const SummaryWindLevel = styled(SummaryLabel)`
  width: ${_s(72)};
  background: rgba(212, 66, 111, 0.5);
`;
export const SummaryWeather = styled(SummaryLabel)`
  width: ${_s(50)};
  background: rgba(106, 117, 186, 0.5);
`;
export const SummaryWeatherWrapper = styled.div`
  width: ${_s(120)};
  height: ${_s(120)};
  position: absolute;
  top: ${_s(-71)};
  left: ${_s(55)};
`;
export const SummaryDetailButton = styled(Link)`
  width: ${_s(163)};
  height: ${_s(47)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${_s(14)};
  font-weight: 700;
  color: white;
  background: #5e4fc1;
  border-radius: ${_s(18)};
  position: absolute;
  bottom: ${_s(-29)};
  left: ${_s((230 - 160) / 2)};
  text-decoration: none;
`;

export const InfoBlock = styled.div`
  height: ${_s(92)};
  margin: ${_s(48)} 0;
  font-size: ${_s(18)};
  font-weight: 500;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InfoItem = styled.div`
  width: ${_s(160)};
  height: ${_s(24)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InfoItemLabel = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoItemIcon = styled.div<{
  src: string;
}>`
  background-image: url('${(props) => props.src}');
  width: ${_s(24)};
  height: ${_s(24)};
  background-size: 100% 100%;
  background-position: center;
  margin-right: ${_s(10)};
`;

export const NavBar = styled.div`
  width: ${_s(343)};
  height: ${_s(64)};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 ${_s(34)};
  background: white;
  border-radius: ${_s(20)};
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const NavButtonIcon = styled.div<{ src: string }>`
  width: ${_s(24)};
  height: ${_s(24)};
  background: url('${(props) => props.src}');
  background-size: 100%;
  background-position: center;
`;
export const NavButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${_s(14)};
  font-size: ${_s(12)};
  font-weight: 500;
  margin-top: ${_s(2)};
  color: #d86191;
`;
