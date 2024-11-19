import { ButtonSize, Variant } from "../../shared";

export interface ButtonProps {
    $variant?: Variant;
    $size?: ButtonSize;
    $fullWidth?: boolean;
    $onClick?: () => void;
    $disabled?: boolean;
    children?: React.ReactNode;
}