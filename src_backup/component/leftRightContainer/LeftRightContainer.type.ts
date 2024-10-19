import {ReactNode} from "react";

export interface ChildrenLeftRightLayoutProps {
    ratio?: number
    maxWidth?: string
}
export interface LeftRightLayoutProps extends ChildrenLeftRightLayoutProps{
    children: ReactNode[] | ReactNode
    flexDirection?: 'column' | 'row'
    height?: string
    width?: string
    gap?: string
}