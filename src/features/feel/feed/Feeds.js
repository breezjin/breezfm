import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import useFeedsSearch from '../../../common/hooks/useFeedsSearch';
import Feed from './Feed';
import FeedEdit from './FeedEdit';

export default function Feeds() {
  const FeedsSwal = withReactContent(Swal);

  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, feeds, hasMore, refreshFeeds } =
    useFeedsSearch(pageNumber);

  const observer = useRef(null);
  const lastFeedElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleRefresh() {
    if (pageNumber === 1) {
      setPageNumber(2);
    }
    refreshFeeds();
    setPageNumber(1);
  }

  useEffect(() => {
    if (error) {
      FeedsSwal.fire({
        icon: 'warning',
        titleText: '피드를 불러올 수 없습니다.',
        confirmButtonText: '확인',
      });
    }
  }, [FeedsSwal, error]);

  return (
    <StyledFeeds>
      <div className='feed-editor'>
        <FeedEdit callback={handleRefresh} />
      </div>
      <button type='button' onClick={handleRefresh}>
        새로고침
      </button>
      <div className='feed-list'>
        {Array.from(feeds).map((feed, index) => {
          if (feeds.length === index + 1) {
            return (
              <div className='feed' key={feed._id} ref={lastFeedElementRef}>
                <Feed
                  key={feed._id}
                  writerAvatar={feed.writerAvatar}
                  writerName={feed.writerName}
                  description={feed.description}
                  tag={feed.tag}
                  updatedAt={feed.updatedAt}
                />
              </div>
            );
          }
          return (
            <div className='feed' key={feed._id}>
              <Feed
                key={feed._id}
                writerAvatar={feed.writerAvatar}
                writerName={feed.writerName}
                description={feed.description}
                tag={feed.tag}
                updatedAt={feed.updatedAt}
              />
            </div>
          );
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
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

  .feed {
    width: 100%;
  }
`;
