import Proptypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

export default function ButtonPlay({ isPlay, onClick }) {
  return <StyledButtonPlay isPlay={isPlay} onClick={() => onClick()} />;
}

ButtonPlay.propTypes = {
  isPlay: Proptypes.bool.isRequired,
  onClick: Proptypes.func.isRequired,
};

const StyledButtonPlay = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  ${(props) =>
    props.isPlay
      ? css`
          background: radial-gradient(
            rgba(255, 0, 128, 0.8) 60%,
            rgba(255, 255, 255, 1) 62%
          );
          box-shadow: 0px 0px 25px 3px rgba(255, 0, 128, 0.8);
        `
      : css`
          background: radial-gradient(
            rgba(67, 67, 67, 0.8) 60%,
            rgba(255, 255, 255, 1) 62%
          );
          box-shadow: 0px 0px 25px 3px rgba(67, 67, 67, 0.8);
        `}
  border-radius: 50%;
  margin: 1rem auto;
  display: block;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: center center;
    width: 0;
    height: 0;
    ${(props) =>
      props.isPlay
        ? css`
            -webkit-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
            height: 25px;
            border-style: solid;
            border-width: 0px 0px 0px 4px;
            border-color: white;
          `
        : css`
            -webkit-transform: translateX(-40%) translateY(-50%);
            transform: translateX(-40%) translateY(-50%);
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
          `}
    border-left: 25px solid #fff;
    z-index: 100;
    -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  /* pulse wave */
  ${(props) =>
    props.isPlay &&
    css`
      ::before {
        content: '';
        position: absolute;
        width: 150%;
        height: 150%;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation: pulsate1 2s;
        animation: pulsate1 2s;
        -webkit-animation-direction: forwards;
        animation-direction: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: steps;
        animation-timing-function: steps;
        opacity: 1;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.75);
        top: -30%;
        left: -30%;
        background: rgba(198, 16, 0, 0);
      }

      @-webkit-keyframes pulsate1 {
        0% {
          -webkit-transform: scale(0.6);
          transform: scale(0.6);
          opacity: 1;
          box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
            0px 0px 25px 10px rgba(255, 255, 255, 0.75);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
          box-shadow: none;
        }
      }

      @keyframes pulsate1 {
        0% {
          -webkit-transform: scale(0.6);
          transform: scale(0.6);
          opacity: 1;
          box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
            0px 0px 25px 10px rgba(255, 255, 255, 0.75);
        }
        100% {
          -webkit-transform: scale(1, 1);
          transform: scale(1);
          opacity: 0;
          box-shadow: none;
        }
      }
    `}
`;
