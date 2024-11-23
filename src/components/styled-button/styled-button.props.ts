import { ButtonSize } from "../../shared";
import {ButtonStyledThemeType} from "../../shared/theme/styled-theme.interface";

export interface ButtonProps {
    $variant?: ButtonStyledThemeType;
    $size?: ButtonSize;
    $fullWidth?: boolean;
    $onClick?: () => void;
    $disabled?: boolean;
    children?: React.ReactNode;
}