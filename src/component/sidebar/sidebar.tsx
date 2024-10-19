import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarProps } from "./sidebar.type";

const SidebarContainer = styled.div<SidebarProps & { isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => (props.isOpen ? props.openWidth || '250px' : props.closedWidth || '60px')};
  background-color: ${(props) => props.backgroundColor || '#333'};
  color: ${(props) => props.color || '#fff'};
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleButton = styled.button<SidebarProps>`
  background-color: ${(props) => props.buttonBackgroundColor || '#444'};
  border: none;
  color: ${(props) => props.buttonColor || '#fff'};
  cursor: pointer;
  margin: 10px;
  padding: ${(props) => props.buttonPadding || '10px'};
  border-radius: ${(props) => props.buttonBorderRadius || '4px'};
  outline: none;
  &:hover {
    background-color: ${(props) => props.buttonHoverBackgroundColor || '#555'};
  }
`;

const SidebarItem = styled.div<SidebarProps>`
  padding: ${(props) => props.itemPadding || '15px'};
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.itemHoverBackgroundColor || '#555'};
  }
`;

const Sidebar: React.FC<SidebarProps> = ({
                                             openWidth = '250px',
                                             closedWidth = '60px',
                                             backgroundColor = '#333',
                                             color = '#fff',
                                             buttonBackgroundColor = '#444',
                                             buttonColor = '#fff',
                                             buttonPadding = '10px',
                                             buttonBorderRadius = '4px',
                                             buttonHoverBackgroundColor = '#555',
                                             itemPadding = '15px',
                                             itemHoverBackgroundColor = '#555',
                                         }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarContainer
            isOpen={isOpen}
            openWidth={openWidth}
            closedWidth={closedWidth}
            backgroundColor={backgroundColor}
            color={color}
        >
            <ToggleButton
                onClick={toggleSidebar}
                buttonBackgroundColor={buttonBackgroundColor}
                buttonColor={buttonColor}
                buttonPadding={buttonPadding}
                buttonBorderRadius={buttonBorderRadius}
                buttonHoverBackgroundColor={buttonHoverBackgroundColor}
            >
                {isOpen ? 'Close' : 'Open'}
            </ToggleButton>
            {isOpen && (
                <>
                    <SidebarItem itemPadding={itemPadding} itemHoverBackgroundColor={itemHoverBackgroundColor}>Home</SidebarItem>
                    <SidebarItem itemPadding={itemPadding} itemHoverBackgroundColor={itemHoverBackgroundColor}>About</SidebarItem>
                    <SidebarItem itemPadding={itemPadding} itemHoverBackgroundColor={itemHoverBackgroundColor}>Services</SidebarItem>
                    <SidebarItem itemPadding={itemPadding} itemHoverBackgroundColor={itemHoverBackgroundColor}>Contact</SidebarItem>
                </>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;