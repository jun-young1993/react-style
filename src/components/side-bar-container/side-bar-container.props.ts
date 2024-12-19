import { SideBarProps } from "../index";
import {HTMLFlexInterface} from "../../shared";
import { ItemListContainerProps } from "../../components/item-list-container/item-list-container.props";
export interface SideBarContainerProps extends SideBarProps{
    $items?: ItemListContainerProps['$items'],
    $sideGap?: HTMLFlexInterface['gap']
    $boxSizing?: HTMLFlexInterface['boxSizing']
}