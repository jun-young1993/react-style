import {ReactNode} from "react";

export interface ScreenProps {
    children: ReactNode[]
    footerGap?: string
    overflow?: string
}