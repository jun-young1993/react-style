import {HTMLFlexInterface, JunyReactStyleInterface} from "../../shared";
import {ReactNode} from "react";

export interface FlexContainerProps extends JunyReactStyleInterface {
    $width?: string
    $height?: string
    $minHeight?: string
    $display?: HTMLFlexInterface['display']
    $color?: string
    $alignItems?: HTMLFlexInterface['alignItems']
    $justifyContent?: HTMLFlexInterface['justifyContent']
    $gap?: HTMLFlexInterface['gap']
    $backgroundColor?: string | number
    $zIndex?: number
    $padding?: string
    $margin?: string
    $flex?: string
    $filterBrightness?: string | number
    $transition?: string
    $transform?: string
    $flexDirection?: HTMLFlexInterface['flexDirection']
    $overflow?:HTMLFlexInterface['overflow']
    $overflowY?:HTMLFlexInterface['overflowY']
    $pointerEvents?: HTMLFlexInterface['pointerEvents']
    $visibility?: HTMLFlexInterface['visibility']
    $position?: HTMLFlexInterface['position']
    $top?: HTMLFlexInterface['top']
    $left?: HTMLFlexInterface['left']
    $right?: HTMLFlexInterface['right']
    $bottom?: HTMLFlexInterface['bottom']
    $boxSizing?: HTMLFlexInterface['boxSizing']
    children?: ReactNode | ReactNode[]

}