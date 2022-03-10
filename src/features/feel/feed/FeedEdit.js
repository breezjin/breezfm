import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

export default function FeedEdit() {
  const [enteredText, setEnteredText] = useState('');

  return (
    <StyledFeedEdit>
      <TextareaAutosize
        className='text-area'
        onChange={(e) => setEnteredText(e.target.value)}
        placeholder='지금 당신의 BREEZ는 어떤가요?'
      />
      <div>{enteredText}</div>
    </StyledFeedEdit>
  );
}

const StyledFeedEdit = styled.div`
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-area {
    width: 100%;
    min-height: 2rem;
    resize: vertical;

    ::placeholder {
      font-family: inherit;
    }
  }
`;
