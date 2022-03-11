import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function UnsplashAttribute({ profile, name }) {
  return (
    <StyledUnsplashAttribute>
      <div className='unsplash-text'>
        Photo by{' '}
        <a
          className='link'
          href={`${profile}?utm_source=breezfm&utm_medium=referral`}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>{' '}
        on{' '}
        <a
          className='link'
          href='https://unsplash.com/?utm_source=breezfm&utm_medium=referral'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
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
  left: 2rem;
  bottom: 1rem;
  background-color: black;

  .unsplash-text {
    font-size: small;
    color: white;
    padding: 0.4rem 1rem;

    .link {
      color: gray;
    }
  }
`;
