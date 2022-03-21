import Proptypes from 'prop-types';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu({ handleMenuOpen }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledMenu>
      <li>
        <div
          className={pathname === '/about' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => {
            navigate('/about', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          onKeyDown={() => {
            navigate('/about', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          tabIndex={0}
        >
          About
        </div>
      </li>
      <li>
        <div
          className={pathname === '/feel' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => {
            navigate('/feel', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          onKeyDown={() => {
            navigate('/feel', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          tabIndex={0}
        >
          Feel
        </div>
      </li>
      <li>
        <div
          className={pathname === '/daily' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => {
            navigate('/daily', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          onKeyDown={() => {
            navigate('/daily', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          tabIndex={0}
        >
          Daily
        </div>
      </li>
      <li>
        <div
          className={pathname === '/videos' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => {
            navigate('/videos', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          onKeyDown={() => {
            navigate('/videos', { state: 'fromMenu' });
            handleMenuOpen();
          }}
          tabIndex={0}
        >
          Videos
        </div>
      </li>
    </StyledMenu>
  );
}

Menu.propTypes = {
  handleMenuOpen: Proptypes.func.isRequired,
};

const StyledMenu = styled.div`
  width: 100%;
  font-weight: 300;
  margin: 1rem 0rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  li {
    display: flex;
    align-items: center;
  }

  .menu {
    width: fit-content;
    height: 100%;
    font-size: large;
    display: flex;
    align-items: center;

    :hover,
    :focus {
      font-weight: 500;
      border-color: beige;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
  }

  .menu-current {
    width: fit-content;
    height: 100%;
    font-size: large;
    font-weight: 500;
    border-color: beige;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    display: flex;
    align-items: center;
  }
`;
