import React from 'react';
import styled from 'styled-components';

export default function Daily() {
  return (
    <StyledDaily>
      <div>하루에 한곡씩, 찾아가는 선곡 서비스가 기다립니다.</div>
      <div>나중에 선보일 일간 Daily BREEZ.</div>
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
