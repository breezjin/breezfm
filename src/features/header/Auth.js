import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ButtonAuth from '../../common/components/buttons/ButtonAuth';
import ButtonKakao from '../../common/components/buttons/ButtonKakao';
import ButtonProfile from '../../common/components/buttons/ButtonProfile';
import { userLoggedOut } from '../login/loginSlice';

export default function Auth() {
  const dispatch = useDispatch();
  const AuthSwal = withReactContent(Swal);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const myId = useSelector((state) => state.login.userId);
  const myAvatar = useSelector((state) => state.login.userAvatar);
  const myName = useSelector((state) => state.login.userName);

  function handleLogin() {
    AuthSwal.fire({
      icon: 'info',
      html: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'small',
          }}
        >
          <ButtonKakao />
          <br />
          BREEZ는 현재 카카오로그인만 지원합니다.
        </div>
      ),
      showConfirmButton: false,
      showCancelButton: true,
    });
  }

  function handleLogoutClick() {
    AuthSwal.fire({
      icon: 'warning',
      titleText: '정말 로그아웃 하시겠어요?',
      showDenyButton: true,
      denyButtonText: '아뇨, 로그아웃 안해요.',
      denyButtonColor: 'gray',
      showConfirmButton: true,
      confirmButtonText: '네, 로그아웃 할래요.',
      confirmButtonColor: 'red',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('BREEZ_TOKEN');
        dispatch(userLoggedOut());
      }
    });
  }

  return (
    <StyledAuth>
      {isLoggedIn && (
        <ButtonProfile
          id={myId}
          avatar={myAvatar}
          name={myName}
          logout={handleLogoutClick}
        />
      )}
      {!isLoggedIn && (
        <ButtonAuth onClick={handleLogin}>
          <FiLogIn className='icon' />
          Login
        </ButtonAuth>
      )}
    </StyledAuth>
  );
}

const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    margin-right: 0.4rem;
  }

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
`;
