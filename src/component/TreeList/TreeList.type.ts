import {ReactNode} from "react";
export interface TreeItemProps {
    active?: any
    title?: string
    userData?:{[key: string]: any}
}
export interface TreeListProps {
    onClick?: (item: TreeItemProps) => void
    title?: string | ReactNode
    icon?: ReactNode
    items?: TreeItemProps[] | []
}

