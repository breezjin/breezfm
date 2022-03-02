import React, { useEffect, useState } from 'react';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import getYoutube from '../../common/api/getYoutube';
import ButtonPlay from '../../common/components/buttons/ButtonPlay';

export default function Player() {
  const [url, setUrl] = useState(null);
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  const handlePlayPause = () => {
    setIsPlay((current) => !current);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleVolumeMinChange = () => {
    setVolume(0);
  };

  const handleVolumeMaxChange = () => {
    setVolume(1);
  };

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

  useEffect(() => {
    if (volume > 0) {
      setMute(false);
    }
  }, [volume]);

  return (
    <StyledPlayer>
      <div className='player-wrapper'>
        <div className='player-wrapper-inner'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            playing={isPlay}
            muted={mute}
            volume={volume}
            loop={true}
            pip={true}
          />
        </div>
      </div>
      <div className='controller-wrapper'>
        <div className='controll-volume'>
          <div
            className='controll-volume-minmax'
            role='button'
            onClick={() => handleVolumeMinChange()}
            onKeyDown={() => handleVolumeMinChange()}
            tabIndex={0}
          >
            <GiSpeakerOff className='controll-volume-minmax-btn' />
          </div>
          <input
            className='controll-volume-bar'
            type='range'
            min={0}
            max={1}
            step='any'
            value={volume}
            onChange={handleVolumeChange}
          />
          <div
            className='controll-volume-minmax'
            role='button'
            onClick={() => handleVolumeMaxChange()}
            onKeyDown={() => handleVolumeMaxChange()}
            tabIndex={0}
          >
            <GiSpeaker className='controll-volume-minmax-btn' />
          </div>
        </div>
        <ButtonPlay isPlay={isPlay} onClick={handlePlayPause} />
      </div>
      <div className='content-wrapper'>컨텐츠 관련 메시지 나올 공간임</div>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.div`
  z-index: 1;
  position: relative;
  top: 4rem;
  left: 2rem;
  width: 25%;
  min-width: 300px;
  background-color: #000000a2;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;

  .player-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding: 1rem 1rem 56.25% 1rem;

    .player-wrapper-inner {
      position: absolute;
      top: 1rem;
      right: 3rem;
      bottom: 0;
      left: 1rem;
    }
  }

  .controller-wrapper {
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .controll-volume {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      .controll-volume-bar {
        flex-grow: 1;
      }

      .controll-volume-minmax-btn {
        font-size: 1.5rem;
        margin-top: 4px;
      }
    }
  }

  .content-wrapper {
    padding: 0rem 1rem 2rem 1rem;
  }
`;
