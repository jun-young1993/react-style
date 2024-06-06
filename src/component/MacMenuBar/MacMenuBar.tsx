import React from 'react';
import styled from 'styled-components';
import {MacMenuBarElementProps, MacMenuBarProps} from "./MacMenuBar.type";

const MenuBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div<MacMenuBarElementProps>`
  display: flex;
  justify-content: start;
  width: 90%; /* w-11/12 in tailwind */
  height: 100%; /* h-1/2 in tailwind */
  border-radius: 0.8rem; /* rounded-lg in tailwind */
  background-color: ${({ theme }) => theme.softGray};
  border: 2px solid ${({ theme }) => theme.softGray}; /* border-2 border-inherit */
  opacity: 90%;
  
  min-height: ${({ minHeight }) => minHeight ?? '50px'};
`;


const MacMenuBar = ({children, ...props}: MacMenuBarProps) => {
    return <MenuBarContainer>
        <InnerContainer
            {...props}
        >
            {children}
        </InnerContainer>
    </MenuBarContainer>
}

export default MacMenuBar;