import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiPenTool, FiLogIn } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ButtonAuth from '../../common/components/buttons/ButtonAuth';
import ButtonKakao from '../../common/components/buttons/ButtonKakao';

export default function Auth() {
  // const navigate = useNavigate();
  const AuthSwal = withReactContent(Swal);

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

  return (
    <StyledAuth>
      {/* <ButtonAuth
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('function!!!');
        }}
      >
        <FiPenTool className='icon' />
        <div>Signup</div>
      </ButtonAuth> */}
      <ButtonAuth onClick={handleLogin}>
        <FiLogIn className='icon' />
        Login
      </ButtonAuth>
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
`;
