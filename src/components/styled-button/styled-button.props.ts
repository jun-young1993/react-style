import {ButtonSize, JunyReactStyleInterface, ButtonStyledThemeType, HTMLFlexInterface} from "../../shared";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends JunyReactStyleInterface, ButtonHTMLAttributes<HTMLButtonElement>{
    $variant?: ButtonStyledThemeType;
    $size?: ButtonSize;
    $gap?: string;
    $fullWidth?: boolean;
    $disabled?: boolean;
    $backgroundColor?: string
    $pointerEvents?: HTMLFlexInterface['pointerEvents']
    children?: React.ReactNode;
}