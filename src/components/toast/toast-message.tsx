import React from 'react';
import { FlexContainer } from '../../components/flex-container';
import styled, { css, keyframes } from 'styled-components';
import {Toast, ToastProps} from "./toast.props";

// Fade-in and fade-out animation for ToastMessage
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
    height: auto;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    height: 0;
    margin: 0;
    transform: translateY(50px);
  }
`;

const ToastMessage = styled.div<Toast & { delay: number}>`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(20px);
  width: 17rem;
  animation: ${({ duration, delay, fadeInSecond, fadeOutSecond }) => css`
    ${fadeIn} ${fadeInSecond}s ease-out ${delay}s, ${fadeOut} ${fadeOutSecond}s ease-in ${delay + duration / 1000}s
  `};
  animation-fill-mode: forwards;
`;


export default ToastMessage;
