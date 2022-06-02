import { Wrapper } from './styled';
import React from 'react';
import useViewModel from './model.view';
import { observer } from 'mobx-react';

function Tpl(): JSX.Element {
  const { title } = useViewModel();
  return <Wrapper>{title}</Wrapper>;
}

export default observer(Tpl);
