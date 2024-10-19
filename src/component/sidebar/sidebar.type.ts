// sidebar.type.ts
import React from 'react';

export interface SidebarProps {
    openWidth?: string;
    closedWidth?: string;
    backgroundColor?: string;
    color?: string;
    buttonBackgroundColor?: string;
    buttonColor?: string;
    buttonPadding?: string;
    buttonBorderRadius?: string;
    buttonHoverBackgroundColor?: string;
    itemPadding?: string;
    itemHoverBackgroundColor?: string;
    children?: React.ReactNode;
}
