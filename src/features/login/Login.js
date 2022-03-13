import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import authenticate from '../../common/api/auth';
import { userLoggedIn } from './loginSlice';

export default function Login() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('unknown');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getToken() {
      const code = new URL(window.location.href).searchParams.get('code');
      const state = new URL(window.location.href).searchParams.get('state');

      try {
        const { data } = await authenticate(state, code);
        localStorage.setItem('BREEZ_TOKEN', data.BREEZ_TOKEN);
        dispatch(userLoggedIn(data));
        navigate('/');
      } catch (error) {
        const fetchedErrorMessage = error.response.data.errMessage
          ? error.response.data.errMessage
          : error.message;

        setErrorMessage(fetchedErrorMessage);
        setIsError(true);
      }
    }

    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isError && (
        <LoginProcessContainer>
          <h1 className='title'>로그인 시도중...</h1>
        </LoginProcessContainer>
      )}
      {isError && (
        <LoginProcessContainer>
          <h1 className='title'>로그인 실패</h1>
          <p className='message'>
            (이메일과 비밀번호 모두 동의 해야 이용이 가능합니다...)
          </p>
          <p className='message'>{`오류 메세지: ${errorMessage}`}</p>
          <Link to='/' className='redirection-link'>
            메인으로 돌아가기
          </Link>
        </LoginProcessContainer>
      )}
    </>
  );
}

const LoginProcessContainer = styled.div`
  z-index: 5;
  width: 90%;
  height: 90%;
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .redirection-link {
    :visited {
      color: white;
    }
  }
`;
