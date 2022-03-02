import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { FiPenTool, FiLogIn } from 'react-icons/fi';
import styled from 'styled-components';

import ButtonAuth from '../../common/components/buttons/ButtonAuth';

export default function Auth() {
  // const navigate = useNavigate();

  return (
    <StyledAuth>
      <ButtonAuth>
        <FiPenTool className='icon' />
        <div>Signup</div>
      </ButtonAuth>
      <ButtonAuth
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('function!!!');
        }}
      >
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
