import React from 'react';
import styled from 'styled-components';

import profile from '../../../assets/profile.jpg';
import ButtonMore from '../../../common/components/buttons/ButtonMore';

export default function Feed() {
  return (
    <StyledFeed>
      <div className='feed-header'>
        <div className='profile'>
          <img className='profile-img' src={profile} alt='profile' />
          <div className='profile-name'>김이름</div>
          <div className='profile-write-at'>2022.03.12 12:31</div>
        </div>
        <ButtonMore />
      </div>
      <div className='feed-body'>
        피드 컨텐츠는 이런식으로 작성되어 보여질 예정 입니다.
      </div>
    </StyledFeed>
  );
}

const StyledFeed = styled.div`
  width: 100%;
  color: black;
  background-color: white;
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
