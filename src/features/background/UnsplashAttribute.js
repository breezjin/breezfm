import Proptypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function UnsplashAttribute({ profile, name }) {
  const navigate = useNavigate();

  return (
    <StyledUnsplashAttribute>
      <div className='copy'>
        <div>Since 2007, Copyright © 2022 BREEZ Communications LLC</div>
      </div>
      <div className='split'>|</div>
      <div className='terms'>
        <div
          className='link'
          role='button'
          onClick={() => navigate('terms/service')}
          onKeyDown={() => navigate('terms/service')}
          tabIndex={0}
        >
          Terms Of Service
        </div>
      </div>
      <div className='split'>|</div>
      <div className='terms'>
        <div
          className='link'
          role='button'
          onClick={() => navigate('terms/privacy')}
          onKeyDown={() => navigate('terms/privacy')}
          tabIndex={0}
        >
          Privacy Policy
        </div>
      </div>
      <div className='split'>|</div>
      <div className='unsplash-text'>
        Photo by
        <a
          className='link'
          href={`${profile}?utm_source=breezfm&utm_medium=referral`}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
        on
        <a
          className='link'
          href='https://unsplash.com/?utm_source=breezfm&utm_medium=referral'
          target='_blank'
          rel='noreferrer'
        >
          Unsplash
        </a>
      </div>
    </StyledUnsplashAttribute>
  );
}

UnsplashAttribute.propTypes = {
  profile: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};

const StyledUnsplashAttribute = styled.div`
  z-index: 5;
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  background-color: black;
  display: flex;

  .split {
    color: gray;
    display: flex;
    align-items: center;
  }

  .unsplash-text {
    font-size: small;
    color: white;
    padding: 0.4rem 1rem;
    display: flex;
    gap: 0.3rem;

    .link {
      color: gray;
    }
  }

  .terms {
    font-size: small;
    color: white;
    padding: 0.4rem 1rem;
    display: flex;
    gap: 0.3rem;
    cursor: pointer;
  }

  .copy {
    font-size: small;
    color: gray;
    padding: 0.4rem 1rem;
    display: flex;
    gap: 0.3rem;
  }
`;
