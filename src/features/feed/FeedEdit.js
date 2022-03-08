import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonKakao from '../../common/components/buttons/ButtonKakao';

export default function FeedEdit() {
  const [enteredText, setEnteredText] = useState('');

  return (
    <StyledFeedEdit>
      <ButtonKakao />
      <input type='text' onChange={(e) => setEnteredText(e.target.value)} />
      <div>{enteredText}</div>
    </StyledFeedEdit>
  );
}

const StyledFeedEdit = styled.div`
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
