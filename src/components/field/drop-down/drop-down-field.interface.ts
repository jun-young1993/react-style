import { MouseEventHandler, ReactNode } from "react";
import { Size } from "../../../shared";
export interface DropDownContainerInterface {
    width: string,
    height: string
}
export interface DropDownItemInterface {
    name: string
}
export interface DropDownArrowInterface {
    open?: boolean;
}

export interface DropDownProps<T extends DropDownItemInterface> {
    $isOpen?: boolean;
    $emptyText?: string
    $items?: T[];
    $size?: Size
    children?: ReactNode
    $onToggle?: MouseEventHandler<HTMLButtonElement>;
    $onSelect?: (event: React.MouseEvent<HTMLLIElement>, selectedItem: T, index: number) => void;
}
