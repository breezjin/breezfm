import React from 'react';
import styled from 'styled-components';

import Feeds from './feed/Feeds';

export default function Feel() {
  return (
    <StyledFeel>
      <div className='left' />
      <div className='right'>
        <Feeds />
      </div>
    </StyledFeel>
  );
}

const StyledFeel = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 50%;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
`;
