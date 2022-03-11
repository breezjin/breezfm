import React from 'react';
import styled from 'styled-components';

import kakao from '../../../assets/kakao.svg';

export default function Buttonkakao() {
  function kakaoLogin() {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REST_API_REDIRECT_URL}&response_type=code`;
  }

  return (
    <StyledButtonkakao onClick={kakaoLogin}>
      <img src={kakao} alt='kakao-login' />
    </StyledButtonkakao>
  );
}

const StyledButtonkakao = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgb(250, 250, 250, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    transform: translateY(-1px);
  }

  img {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;
