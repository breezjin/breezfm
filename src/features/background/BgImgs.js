import React from 'react';
import styled from 'styled-components';

export default function BgImgs() {
  return <StyledBgImgs />;
}

const StyledBgImgs = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://source.unsplash.com/random?query=apple&w=1920');
  background-size: cover;
  background-position: center;
`;
