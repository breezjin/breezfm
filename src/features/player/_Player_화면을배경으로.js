import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import getYoutube from '../../common/api/getYoutube';

export default function Player() {
  const [url, setUrl] = useState(null);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  useEffect(() => {
    async function setYoutubeUrl() {
      const query = currentWeather.weather[0].description;
      const { data } = await getYoutube(query);
      if (data) {
        const newUrls = [];
        data.items.forEach((item) => {
          const newUrl = `https://youtu.be/${item.id.videoId}`;
          newUrls.push(newUrl);
        });
        setUrl(newUrls);
      } else {
        const newUrl = `https://youtu.be/9xABtV74XS0`;
        setUrl(newUrl);
      }
    }

    if (currentWeather) {
      setYoutubeUrl();
    }
  }, [currentWeather]);

  return (
    <>
      <StyledPlayer>
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          muted={true}
          playing={true}
          loop={true}
        />
      </StyledPlayer>
      <StyledController>
        <div className='player-wrapper'>asdf</div>
        <div className='content-wrapper'>
          <div>breadsfasdgasdfasdgasdfasgddasfasdgezfm start</div>
        </div>
      </StyledController>
    </>
  );
}

const StyledPlayer = styled.div`
  z-index: 1;
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledController = styled.div`
  z-index: 2;
  position: relative;
  top: 4rem;
  left: 2rem;
  width: 25%;
  background-color: #000000a2;
  display: flex;
  flex-direction: column;

  .player-wrapper {
    padding: 2rem 1rem;
  }

  .content-wrapper {
    padding: 0rem 1rem 2rem 1rem;
  }

  .react-player {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
