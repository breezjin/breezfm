import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

export default function FeedEdit() {
  const [enteredText, setEnteredText] = useState('');

  return (
    <StyledFeedEdit>
      <div className='edit-area'>
        <TextareaAutosize
          className='text-area'
          onChange={(e) => setEnteredText(e.target.value)}
          placeholder='지금 나오는 음악 어떤가요?'
        />
        <button className='btn' type='submit'>
          입력하기
        </button>
      </div>
      <div>{enteredText}</div>
    </StyledFeedEdit>
  );
}

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
      min-height: 2rem;
      border-radius: 0.3rem;
      resize: none;
      outline: none;

      ::placeholder {
        font-family: inherit;
      }
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
    }
  }
`;
