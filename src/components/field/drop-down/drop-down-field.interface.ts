import { MouseEventHandler, ReactNode } from "react";
import { Size } from "../../../shared";
export interface DropDownContainerInterface {
    width: string,
    height: string
    $zIndex?: number
}
export interface DropDownItemInterface {
    name: string
}
export interface DropDownArrowInterface {
    open?: boolean;
}
export interface DropDownItemContainerInterface {
    $zIndex?: number
}
export interface DropDownProps<T extends DropDownItemInterface> {
    $isOpen?: boolean;
    $emptyText?: string
    $items?: T[];
    $size?: Size
    $firstSelect?: boolean
    children?: ReactNode
    $onToggle?: MouseEventHandler<HTMLButtonElement>;
    $onSelect?: (selectedItem: T, index: number, event?: React.MouseEvent<HTMLLIElement>) => void;
}
