import { TextBoxWrapProps } from "../utills/index.type";
import {ReactNode} from "react";

export interface MacMenuBarElementProps {
    minHeight?: string
}
export interface MacMenuBarProps extends MacMenuBarElementProps{
    children: ReactNode | ReactNode[]
}

export interface MacMenuBarItemProps {
    size?: number;
    src?: string | undefined;
    title?: string
    onClick?: () => void
    onContextMenu?: () => void
    textOption?: TextBoxWrapProps
}