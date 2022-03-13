import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logoBreez from '../../assets/logo/BREEZ-text.svg';
import Auth from './Auth';
import Menu from './Menu';
import Weather from './Weather';

export default function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className='left-side'>
        <div
          className='logo'
          role='button'
          onClick={() => navigate('/')}
          onKeyDown={() => navigate('/')}
          tabIndex={0}
        >
          <img className='logo-text' src={logoBreez} alt='logo' />
        </div>
        <Menu />
      </div>
      <div className='right-side'>
        <Weather />
        <Auth />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  z-index: 20;
  width: 100%;
  height: 3rem;
  background-color: #00000088;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .left-side {
    margin-left: 2rem;
    display: flex;
    align-items: center;

    .logo {
      width: fit-content;
      display: flex;
      align-items: center;
      cursor: pointer;

      .logo-text {
        width: 4.5rem;
      }
    }
  }

  .right-side {
    margin-right: 2rem;
    display: flex;
  }
`;
