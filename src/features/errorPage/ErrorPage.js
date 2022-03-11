import React from 'react';
import styled from 'styled-components';

export default function ErrorPage() {
  return (
    <StyledErrorPage>
      <div>ErrorPage</div>
    </StyledErrorPage>
  );
}

const StyledErrorPage = styled.div`
  z-index: 20;
  width: 90%;
  height: 90%;
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
