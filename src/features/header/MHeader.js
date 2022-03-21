import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logoBreez from '../../assets/logo/BREEZ-text.svg';
import MAuth from './MAuth';
import MMenu from './MMenu';
import MWeather from './MWeather';

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <div
        className='logo'
        role='button'
        onClick={() => navigate('/')}
        onKeyDown={() => navigate('/')}
        tabIndex={0}
      >
        <img className='logo-text' src={logoBreez} alt='logo' />
      </div>
      <MWeather />
      <VscMenu onClick={() => setIsOpen((current) => !current)} />
      {isOpen && (
        <div className='sub-area'>
          <MMenu />
          <MAuth />
        </div>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  z-index: 20;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #00000088;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  .logo {
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;

    .logo-text {
      width: 4.5rem;
    }
  }

  .sub-area {
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    background-color: #00000088;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
