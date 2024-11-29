import { ReactNode } from "react";
import {JunyReactStyleInterface} from "../../shared";
export interface SideBarProps extends JunyReactStyleInterface{
    $position?: string
    $width?: string | undefined
    $height?: string
    $isOpen?: boolean
    $borderRight?: string
    $backgroundColor?: string
    $padding?: string
    children?: ReactNode
    $header?: ReactNode
    $headerHeight?: string
    $opacity?: string
    $borderRadius?: string
}