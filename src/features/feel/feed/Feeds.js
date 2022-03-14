import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ButtonAuth from '../../../common/components/buttons/ButtonAuth';
import useFeedsSearch from '../../../common/hooks/useFeedsSearch';
import Feed from './Feed';
import FeedEdit from './FeedEdit';

export default function Feeds() {
  const FeedsSwal = withReactContent(Swal);

  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, feeds, hasMore } = useFeedsSearch(pageNumber);

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

  const handleRefresh = useCallback(() => {
    setTimeout(() => {
      setPageNumber(1);
    }, 500);
  }, []);

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
      <div className='refresh'>
        <div className='refresh-description'>
          버튼을 누르면 최신 피드를 볼 수 있습니다.
        </div>
        <ButtonAuth onClick={handleRefresh}>
          <FiRefreshCw className='icon' />
          새로고침
        </ButtonAuth>
      </div>
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

  .feed-editor {
    width: 94%;
    margin: 1rem 0rem 1rem 0rem;
  }

  .refresh {
    width: 94%;
    display: flex;
    justify-content: end;
    align-items: center;

    .refresh-description {
      font-size: small;
      color: grey;
      margin-right: 1rem;
    }
  }

  .icon {
    margin-right: 0.4rem;
  }

  .feed-list {
    width: 94%;
    margin: 0.5rem 0rem 1rem 0rem;
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
