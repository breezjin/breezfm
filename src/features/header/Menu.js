import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <li>
        <div
          className='menu'
          role='button'
          onClick={() => navigate('/about')}
          onKeyDown={() => navigate('/about')}
          tabIndex={0}
        >
          About
        </div>
      </li>
      <li>
        <div
          className='menu'
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
          className='menu'
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
          className='menu'
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
  margin-left: 2rem;
  display: flex;
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
`;
