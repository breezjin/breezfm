import React from 'react';
import styled from 'styled-components';

import ButtonMore from '../../common/components/buttons/ButtonMore';

export default function Feed() {
  return (
    <StyledFeed>
      <ButtonMore />
    </StyledFeed>
  );
}

const StyledFeed = styled.div`
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
