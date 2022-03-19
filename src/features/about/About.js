import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <StyledAbout>
      <h2>About BREEZ...</h2>
      <div>will update soon.</div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
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
  gap: 1rem;
`;
