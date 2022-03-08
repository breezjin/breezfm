import React from 'react';
import styled from 'styled-components';

import BgImgs from '../features/background/BgImgs';
import Feeds from '../features/feed/Feeds';
import Header from '../features/header/Header';
import Player from '../features/player/Player';

export default function App() {
  return (
    <StyledApp>
      <Header />
      <BgImgs />
      <Player />
      <Feeds />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
`;
