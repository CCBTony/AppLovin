import styled, { css } from 'styled-components';
import { HTMLProps } from 'react';
import React from 'react';
import classNames from 'classnames';
import { WeatherType } from './meta';
import { ThemeType } from '@/meta';
import { appModel } from '@/store';

type Props = {
  themeType?: ThemeType;
  type: WeatherType;
};

const Wrapper = styled.div<Props>((props) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const img = require(`@assets/images/${props.themeType}-${props.type}.png`);
  return css`
    width: 100%;
    height: 100%;
    background: url('${img.default ?? img}');
    background-size: 100% 100%;
    background-position: center;
  `;
});

export default (props: Props & HTMLProps<any>) => {
  const { themeType, type } = props;
  return (
    <Wrapper
      themeType={themeType ?? appModel.theme}
      type={type}
      className={classNames('weather-icon', props.className)}
    />
  );
};
