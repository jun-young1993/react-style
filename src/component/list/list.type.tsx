import {HTMLAttributes, ReactNode} from "react";
import {IntrinsicElementsDiv} from "../index.types";


export interface ListProps extends IntrinsicElementsDiv {
    children: ReactNode[]
    title?: string
}

export interface ListItemProps extends IntrinsicElementsDiv {
    children: ReactNode
}