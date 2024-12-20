import {DetailedPosition, JunyReactStyleInterface, Position} from "../../shared"

export interface ToolTipProps extends JunyReactStyleInterface{
    $message?: string
    children?: React.ReactNode
    $position?: Position | DetailedPosition
    $minWidth?: string
    $maxWidth?: string
    $zIndex?: number
    $isActive?: boolean

}