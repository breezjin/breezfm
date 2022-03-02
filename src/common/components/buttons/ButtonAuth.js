import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function ButtonAuth({ onClick, children }) {
  return (
    <StyledButtonAuth onClick={() => onClick()}>{children}</StyledButtonAuth>
  );
}

ButtonAuth.propTypes = {
  onClick: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
};

const StyledButtonAuth = styled.button`
  min-height: 2rem;
  font-family: inherit;
  font-size: small;
  background-color: none;
  padding: calc(0.4rem - 1px) calc(0.8rem - 1px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: baseline;
  transition: all 200ms;
  touch-action: manipulation;
  cursor: pointer;

  :hover,
  :focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :hover {
    transform: translateY(-1px);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;
