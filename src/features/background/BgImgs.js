import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import styled, { css } from 'styled-components';

import bgDark from '../../assets/bg-dark.png';
import getImgs from '../../common/api/getImgs';
import UnsplashAttribute from './UnsplashAttribute';

export default function BgImgs() {
  const [currentImgs, setCurrentImgs] = useState(null);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  useEffect(() => {
    async function getCurrentImgs() {
      const query = `${currentWeather.weather[0].main}`.split(' ').join(',');
      const newImgs = [];
      const imgs = await getImgs(String(query));
      if (!(typeof imgs === 'string')) {
        imgs.data.forEach((img) => {
          const newImg = {
            url: `${img.urls.regular}`,
            caption: `${img.description}`,
            photographerName: `${img.user.name}`,
            photographerProfile: `${img.user.links.html}`,
          };
          newImgs.push(newImg);
        });
        setCurrentImgs(newImgs);
      }
    }

    if (currentWeather) getCurrentImgs();
  }, [currentWeather]);

  return (
    <StyledBgImgs currentImgs={currentImgs}>
      {currentImgs && (
        <div className='slide-container'>
          <Fade
            duration={10000}
            transitionDuration={3000}
            autoplay={true}
            arrows={false}
          >
            {currentImgs.map((currentImg) => (
              <div
                className='each-fade'
                key={currentImg.caption}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: `url(${currentImg.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <UnsplashAttribute
                  profile={currentImg.photographerProfile}
                  name={currentImg.photographerName}
                />
              </div>
            ))}
          </Fade>
        </div>
      )}
    </StyledBgImgs>
  );
}

const StyledBgImgs = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${(props) =>
    !props.currentImgs &&
    css`
      background: url(${bgDark}) repeat top left;
    `}
`;
