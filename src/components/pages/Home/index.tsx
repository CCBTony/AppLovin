import { Wrapper } from './styled';
import React from 'react';
import { observer } from 'mobx-react';
import useViewModel from './view.model';

function PageHome(): JSX.Element {
  const { title } = useViewModel();
  return <Wrapper>Home {title} </Wrapper>;
}

export default observer(PageHome);
