import React from 'react';
import styled from 'styled-components';

export default function Daily() {
  return (
    <StyledDaily>
      <div>하루에 한곡씩, 찾아가는 선곡 서비스,</div>
      <div>일간 Daily BREEZ 가 준비 중입니다.</div>
      <div>기대해 주세요 🤗</div>
    </StyledDaily>
  );
}

const StyledDaily = styled.div`
  z-index: 5;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: #000000a2;
  border-radius: 0.3rem;
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
