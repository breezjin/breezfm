import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { saveFeed } from '../../../common/api/feedApis';

export default function FeedEdit({ callback }) {
  const [enteredText, setEnteredText] = useState('');

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const myId = useSelector((state) => state.login.userId);
  const myAvatar = useSelector((state) => state.login.userAvatar);
  const myName = useSelector((state) => state.login.userName);

  async function saveNewFeed() {
    const newFeed = {
      writerId: myId,
      writerAvatar: myAvatar,
      writerName: myName,
      description: enteredText,
      tag: null,
      updatedAt: new Date().toISOString(),
    };

    await saveFeed(newFeed).then((res) => {
      if (res.data.result === 'ok') callback();
    });
    setEnteredText('');
  }

  return (
    <StyledFeedEdit>
      <div className='edit-area'>
        {!isLoggedIn && (
          <div className='need-login'>
            π λ‘κ·ΈμΈνλ©΄ νΌλλ₯Ό μλ ₯ν  μ μμ΅λλ€. π
          </div>
        )}
        {isLoggedIn && (
          <>
            <TextareaAutosize
              className='text-area'
              onChange={(e) =>
                setEnteredText(e.target.value.replace(/\n\r?/g, '\n'))
              }
              placeholder={`${myName}λ, μ΄μμ€μΈμ. μ§κΈ λμ€λ μμ μ΄λμ?`}
              value={enteredText}
              minLength={2}
              maxLength={500}
            />
            <button className='btn' type='button' onClick={saveNewFeed}>
              μλ ₯νκΈ°
            </button>
          </>
        )}
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

    .need-login {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

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
