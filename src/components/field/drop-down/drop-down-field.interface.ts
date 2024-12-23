import { MouseEventHandler, ReactNode } from "react";

export interface DropDownArrowInterface {
    open?: boolean;
}

export interface DropDownProps<T = any> {
    $isOpen?: boolean;
    $onToggle?: MouseEventHandler<HTMLButtonElement>;
    $onSelect?: (event: React.MouseEvent<HTMLLIElement>, selectedItem: any, index: number) => void;
    $children?: ReactNode
    $items?: T[];
}
