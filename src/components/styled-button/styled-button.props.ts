import {ButtonSize, JunyReactStyleInterface, ButtonStyledThemeType, HTMLFlexInterface, HTMLDivElementInterface} from "../../shared";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends JunyReactStyleInterface, ButtonHTMLAttributes<HTMLButtonElement>{
    $variant?: ButtonStyledThemeType;
    $size?: ButtonSize;
    $position?: HTMLDivElementInterface['position'];
    $top?: HTMLDivElementInterface['top'];
    $right?: HTMLDivElementInterface['right'];
    $gap?: string;
    $padding?: string | number
    $width?: string;
    $height?: string;
    $color?: string;
    $fullWidth?: boolean;
    $disabled?: boolean;
    $backgroundColor?: string
    $pointerEvents?: HTMLFlexInterface['pointerEvents']
    children?: React.ReactNode;
}