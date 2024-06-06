import React from 'react';
import styled from 'styled-components';
import { MacMenuBarItemProps } from './MacMenuBar.type';

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  position: relative; /* 툴팁을 절대 위치로 배치하기 위해 필요 */
  
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%; /* 아이콘 위에 툴팁을 배치 */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  visibility: hidden; /* 기본적으로 툴팁을 숨김 */
  opacity: 0;
  transition: opacity 0.35s;

  ${IconContainer}:hover & {
    visibility: visible; /* 아이콘을 호버할 때 툴팁을 보이게 함 */
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  margin-left: 0.75rem;
  transition: transform 0.3s;
  cursor: pointer;
  max-height: 50px;
  max-width: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;

function MacMenuBarItem({ size, src, title, onClick, onContextMenu }: MacMenuBarItemProps) {
    return (
        <IconContainer onClick={onClick} onContextMenu={onContextMenu}>
            {title && <Tooltip>{title}</Tooltip>}
            <StyledImage src={src} width={size} height={size} alt={title} />
        </IconContainer>
    );
}

export default MacMenuBarItem;
