import dayjs from 'dayjs';
import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ButtonMore from '../../../common/components/buttons/ButtonMore';

export default function Feed({
  writerAvatar,
  writerName,
  description,
  tag,
  updatedAt,
}) {
  return (
    <StyledFeed>
      <div className='feed-header'>
        <div className='profile'>
          <img className='profile-img' src={writerAvatar} alt='profile' />
          <div className='profile-name'>{writerName}</div>
          <div className='profile-write-at'>
            {dayjs(updatedAt).format('YYYY.MM.DD hh:mm')}
          </div>
        </div>
        <ButtonMore />
      </div>
      <div className='feed-body'>
        {description.split('\n').map((line) => (
          <span key={`${line}`}>
            {line}
            <br />
          </span>
        ))}
      </div>
      <div className='feed-tag' style={{ height: '0rem' }}>
        {tag}
      </div>
    </StyledFeed>
  );
}

Feed.propTypes = {
  writerAvatar: Proptypes.string.isRequired,
  writerName: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  tag: Proptypes.string,
  updatedAt: Proptypes.string.isRequired,
};

Feed.defaultProps = {
  tag: '',
};

const StyledFeed = styled.div`
  width: 100%;
  color: black;
  background-color: ivory;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .feed-header {
    width: 95%;
    margin: 0.5rem 0rem 0rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      .profile-img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 3rem;
      }

      .profile-name {
        width: fit-content;
        margin-top: 0.4rem;
      }

      .profile-write-at {
        font-size: x-small;
        color: gray;
        margin-top: 0.5rem;
      }
    }
  }

  .feed-body {
    width: 90%;
    height: fit-content;
    font-size: smaller;
    margin: 1rem 0rem 1rem 0rem;
  }
`;
