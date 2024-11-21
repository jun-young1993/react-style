import React from 'react';
import styled from 'styled-components';
import { ToolTipProps } from './tool-tip.props';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

const TooltipText = styled.div<ToolTipProps>`
  position: absolute;
  z-index: 9000;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #333;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;

  ${({$position}) => {
    switch ($position) {
      case 'top':
        return `
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
          }
        `;
      case 'right':
        return `
          top: 50%;
          left: 125%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: transparent #333 transparent transparent;
          }
        `;

      case 'left':
        return `
          top: 50%;
          right: 125%;
          transform: translateY(-50%);
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -10px;
            transform: translateY(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent #333;
          }
        `;
        case 'bottom':
        default:
          return `
            top: 125%;
            left: 50%;
            transform: translateX(-50%);
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
    }
  }}
`;

const Tooltip = ({ children, $message, $position }: ToolTipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText $position={$position}>
        {$message}
      </TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
