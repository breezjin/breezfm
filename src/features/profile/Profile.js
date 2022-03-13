import React from 'react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <StyledProfile>
      <div>Profile</div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  z-index: 5;
  width: 90%;
  height: 90%;
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
