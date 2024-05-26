import {ReactNode} from "react";

export interface ChildrenLeftRightLayoutProps {
    ratio?: number
    maxWidth?: string
}
export interface LeftRightLayoutProps extends ChildrenLeftRightLayoutProps{
    children: ReactNode[]
}