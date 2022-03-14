import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { saveFeed } from '../../../common/api/feedApis';

export default function FeedEdit({ callback }) {
  const [enteredText, setEnteredText] = useState('');

  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const myId = useSelector((state) => state.login.userId);
  const myAvatar = useSelector((state) => state.login.userAvatar);
  const myName = useSelector((state) => state.login.userName);

  function saveNewFeed() {
    const newFeed = {
      writerId: myId,
      writerAvatar: myAvatar,
      writerName: myName,
      description: enteredText,
      tag: null,
      updatedAt: new Date().toISOString(),
    };

    saveFeed(newFeed);
    setEnteredText('');
    setTimeout(() => {
      callback();
    }, 0);
  }

  return (
    <StyledFeedEdit>
      <div className='edit-area'>
        <TextareaAutosize
          className='text-area'
          onChange={(e) =>
            setEnteredText(e.target.value.replace(/\n\r?/g, '\n'))
          }
          placeholder='지금 나오는 음악 어떤가요?'
          value={enteredText}
          minLength={2}
          maxLength={500}
        />
        <button className='btn' type='button' onClick={saveNewFeed}>
          입력하기
        </button>
      </div>
    </StyledFeedEdit>
  );
}

FeedEdit.propTypes = {
  callback: Proptypes.func.isRequired,
};

const StyledFeedEdit = styled.form`
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .edit-area {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 0.4rem;

    .text-area {
      flex-grow: 1;
      width: 100%;
      min-height: 3rem;
      font-family: Roboto, 'Helvetica Neue', sans-serif;
      white-space: pre-wrap;
      border-radius: 0.3rem;
      resize: none;
      outline: none;
    }

    .btn {
      width: 5rem;
      min-height: 2rem;
      font-size: small;
      color: white;
      background-color: purple;
      border: none;
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;
