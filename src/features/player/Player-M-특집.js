import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import { GoRadioTower } from 'react-icons/go';
import { Bars } from 'react-loader-spinner';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import defaultCover from '../../assets/breez-default-cover.png';
import getSongInfo from '../../common/api/getSongInfo';
import getYoutube from '../../common/api/getYoutube';
import ButtonAuth from '../../common/components/buttons/ButtonAuth';
import ButtonPlay from '../../common/components/buttons/ButtonPlay';
import { playerChanged, breezSongInfoChanged } from './playerSlice';

export default function Player() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const currentPlayerTarget = useSelector((state) => state.player.target);
  const currentPlayerUrls = useSelector((state) => state.player.urls);

  const [source, setSource] = useState(null);
  const [tags, setTags] = useState(null);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isPlay, setIsPlay] = useState(false);

  const [breezSongInfo, setBreezSongInfo] = useState(null);

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
    const checkSongInfo = setInterval(async () => {
      const songInfo = await getSongInfo();
      setBreezSongInfo(songInfo);
      dispatch(breezSongInfoChanged(songInfo));
    }, 5000);

    function handleYoutubeError() {
      const defaultUrl = 'https://youtu.be/9xABtV74XS0';
      const newPlayer = { target: 'default', urls: defaultUrl };
      dispatch(playerChanged(newPlayer));
    }

    async function setYoutubeUrl() {
      clearInterval(checkSongInfo);
      const query = `?????????`;

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
          handleYoutubeError();
        }
      } catch (error) {
        handleYoutubeError();
      }
    }

    async function setBreezUrl() {
      const newUrl = 'https://stream.radiojar.com/61qtsv9abkhvv';
      const newPlayer = { target: source, urls: newUrl };
      dispatch(playerChanged(newPlayer));
    }

    if (currentWeather && source === 'youtube') {
      setYoutubeUrl();
    } else if (source === 'breez') {
      setBreezUrl();
    } else {
      setSource('youtube');
    }

    return () => {
      clearInterval(checkSongInfo);
    };
  }, [breezSongInfo, currentWeather, dispatch, source]);

  useEffect(() => {
    if (volume > 0) {
      setMute(false);
    }
  }, [volume]);

  return (
    <StyledPlayer>
      {!currentPlayerTarget && (
        <div className='loader'>
          <Bars
            className='loader-obj'
            width='50'
            height='50'
            color='#db2677'
            ariaLabel='loading'
          />
        </div>
      )}
      {currentPlayerTarget === 'breez' && (
        <div className='breez-song-info'>
          <img
            className='cover'
            src={
              breezSongInfo && breezSongInfo.thumb
                ? breezSongInfo.thumb.replace('http://', 'https://')
                : defaultCover
            }
            alt={
              breezSongInfo &&
              `${breezSongInfo.artist} - ${breezSongInfo.title}`
            }
          />
          <div className='title'>{breezSongInfo && breezSongInfo.title}</div>
          <div className='artist'>{breezSongInfo && breezSongInfo.artist}</div>
          <div className='album'>
            {breezSongInfo && `${breezSongInfo.album} (${breezSongInfo.year})`}
          </div>
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
      {(currentPlayerTarget === 'youtube' ||
        currentPlayerTarget === 'default') && (
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
            ?????? ????????? ?????? ?????????. ????????? ???????????????~
          </div>
        )}
        <ButtonPlay isPlay={isPlay} onClick={handlePlayPause} />
      </div>
      <div className='content-wrapper'>
        <div className='content-notice'>
          {(currentPlayerTarget === null ||
            currentPlayerTarget === 'default') && (
            <p>
              ???? ?????? ?????? ???????????????.
              <li>????????????????????? ???????????? ???????????? ????</li>
              <li>????????? ????????? ?????? ???????????? ????</li>
              <li>Youtube api??? ???????????? ????</li>
              ?????? ?????? ????????? ????????? ???????????? ????
            </p>
          )}
          {currentPlayerTarget === 'youtube' && (
            <p>
              4??? 1???, ????????? ???????????? ??????????????? ????????? ?????? ????????????. ??????
              Feel Now??? ????????? ???????????? ?????? ????????????.
            </p>
          )}
          {currentPlayerTarget === 'breez' && (
            <p className='breez-description'>
              BREEZ?????? ????????? ????????? ?????? ????????????.
            </p>
          )}
          {currentPlayerTarget === 'youtube' && <p className='tag'> {tags}</p>}
        </div>
      </div>
      <div className='controller-source-selector'>
        {(pathname === '/' || pathname === '/feel') && (
          <>
            <ButtonAuth onClick={() => handleSource('youtube')}>
              <BsYoutube className='icon' />
              Feel Now
            </ButtonAuth>
            <ButtonAuth onClick={() => handleSource('breez')}>
              <GoRadioTower className='icon' />
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
  min-width: 200px;
  height: fit-content;
  background-color: #000000a2;
  border-radius: 0.3rem;
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;

  .loader {
    width: 100%;
    height: 12rem;
    margin: 1rem 0rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
      width: calc(100% - 2rem);
      aspect-ratio: 1 / 1;
    }

    .title {
      width: calc(100% - 3rem);
      text-align: center;
      font-weight: 800;
      color: #de4e00;
    }

    .artist {
      width: calc(100% - 3rem);
      font-weight: 800;
      text-align: center;
      margin-bottom: -0.3rem;
    }

    .album {
      width: calc(100% - 3rem);
      font-size: small;
      font-style: italic;
      text-align: center;
      color: #a0a0a0;
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

  .breez-description {
    text-align: center;
  }

  .controller-source-selector {
    margin: 0rem 0rem 0rem 0rem;
    padding: 0rem 0rem 1.5rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    margin-right: 0.4rem;
  }

  li {
    margin-left: 1rem;
  }
`;
