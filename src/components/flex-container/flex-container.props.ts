import {HTMLFlexInterface, JunyReactStyleInterface} from "../../shared";
import {ReactNode} from "react";

export interface FlexContainerProps extends JunyReactStyleInterface{
    $width?: string
    $height?: string
    $minHeight?: string
    $display?: HTMLFlexInterface['display']
    $color?: string
    $alignItems?: HTMLFlexInterface['alignItems']
    $justifyContent?: HTMLFlexInterface['justifyContent']
    $gap?: HTMLFlexInterface['gap']
    $backgroundColor?: string
    $zIndex?: number
    $padding?: string
    $flex?: string
    $filterBrightness?: string | number
    $transition?: string
    $transform?: string
    $flexDirection?: HTMLFlexInterface['flexDirection']
    $overflow?:HTMLFlexInterface['overflow']
    children?: ReactNode | ReactNode[]
}