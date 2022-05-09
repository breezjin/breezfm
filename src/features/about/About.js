import React from 'react';
import styled from 'styled-components';

import ytIcon from '../../assets/yt_icon_mono_dark.png';
import ytIconRed from '../../assets/yt_icon_rgb.png';

export default function About() {
  return (
    <StyledAbout>
      <div className='layout'>
        <h2 className='content'>About BREEZ</h2>
        <div className='content'>
          2006년 부터 <i>좋은 음악</i>, <i>좋은 이야기</i>, <i>좋은 사람들</i>{' '}
          과 함께하고 있습니다.
          <br />
          평소 쉽게 접할 수 없었던 진정성 있는 음악, 장르들을 발굴하여 함께
          나누는 공간을 지향 합니다.
          <br />
          2022년부터는 <i>개인화된 Music Platform</i> 으로 발전하기 위한 노력을
          시작 합니다.
          <br />
          세상의 수 많은 좋은 음악들 중에서도 BREEZ만의 음악적 취향을 많은
          사람들과 나눌 수 있도록 지속적인 노력을 해나가겠습니다.
          <br />
          조금씩 매번 더 발전하는 BREEZ의 새로운 모습을 기대해 주시기 바랍니다.
        </div>
        <hr />
        <div className='content'>
          <p>
            * Contact Us :{' '}
            <a href='mailto:master@breez.fm' target='_blank' rel='noreferrer'>
              master@breez.fm
            </a>
          </p>
        </div>
      </div>
      <div className='layout'>
        <h2 className='content'>BREEZ History</h2>
        <div className='content'>
          <div className='list'>
            <div className='year'>2022년 - 서비스 개편, Feel Now 런칭</div>
            <div className='didDo'>개인화된 Music Platform으로 진화 시작</div>
          </div>
          <div className='list'>
            <div className='year'>
              2018년 - 싹수다방 팟캐스트 서비스 운영 대행
            </div>
            <div className='didDo'>
              손민아 아나운서와 셀럽들이 진행하는 팟캐스트 서비스 컨설팅 및 운영
            </div>
          </div>
          <div className='list'>
            <div className='year'>2017년 - BREEZ.fm 오픈</div>
            <div className='didDo'>독자적인 Web Radio Service 런칭</div>
          </div>
          <div className='list'>
            <div className='year'>2017년 - 서비스 및 사명 BREEZ 로 변경</div>
            <div className='didDo'>BREEZ Communications LLC</div>
          </div>
          <div className='list'>
            <div className='year'>2014년 - GNYP (Gloomy New Year Party)</div>
            <div className='didDo'>
              9와숫자들, KUMA PARK, Drexl Beatz, 신나는 섬
            </div>
          </div>
          <div className='list'>
            <div className='year'>
              2012년 - MGCP (Merry Gloomy Christmas Party) 3회
            </div>
            <a
              href='https://youtu.be/95YV53uRHsE'
              target='_blank'
              rel='noreferrer'
            >
              <div className='yt-link' />
            </a>
            <div className='didDo'>
              Silent Night, Acoustic Night / 김사랑, 하헌진, 가내수공업, 相思夢
              Project, TVP Studio
            </div>
          </div>
          <div className='list'>
            <div className='year'>
              2011년 - MGCP (Merry Gloomy Christmas Party) 2회
            </div>
            <a
              href='https://youtu.be/Zx_S2Dl9kUY'
              target='_blank'
              rel='noreferrer'
            >
              <div className='yt-link' />
            </a>
            <div className='didDo'>
              Lost X-mas Eve / 3호선 버터플라이, 유영민 퀄텟, DJ Sir Insane
            </div>
          </div>
          <div className='list'>
            <div className='year'>
              2010년 - MGCP (Merry Gloomy Christmas Party) 1회
            </div>
            <div className='didDo'>
              남무성의 해설이 있는 Jazz Concert / 재즈 평론가 남무성, 류복성,
              Gentle Rain, 김민주
            </div>
          </div>
          <div className='list'>
            <div className='year'>2010년 - Gloomy Cafe App 출시</div>
            <div className='didDo'>
              현재는 제공하지 않습니다. 다만 곧 BREEZ App이 출시될 예정 입니다.
            </div>
          </div>
          <div className='list'>
            <div className='year'>2007년 - 법인설립</div>
            <div className='didDo'>
              Podcast iTunes Main Cover 선정 / DMB 컨텐츠 제공
            </div>
          </div>
          <div className='list'>
            <div className='year'>2006년 - Gloomy Cafe 탄생</div>
            <div className='didDo'>
              Gloomy Cafe LLC / 우울한 이들을 위한 우울한 음악방송 / Podcast
              런칭
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  z-index: 5;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: #000000a2;
  border-radius: 0.3rem;
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: green;
  }

  a {
    color: white;
  }

  i {
    font-weight: 600;
    color: beige;
  }

  .layout {
    margin: 2rem 4rem -1rem 4rem;
  }

  .list {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .year {
    font-weight: 600;
    color: whitesmoke;
  }

  .didDo {
    font-size: small;
    color: gray;
  }

  .yt-link {
    z-index: 6;
    width: 28px;
    height: 20px;
    background: url(${ytIcon});

    :hover {
      background: url(${ytIconRed});
    }
  }
`;
