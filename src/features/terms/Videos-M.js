import React from 'react';
import styled from 'styled-components';

export default function Videos() {
  return (
    <StyledVideos>
      <h2>BREEZ Videos</h2>
      <div>will update soon.</div>
    </StyledVideos>
  );
}

const StyledVideos = styled.div`
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: #000000a2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
