import React from 'react';
import { FlexContainer } from '../../components/flex-container';
import styled, { css, keyframes } from 'styled-components';

// Fade-in and fade-out animation for Toast
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ToastWrapper = styled.div<any>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  text-align: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.$isVisible &&
    css`
      animation: ${fadeIn} 0.5s ease forwards,
        ${fadeOut} 0.5s ease ${props.$duration || 2.5}s forwards;
      pointer-events: auto;
    `}
`;

const Toast = ({ $message, $isVisible, $duration }: any) => {
  return (
    <div>
      <button>test</button>
      <FlexContainer
        $position='absolute'
        $top={0}
        $left={0}
        $pointerEvents='none'
        $visibility='hidden'
      >
        
      </FlexContainer>
    </div>
  );
};

export default Toast;
