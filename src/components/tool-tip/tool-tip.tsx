import React from 'react';
import styled, { css } from 'styled-components';
import { ToolTipProps } from './tool-tip.props';



const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
  &:hover > div{
    visibility: visible;
    opacity: 1;
  }
`;
// visibility: hidden;
//   opacity: 0;
const TooltipText = styled.div`
  visibility: visible;
  opacity: 1;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1000;
  top: 125%; 
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%; 
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent; 
  }
`;

const Tooltip = ({ children, message }: ToolTipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText>{message}</TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
