import { Position } from "../../shared"

export interface ToolTipProps {
    $message?: string
    children: React.ReactNode
    $position?: Position
    $zIndex?: number
}