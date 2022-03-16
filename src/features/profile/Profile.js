import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// import { userUpdated } from '../login/loginSlice';
import MyFeeds from './MyFeeds';

export default function Profile() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const ProfileSwal = withReactContent(Swal);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  // const myId = useSelector((state) => state.login.userId);
  const myAvatar = useSelector((state) => state.login.userAvatar);
  const myName = useSelector((state) => state.login.userName);
  const myEmail = useSelector((state) => state.login.userEmail);

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <StyledProfile>
      <div className='profile-info'>
        <div className='title'>
          <h2 className='title-content'>My Profile</h2>
        </div>
        <div className='avatar'>
          <img className='avatar-img' src={myAvatar} alt='avatar' />
        </div>
        <div className='name'>{myName}</div>
        <div className='email'>{myEmail}</div>
      </div>
      <div className='profile-feeds'>
        <div className='title'>
          <h2 className='title-content'>My Feeds</h2>
        </div>
        <MyFeeds />
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  z-index: 5;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  gap: 1rem;

  .title {
    width: 100%;

    .title-content {
      margin-left: 1.5rem;
    }
  }

  .profile-info {
    width: 50%;
    background-color: #000000a2;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .avatar-img {
    width: 160px;
    border-radius: 100%;
  }

  .name {
    font-size: x-large;
    font-weight: 800;
  }

  .profile-feeds {
    width: 50%;
    background-color: #000000a2;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
