import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function goto(y) {
    const x = window.scrollX;
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth',
    });
  }

  return (
    <StyledMenu>
      <li>
        <div
          className={pathname === '/about' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => {
            navigate('/about');
            goto('100vh');
          }}
          onKeyDown={() => {
            navigate('/about');
            goto('100vh');
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
          onClick={() => navigate('/feel')}
          onKeyDown={() => navigate('/feel')}
          tabIndex={0}
        >
          Feel
        </div>
      </li>
      <li>
        <div
          className={pathname === '/daily' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => navigate('/daily')}
          onKeyDown={() => navigate('/daily')}
          tabIndex={0}
        >
          Daily
        </div>
      </li>
      <li>
        <div
          className={pathname === '/videos' ? 'menu-current' : 'menu'}
          role='button'
          onClick={() => navigate('/videos')}
          onKeyDown={() => navigate('/videos')}
          tabIndex={0}
        >
          Videos
        </div>
      </li>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
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
