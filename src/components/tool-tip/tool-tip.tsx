import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { ToolTipProps } from './tool-tip.props';
import { useStyledTheme, zIndexConstants } from '../../shared';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
`;

const TooltipText = styled.div<ToolTipProps>`
  position: fixed; /* 부모가 아닌 뷰포트를 기준으로 렌더링 */
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  min-width: ${({ $minWidth }) => $minWidth || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth || 'auto'};
  white-space: nowrap;
  z-index: ${({ $zIndex }) => $zIndex || zIndexConstants.tooltip};
  ${() => {
    const theme = useStyledTheme();
    return css`
      color: ${theme.white};
      background-color: ${theme.darkGray};
    `;
  }}
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.darkGray};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease; 
   /* 화살표 추가 */
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    ${({ $position, theme }) => {
      console.log('$position',$position)
      switch ($position) {
        case 'top':
          return `
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px 5px 0 5px;
            border-color: ${theme.darkGray} transparent transparent transparent;
          `;
        case 'right':
          return `
            top: 50%;
            left: -5px;
            transform: translateY(-50%);
            border-width: 5px 5px 5px 0;
            border-color: transparent ${theme.darkGray} transparent transparent;
          `;
        case 'left':
          return `
            top: 50%;
            right: -5px;
            transform: translateY(-50%);
            border-width: 5px 0 5px 5px;
            border-color: transparent transparent transparent ${theme.darkGray};
          `;
        case 'bottom-right':
          return `
            top: -5px;
            left: 25%;
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${theme.darkGray} transparent;
          `;
        case 'bottom':
        default:
          return `
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${theme.darkGray} transparent;
          `;
      }
    }}
`;

const Tooltip = ({
  children,
  $message,
  $zIndex,
  $position = 'bottom',
  $minWidth,
  $maxWidth,
  $isActive,
}: ToolTipProps) => {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({
    top: 0,
    left: 0,
    opacity: 0,
    visibility: 'hidden',
  });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const calculatePosition = (rect: DOMRect, position: ToolTipProps['$position']): React.CSSProperties => {
    const margin = 10; // 툴팁과 요소 사이 간격
    switch (position) {
      case 'top':
        return {
          top: rect.top - margin,
          left: rect.left + rect.width / 2,
          transform: 'translate(-50%, -100%)',
          opacity: 1,
          visibility: 'visible',
        };
      case 'right':
        return {
          top: rect.top + rect.height / 2,
          left: rect.right + margin,
          transform: 'translate(0, -50%)',
          opacity: 1,
          visibility: 'visible',
        };
      case 'left':
        return {
          top: rect.top + rect.height / 2,
          left: rect.left - margin,
          transform: 'translate(-100%, -50%)',
          opacity: 1,
          visibility: 'visible',
        };
    case 'bottom-right':
      return {
        top: rect.bottom + margin,
        left: rect.left + rect.width,
        transform: 'translate(-50%, 0)',
        opacity: 1,
        visibility: 'visible',
      };
      case 'bottom':
      default:
        return {
          top: rect.bottom + margin,
          left: rect.left + rect.width / 2,
          transform: 'translate(-50%, 0)',
          opacity: 1,
          visibility: 'visible',
        };
    }
  };

  const handleMouseEnter = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const style = calculatePosition(rect, $position);
      setTooltipStyle(style);
    }
  };

  useEffect(() => {
    if($isActive && tooltipStyle.visibility === 'hidden'){
      handleMouseEnter()
    }
  },[$isActive, handleMouseEnter])

  const handleMouseLeave = () => {
    setTooltipStyle({
      opacity: 0,
      visibility: 'hidden',
    });
  };

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {$message &&
        ReactDOM.createPortal(
          <TooltipText
            $position={$position}
            style={tooltipStyle}
            $minWidth={$minWidth}
            $maxWidth={$maxWidth}
            $zIndex={$zIndex}
          >
            {$message}
          </TooltipText>,
          document.body
        )}
    </TooltipWrapper>
  );
};

export default Tooltip;
