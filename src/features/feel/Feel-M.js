import React from 'react';
import styled from 'styled-components';

import MFeeds from './feed/Feeds-M';

export default function Feel() {
  return (
    <StyledFeel>
      <MFeeds />
    </StyledFeel>
  );
}

const StyledFeel = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
