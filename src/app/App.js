import React from 'react';
import styled from 'styled-components';

import BgImgs from '../features/background/BgImgs';
import Header from '../features/header/Header';
import Player from '../features/player/Player';

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Player />
      <BgImgs />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
`;
