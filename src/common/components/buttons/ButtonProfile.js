import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ButtonProfile({ id, avatar, name, logout }) {
  const navigate = useNavigate();
  const [isFolding, setIsFolding] = useState(true);

  function handleFolding() {
    setIsFolding((current) => !current);
  }

  return (
    <StyledButtonProfile>
      <div
        className='profile'
        role='button'
        onClick={handleFolding}
        onKeyDown={handleFolding}
        tabIndex={0}
      >
        <img className='profile-img' src={avatar} alt='profile' />
        <div className='profile-name'>{name}</div>
      </div>
      {!isFolding && (
        <div className='submenu-wrapper'>
          <button
            className='btn'
            type='button'
            onClick={() => {
              navigate(`user/${id}`);
              handleFolding();
            }}
          >
            내 프로필 보기
          </button>
          <button
            className='btn'
            type='button'
            onClick={() => {
              logout();
              handleFolding();
            }}
          >
            로그아웃
          </button>
        </div>
      )}
    </StyledButtonProfile>
  );
}

ButtonProfile.propTypes = {
  id: Proptypes.string.isRequired,
  avatar: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  logout: Proptypes.func.isRequired,
};

const StyledButtonProfile = styled.div`
  .profile {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    .profile-img {
      width: 2rem;
      height: 2rem;
      border-radius: 3rem;
    }

    .profile-name {
      width: fit-content;
      margin-top: 0.4rem;
    }
  }

  .submenu-wrapper {
    width: 6rem;
    position: absolute;
    top: 3rem;
    right: 1.5rem;
    display: flex;
    flex-direction: column;

    .btn {
      padding: 0.4rem;
      border: none;
      cursor: pointer;
    }
  }
`;
