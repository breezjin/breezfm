import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage() {
  return (
    <StyledErrorPage>
      <div>ErrorPage</div>
      <br />
      <Link to='/' className='redirection-link'>
        메인으로 돌아가기
      </Link>
    </StyledErrorPage>
  );
}

const StyledErrorPage = styled.div`
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
