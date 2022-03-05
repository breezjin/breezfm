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
    setVolume(Number(e.target.value));
  };

  const handleVolumeMinChange = () => {
    setVolume(0);
  };

  const handleVolumeMaxChange = () => {
    setVolume(1);
  };

  useEffect(() => {
    async function setYoutubeUrl() {
      const query = `${currentWeather.weather[0].description}`
        .split(' ')
        .join(',');
      const { data } = await getYoutube(String(query));
      if (data && data.items.length > 0) {
        const newUrls = [];
        data.items.forEach((item) => {
          const newUrl = `https://youtu.be/${item.id.videoId}`;
          newUrls.push(newUrl);
        });
        setUrl(newUrls);
      } else {
        const newUrl = 'https://youtu.be/9xABtV74XS0';
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
        {volume === 0 && (
          <div className='content-notice'>
            ⚠️ 음소거 상태 입니다. 볼륨을 높여주세요~
          </div>
        )}
        <ButtonPlay isPlay={isPlay} onClick={handlePlayPause} />
      </div>
      <div className='content-wrapper'>
        <div className='content-notice'>
          {url === 'https://youtu.be/9xABtV74XS0' && (
            <p>
              🤔 적당한 음악을 찾지 못해서 기본 음악이 송출되는 중입니다. query
              세팅이 더 잘 구성되어야 하겠어요. 흠...
            </p>
          )}
          <span>
            현재 breez.fm 개편 중입니다. 위치정보 동의를 해주시면 지금 당신이
            있는 공간의 분위기를 살펴서 적절한 음악이 자동 재생됩니다.
          </span>
        </div>
      </div>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.div`
  z-index: 10;
  position: relative;
  top: 4rem;
  left: 2rem;
  width: 25%;
  min-width: 300px;
  background-color: #000000a2;
  border-radius: 0.3rem;
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
    padding: 1rem 1rem 1rem 1rem;
  }

  .content-notice {
    font-size: small;
    padding: 1rem;
  }
`;
