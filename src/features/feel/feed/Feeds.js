import React from 'react';
import styled from 'styled-components';

import Feed from './Feed';
import FeedEdit from './FeedEdit';

export default function Feeds() {
  return (
    <StyledFeeds>
      <div className='feed-editor'>
        <FeedEdit />
      </div>
      <div className='feed-list'>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </StyledFeeds>
  );
}

const StyledFeeds = styled.div`
  z-index: 10;
  position: absolute;
  top: 4rem;
  right: 2rem;
  width: 25%;
  min-width: 400px;
  max-height: calc(100vh - 5rem);
  background-color: #000000a2;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .feed-editor {
    width: 94%;
    margin-top: 1rem;
  }

  .feed-list {
    width: 94%;
    margin-bottom: 1rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
