import { ButtonHTMLAttributes } from "react";
import { ButtonStyledThemeType, JunyReactStyleInterface } from "../../shared";

export interface ListItemProps extends JunyReactStyleInterface, ButtonHTMLAttributes<HTMLButtonElement>{
    $variant?: ButtonStyledThemeType
    $height?: string
    $width?: string
    $minHeight?: string
    children?: React.ReactNode
}