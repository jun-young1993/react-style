import { TextBoxWrapProps } from "../utills/index.type";
import {ReactNode} from "react";
export interface TreeItemProps<T = {[key: string]: any}> {
    active?: any
    title?: string
    userData?: T
    textOption?: TextBoxWrapProps
}
export interface TreeListProps<T> {
    onClick?: (item: TreeItemProps<T>) => void
    title?: string | ReactNode
    icon?: ReactNode
    items?: TreeItemProps<T>[] | [],
}

