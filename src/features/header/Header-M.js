import React, { useEffect, useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logoBreez from '../../assets/logo/BREEZ-text.svg';
import MAuth from './Auth-M';
import MMenu from './Menu-M';
import MWeather from './Weather-M';

export default function Header() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    function goto(y) {
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
    const subSection = window.outerHeight;

    if (state === 'fromMenu') {
      goto(subSection);
    } else {
      goto(0);
    }
  }, [state]);

  return (
    <StyledHeader>
      <div
        className='logo'
        role='button'
        onClick={() => {
          navigate('/');
          if (isOpen) handleMenuOpen();
        }}
        onKeyDown={() => {
          navigate('/');
          if (isOpen) handleMenuOpen();
        }}
        tabIndex={0}
      >
        <img className='logo-text' src={logoBreez} alt='logo' />
      </div>
      <MWeather />
      <VscMenu onClick={handleMenuOpen} />
      {isOpen && (
        <div className='sub-area'>
          <MMenu handleMenuOpen={handleMenuOpen} />
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
