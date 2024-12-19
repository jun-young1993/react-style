import { ButtonProps } from "../styled-button";
import {ToolTipProps} from "../tool-tip/tool-tip.props";

export interface StyledIconButtonProps extends ButtonProps {
    $width?: string
    $height?: string
    $fill?: string
    $label?: string
    $tooltip?: ToolTipProps
    svg?: React.SVGProps<SVGSVGElement>
}