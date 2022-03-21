import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import BgImgsM from '../features/background/BgImgs-M';
import MHeader from '../features/header/Header-M';
import Player from '../features/player/Player';

export default function App() {
  const currentPlayerTarget = useSelector((state) => state.player.target);
  const currentPlayerUrls = useSelector((state) => state.player.urls);
  const currentPlayerSongInfo = useSelector(
    (state) => state.player.breezSongInfo
  );

  const playerDom = useRef();
  const bgImgDom = useRef();
  const [playerHeight, setPlayerHeight] = useState(553);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Mobile UX loaded...📱');
  }, []);

  useEffect(() => {
    function getPlayerHeight() {
      if (playerDom.current) {
        const newPlayerHeight = playerDom.current.clientHeight;
        setPlayerHeight(newPlayerHeight);
      }
    }

    getPlayerHeight();
  }, [currentPlayerTarget, currentPlayerUrls, currentPlayerSongInfo]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('현재 플레이어 높이', playerHeight);
  }, [playerHeight]);

  return (
    <StyledApp playerHeight={playerHeight}>
      <MHeader />
      <div className='body-area'>
        <div className='player' ref={playerDom}>
          <Player />
        </div>
      </div>
      <div className='pages'>
        <Outlet />
      </div>
      <div className='bg-imgs' ref={bgImgDom}>
        <BgImgsM playerHeight={playerHeight} />
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .body-area {
    width: 100%;
    margin-bottom: 3rem;
    /* margin-bottom: calc(${(props) =>
      `${props.playerHeight}px - 30.75rem`}); */
    display: flex;
    flex-direction: column;

    .player {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .pages {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .bg-imgs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
  }
`;
