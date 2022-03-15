import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import BgImgs from '../features/background/BgImgs';
import Header from '../features/header/Header';
import Player from '../features/player/Player';

export default function App() {
  return (
    <StyledApp>
      <Header />
      <div className='body-area'>
        <div className='player'>
          <Player />
        </div>
        <div className='pages'>
          <Outlet />
        </div>
      </div>
      <BgImgs />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .body-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .player {
      width: 25%;
      min-width: 300px;
      height: calc(100vh - 3rem);
      display: flex;
      justify-content: center;
    }

    .pages {
      width: 75%;
      min-width: 300px;
      height: calc(100vh - 3rem);
      display: flex;
      justify-content: center;
    }
  }
`;
