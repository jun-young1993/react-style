import { ReactNode } from "react"

export interface MacContainerHeaderWrapElementProps {
	width?: string
}
export interface MacContainerHeaderProps extends MacContainerHeaderWrapElementProps{
	title?: string | ReactNode
}