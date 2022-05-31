import { Wrapper } from './styled';
import React from 'react';
import useViewModel from './view.model';
import { observer } from 'mobx-react';

function Tpl(): JSX.Element {
  const { title } = useViewModel();
  return <Wrapper>Today Detail {title}</Wrapper>;
}

export default observer(Tpl);
