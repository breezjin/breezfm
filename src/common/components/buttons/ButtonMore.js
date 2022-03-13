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
      <div
        className='more-wrapper'
        role='button'
        onClick={handleFolding}
        onKeyDown={handleFolding}
        tabIndex={0}
      >
        <IoIosMore className='icon' />
      </div>
      {!isFolding && (
        <div className='submenu-wrapper'>
          <button className='btn' type='button'>
            수정
          </button>
          <button className='btn' type='button'>
            숨기기
          </button>
          <button className='btn' type='button'>
            삭제
          </button>
        </div>
      )}
    </StyledButtonMore>
  );
}

const StyledButtonMore = styled.div`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: none;
  cursor: pointer;

  .more-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submenu-wrapper {
    width: 4rem;
    position: relative;
    top: 0;
    right: 100%;
    display: flex;
    flex-direction: column;

    .btn {
      padding: 0.4rem;
      border: none;
      cursor: pointer;
    }
  }
`;
