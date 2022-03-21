import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import BgImgs from '../features/background/BgImgs';
import MHeader from '../features/header/MHeader';
import Player from '../features/player/Player';

export default function App() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Mobile UX loaded...📱');
  }, []);

  return (
    <StyledApp>
      <MHeader />
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
  display: flex;
  flex-direction: column;

  .body-area {
    width: 100%;
    display: flex;
    flex-direction: column;

    .player {
      width: 100%;
      height: calc(100vh - 3rem);
      display: flex;
      justify-content: center;
    }

    .pages {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
