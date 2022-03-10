import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import BgImgs from '../features/background/BgImgs';
import Header from '../features/header/Header';

export default function App() {
  return (
    <StyledApp>
      <Header />
      <div className='pages'>
        <Outlet />
      </div>
      <BgImgs />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .pages {
    width: 100%;
    height: calc(100vh - 3rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
