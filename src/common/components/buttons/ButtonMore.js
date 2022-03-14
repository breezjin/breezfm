import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { editFeed, deleteFeed } from '../../api/feedApis';

export default function ButtonMore({ feed, editFunc }) {
  const EditFeedSwal = withReactContent(Swal);
  const [isFolding, setIsFolding] = useState(true);

  function handleFolding() {
    setIsFolding((current) => !current);
  }

  function handleEditFeed() {
    handleFolding();
    EditFeedSwal.fire({
      input: 'textarea',
      inputLabel: '수정할 내용을 입력해주세요.',
      inputPlaceholder: 'Type your message here...',
      inputValue: `${feed.description}`,
      inputAttributes: {
        min: 2,
        max: 500,
      },
      showCancelButton: true,
      confirmButtonText: '수정하기',
      preConfirm: async (editedDescription) => {
        try {
          const newFeed = feed;
          newFeed.description = editedDescription;
          editFeed(newFeed);
          editFunc(newFeed.description);
        } catch (error) {
          EditFeedSwal.showValidationMessage(`${error.message}`);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        EditFeedSwal.fire({
          icon: 'success',
          text: '피드를 수정했습니다.',
          confirmButtonText: '확인',
        });
      }
    });
  }

  function handleDeleteFeed() {
    handleFolding();
    EditFeedSwal.fire({
      icon: 'warning',
      titleText: '피드를 정말 삭제할까요?',
      text: '확인을 누르면 영구적으로 삭제 됩니다.',
      confirmButtonText: '확인',
      confirmButtonColor: '#cc1c00',
      showCancelButton: true,
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFeed(feed);
        editFunc('삭제된 피드 입니다.');
        EditFeedSwal.fire({
          icon: 'success',
          text: '피드를 삭제했습니다.',
          confirmButtonText: '확인',
        });
      }
    });
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
          <button className='btn' type='button' onClick={handleEditFeed}>
            수정
          </button>
          <button className='btn' type='button' onClick={handleDeleteFeed}>
            삭제
          </button>
        </div>
      )}
    </StyledButtonMore>
  );
}

ButtonMore.propTypes = {
  feed: Proptypes.node.isRequired,
  editFunc: Proptypes.func.isRequired,
};

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
