import {ReactNode} from "react";

export interface ChildrenLeftRightLayoutProps {
    ratio?: number
}
export interface LeftRightLayoutProps extends ChildrenLeftRightLayoutProps{
    children: ReactNode[]
}