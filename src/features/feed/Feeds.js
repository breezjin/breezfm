import React from 'react';
import styled from 'styled-components';

import ButtonMore from '../../common/components/buttons/ButtonMore';
import FeedEdit from './FeedEdit';

export default function Feeds() {
  return (
    <StyledFeeds>
      <FeedEdit />
      <ButtonMore />
    </StyledFeeds>
  );
}

const StyledFeeds = styled.div`
  z-index: 10;
  position: absolute;
  top: 4rem;
  right: 2rem;
  width: 30%;
  min-width: 400px;
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
