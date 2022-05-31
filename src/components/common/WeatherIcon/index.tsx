import styled, { css } from 'styled-components';

// import ImgDayFine from '@assets/images/day-fine.png';
// import ImgDayCloud from '@assets/images/day-clouds.png';
// import ImgDayWind from '@assets/images/day-wind.png';
// import ImgDayRain from '@assets/images/day-rain.png';
// import ImgDaySnow from '@assets/images/day-snow.png';
// import ImgDayStorm from '@assets/images/day-storm.png';
//
// import ImgNightFine from '@assets/images/night-fine.png';
// import ImgNightCloud from '@assets/images/night-clouds.png';
// import ImgNightWind from '@assets/images/night-wind.png';
// import ImgNightRain from '@assets/images/night-rain.png';
// import ImgNightSnow from '@assets/images/night-snow.png';
// import ImgNightStorm from '@assets/images/night-storm.png';

export default styled.div<{
  themeType: 'day' | 'night';
  type: 'fine' | 'clouds' | 'wind' | 'rain' | 'snow' | 'storm';
}>(
  (props) => css`
    width: 100%;
    height: 100%;
    background: url('${require(`@assets/images/${props.themeType}-${props.type}.png`)}');
    background-size: 100% 100%;
    background-position: center;
  `,
);
