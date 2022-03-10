import React from 'react';
import styled from 'styled-components';

export default function Videos() {
  return (
    <StyledVideos>
      <div>Videos</div>
    </StyledVideos>
  );
}

const StyledVideos = styled.div`
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
