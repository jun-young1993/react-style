import { ReactNode } from "react";
export interface SideBarProps {
    $position?: string
    $width?: string
    $height?: string
    $isOpen?: boolean
    $borderRight?: string
    $backgroundColor?: string
    $padding?: string
    children?: ReactNode
    $header?: ReactNode
    $headerHeight?: string
    $opacity?: string
}