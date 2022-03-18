import React, { useEffect, useState } from 'react';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import defaultCover from '../../assets/breez-default-cover.png';
import { getSongInfo, getSongCover } from '../../common/api/getSongInfo';
import getYoutube from '../../common/api/getYoutube';
import ButtonAuth from '../../common/components/buttons/ButtonAuth';
import ButtonPlay from '../../common/components/buttons/ButtonPlay';
import { playerChanged } from './playerSlice';

export default function Player() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const currentPlayerTarget = useSelector((state) => state.player.target);
  const currentPlayerUrls = useSelector((state) => state.player.urls);

  const [source, setSource] = useState(null);
  const [tags, setTags] = useState(null);
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(0);
  const [isPlay, setIsPlay] = useState(true);

  const [breezSongArtist, setBreezSongArtist] = useState('');
  const [breezSongTitle, setBreezSongTitle] = useState('');
  const [breezSongCover, setBreezSongCover] = useState(null);

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

  const handleSource = (selectedSource) => {
    setSource(selectedSource);
  };

  useEffect(() => {
    setSource('youtube');
  }, []);

  useEffect(() => {
    function handlePlayerError() {
      const newUrl = 'https://youtu.be/9xABtV74XS0';
      const newPlayer = { target: null, urls: newUrl };
      dispatch(playerChanged(newPlayer));
    }

    async function setYoutubeUrl() {
      clearInterval(checkSongInfo);
      const query = `${currentWeather.weather[0].main}`;

      try {
        const { data, queryString } = await getYoutube(query);
        if (data && data.items.length > 0) {
          const newUrls = [];
          data.items.forEach((item) => {
            const newUrl = `https://youtu.be/${item.id.videoId}`;
            newUrls.push(newUrl);
          });
          const newPlayer = { target: source, urls: newUrls };
          dispatch(playerChanged(newPlayer));
          setTags(
            queryString.replace('[playlist],music', '').split(',').join(' #')
          );
        } else {
          handlePlayerError();
        }
      } catch (error) {
        handlePlayerError();
      }
    }

    const checkSongInfo = setInterval(async () => {
      const { artist, title } = await getSongInfo();
      if (breezSongArtist !== artist || breezSongTitle !== title) {
        const cover = await getSongCover(artist, title);
        setBreezSongArtist(artist);
        setBreezSongTitle(title);
        setBreezSongCover(cover);
      }
    }, 5000);

    async function setBreezUrl() {
      const newUrl = 'https://stream.zeno.fm/6trddptrsg0uv';
      const newPlayer = { target: source, urls: newUrl };
      dispatch(playerChanged(newPlayer));
      checkSongInfo();
    }

    if (currentWeather && source === 'youtube') {
      setYoutubeUrl();
    } else if (source === 'breez') {
      setBreezUrl();
    } else {
      handlePlayerError();
    }

    return () => {
      clearInterval(checkSongInfo);
    };
  }, [breezSongArtist, breezSongTitle, currentWeather, dispatch, source]);

  useEffect(() => {
    if (volume > 0) {
      setMute(false);
    }
  }, [volume]);

  return (
    <StyledPlayer>
      {source === 'breez' && (
        <div className='breez-song-info'>
          <img
            className='cover'
            src={breezSongCover || defaultCover}
            alt={`${breezSongArtist} - ${breezSongTitle}`}
          />
          <div className='artist'>{breezSongArtist}</div>
          <div className='title'>{breezSongTitle}</div>
          <ReactPlayer
            className='react-player'
            url={currentPlayerUrls}
            width='0'
            height='0'
            playing={isPlay}
            muted={mute}
            volume={volume}
            loop={true}
            pip={true}
          />
        </div>
      )}
      {source === 'youtube' && (
        <div className='player-wrapper'>
          <div className='player-wrapper-inner'>
            <ReactPlayer
              className='react-player'
              url={currentPlayerUrls}
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
      )}
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
          <div className='controll-volume-notice'>
            ⚠️ 음소거 상태 입니다. 볼륨을 높여주세요~
          </div>
        )}
        <ButtonPlay isPlay={isPlay} onClick={handlePlayPause} />
      </div>
      <div className='content-wrapper'>
        <div className='content-notice'>
          {!currentPlayerTarget && (
            <p>
              🤔 현재 이런 상황이에요.
              <li>위치정보공유를 동의하지 않았거나 😥</li>
              <li>적당한 음악을 찾지 못했거나 🫣</li>
              <li>Youtube api가 막혔거나 😱</li>
              해서 기본 음악이 나가는 중입니다 🤗
            </p>
          )}
          <p>현재 breez.fm 개편 중입니다.</p>
          {currentPlayerTarget === 'youtube' && (
            <p>
              위치정보 동의를 해주시면 지금 당신이 있는 공간의 분위기를 살펴서
              적절한 음악이 자동 재생됩니다.
            </p>
          )}
          {currentPlayerTarget === 'breez' && (
            <p>
              BREEZ에서 준비한 음악이 송출 중입니다. 간혹 서버 퍼포먼스 문제로
              음악과 음악정보가 맞지 않을 수도 있습니다.
            </p>
          )}
          {currentPlayerTarget === 'youtube' && <p className='tag'> {tags}</p>}
        </div>
      </div>
      <div className='controller-source-selector'>
        {(pathname === '/' || pathname === '/feel') && (
          <>
            <ButtonAuth onClick={() => handleSource('youtube')}>
              Feel Now
            </ButtonAuth>
            <ButtonAuth onClick={() => handleSource('breez')}>
              Feel BREEZ
            </ButtonAuth>
          </>
        )}
      </div>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.div`
  z-index: 10;
  width: 90%;
  min-width: 300px;
  height: fit-content;
  background-color: #000000a2;
  border-radius: 0.3rem;
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;

  .breez-song-info {
    position: relative;
    width: 100%;
    margin: 1rem 0rem 0rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .cover {
      width: calc(100% - 3rem);
    }

    .artist {
      width: calc(100% - 3rem);
      font-weight: 800;
      text-align: center;
    }

    .title {
      width: calc(100% - 3rem);
      font-size: small;
      text-align: center;
    }
  }

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
        cursor: pointer;
      }
    }

    .controll-volume-notice {
      font-size: small;
    }
  }

  .content-wrapper {
    padding: 1rem 1rem 1rem 1rem;

    .content-notice {
      font-size: small;
      padding: 0rem 1rem;
    }

    .tag {
      color: #a0a0a0;
    }
  }

  .controller-source-selector {
    margin: 0rem 0rem 0rem 0rem;
    padding: 0rem 0rem 1rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  li {
    margin-left: 1rem;
  }
`;
