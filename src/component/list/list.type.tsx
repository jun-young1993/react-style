import {HTMLAttributes, ReactNode} from "react";
import {IntrinsicElementsDiv} from "../index.types";

export interface ListDivStyleProps {
    width?: string
    height?: string
    display?: string
    flexDirection?: string
    overflowY?: string
    borderRadius?: string
    borderWidth?: string
    borderStyle?: string
    borderColor?: string
    opacity?: string
    margin?: string
    backgroundColor?: string
}

export interface ListItemDivStyleProps {
    borderRadius?: string
    borderWidth?: string
    borderStyle?: string
    borderColor?: string
    margin?: string
    backgroundColor?: string
    padding?: string
}

export interface ListProps extends ListDivStyleProps {
    children?: ReactNode[] | ReactNode
    title?: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    headingAlign?: 'center' | 'left' | 'right'
    
}

export interface ListItemProps extends ListItemDivStyleProps {
    children?: ReactNode
}