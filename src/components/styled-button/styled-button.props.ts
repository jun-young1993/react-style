import {ButtonSize, JunyReactStyleInterface, ButtonStyledThemeType } from "../../shared";

export interface ButtonProps extends JunyReactStyleInterface{
    $variant?: ButtonStyledThemeType;
    $size?: ButtonSize;
    $fullWidth?: boolean;
    $onClick?: () => void;
    $disabled?: boolean;
    children?: React.ReactNode;
}