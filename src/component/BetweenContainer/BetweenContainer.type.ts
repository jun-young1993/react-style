import {ReactNode} from "react";
export interface SpacerProps {
    gap?: string | undefined
}
export interface BetweenContainerProps extends SpacerProps{
    children?: ReactNode | ReactNode[] | undefined | string
    justify?: string
    equalSpacing?: boolean
}