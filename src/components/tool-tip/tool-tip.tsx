import React from 'react';
import styled, {css} from 'styled-components';
import { ToolTipProps } from './tool-tip.props';
import {useStyledTheme, zIndexConstants} from "../../shared";

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
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  ${({ $zIndex }) => {
    const theme = useStyledTheme();
    return css`
      z-index: ${$zIndex};
      color: ${theme.white};
      background-color: ${theme.darkGray};
    `;
  }}
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;

  ${({ $position }) => {
    const theme = useStyledTheme();
    return css`
      ${() => {
      switch ($position) {
        case 'top':
          return `
              bottom: 125%;
              left: 50%;
              transform: translateX(-50%);
            `;
        case 'right':
          return `
              top: 50%;
              left: 125%;
              transform: translateY(-50%);
            `;
        case 'left':
          return `
              top: 50%;
              right: 125%;
              transform: translateY(-50%);
            `;
        case 'bottom':
        default:
          return `
              top: 125%;
              left: 50%;
              transform: translateX(-50%);
            `;
      }
    }}

      &::after {
        content: '';
        position: absolute;
        border-width: 5px;
        border-style: solid;
        ${() => {
          switch ($position) {
            case 'top':
              return `
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-color: ${theme.darkGray} transparent transparent transparent ;
                  `;
            case 'right':
              return `
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%);
                    border-color: transparent ${theme.darkGray} transparent transparent;
                  `;
            case 'left':
              return `
                    top: 50%;
                    right: -10px;
                    transform: translateY(-50%);
                    border-color: transparent transparent transparent ${theme.darkGray};
                  `;
            case 'bottom':
            default:
              return `
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-color: transparent transparent ${theme.darkGray} transparent;
                  `;
          }
        }}
      }
    `;
  }}
`;

const Tooltip = ({
                   children,
                   $message,
                    $zIndex,
                   $position
}: ToolTipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText
          $position ={$position || 'bottom'}
          $zIndex = {$zIndex || zIndexConstants.tooltip}
      >
        {$message}
      </TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
