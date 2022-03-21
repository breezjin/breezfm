import Proptypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ButtonProfile({ id, avatar, name, logout }) {
  const navigate = useNavigate();

  return (
    <StyledButtonProfile>
      <button
        className='btn-logout'
        type='button'
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </button>
      <div className='profile'>
        <img className='profile-img' src={avatar} alt='profile' />
        <div className='profile-name'>{name}</div>
      </div>
      <button
        className='btn'
        type='button'
        onClick={() => {
          navigate(`user/${id}`, { state: 'fromMenu' });
        }}
      >
        내 프로필 보기
      </button>
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  .profile {
    display: flex;
    align-items: center;
    gap: 0.4rem;

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

  .btn {
    padding: 0.4rem;
    border: none;
    cursor: pointer;
  }

  .btn-logout {
    color: red;
    padding: 0.4rem;
    border: none;
    cursor: pointer;
  }
`;
