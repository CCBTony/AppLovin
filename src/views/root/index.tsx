import { Wrapper } from './styled';
import React from 'react';
import useViewModel from './view.model';
import { observer } from 'mobx-react';

function AppRoot(): JSX.Element {
  const { count, user, onClick } = useViewModel();
  return (
    <Wrapper>
      <h2>count={count} </h2>
      <button onClick={onClick}>点击+1 , {user?.nick}</button>
    </Wrapper>
  );
}

export default observer(AppRoot);
