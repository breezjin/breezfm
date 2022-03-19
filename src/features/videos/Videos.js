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
