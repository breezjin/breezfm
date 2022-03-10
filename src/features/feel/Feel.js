import React from 'react';
import styled from 'styled-components';

import Feeds from './feed/Feeds';
import Player from './Player';

export default function Feel() {
  return (
    <StyledFeel>
      <Player />
      <Feeds />
    </StyledFeel>
  );
}

const StyledFeel = styled.div`
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
