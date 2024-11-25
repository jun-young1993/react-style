import {ButtonSize, JunyReactStyleInterface, ButtonStyledThemeType } from "../../shared";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends JunyReactStyleInterface, ButtonHTMLAttributes<HTMLButtonElement>{
    $variant?: ButtonStyledThemeType;
    $size?: ButtonSize;
    $fullWidth?: boolean;
    $disabled?: boolean;
    children?: React.ReactNode;
}