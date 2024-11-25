import { ReactNode } from "react";
import { SideBarProps } from "../index";
import {HTMLFlexInterface} from "../../shared";
export interface SideBarContainerProps extends SideBarProps{
    $sideBar: ReactNode
    $sideGap?: HTMLFlexInterface['gap']
}