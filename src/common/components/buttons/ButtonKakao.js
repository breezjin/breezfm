import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import kakao from '../../../assets/kakao.svg';

export default function Buttonkakao({ onClick }) {
  return (
    <StyledButtonkakao onClick={() => onClick()}>
      <img src={kakao} alt='kakao-login' />
    </StyledButtonkakao>
  );
}

Buttonkakao.propTypes = {
  onClick: Proptypes.func.isRequired,
};

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
