import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import styled from 'styled-components';

export default function ButtonMore() {
  const [isFolding, setIsFolding] = useState(true);

  function handleFolding() {
    setIsFolding((current) => !current);
  }

  return (
    <StyledButtonMore>
      <div className='more-wrapper'>
        <IoIosMore onClick={handleFolding} />
      </div>
      {!isFolding && (
        <div className='submenu-wrapper'>
          <button type='button'>수정</button>
          <button type='button'>숨기기</button>
          <button type='button'>삭제</button>
        </div>
      )}
    </StyledButtonMore>
  );
}

const StyledButtonMore = styled.button`
  .more-wrapper {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .submenu-wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;
