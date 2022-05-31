import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { _s } from '@/utils';
import classNames from 'classnames';

type Props = { fontSizeInPx: number };

const StyledWrapper = styled.div<Props>`
  font-size: ${({ fontSizeInPx }) => _s(fontSizeInPx)};
  font-weight: 700;

  * {
    vertical-align: revert;
  }
`;
const StyledSup = styled.sup<Props>`
  font-size: ${(props) => _s((24 / 96) * props.fontSizeInPx)};
  font-weight: 500;
`;

export default (props: Props & HTMLProps<any>) => (
  <StyledWrapper fontSizeInPx={props.fontSizeInPx} className={classNames('temperature-icon', props.className)}>
    <span>{props.children}</span>
    <StyledSup fontSizeInPx={props.fontSizeInPx}>℃</StyledSup>
  </StyledWrapper>
);
