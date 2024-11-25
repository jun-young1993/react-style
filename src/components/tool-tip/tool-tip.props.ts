import {JunyReactStyleInterface, Position} from "../../shared"

export interface ToolTipProps extends JunyReactStyleInterface{
    $message?: string
    children?: React.ReactNode
    $position?: Position
    $minWidth?: string
    $maxWidth?: string
    $zIndex?: number

}