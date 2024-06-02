import ThemeType from "../StyleThemeProvider/Theme.type"
import { ReactNode } from "react"

export interface MacContainerEventProps {
	onClose?: () => void
	onMinimize?: () => void
	onHidden?: () => void
}

export interface MacContainerHeaderWrapElementProps extends MacContainerEventProps{
	width?: string
	textAlign?: string
}
export interface MacContainerHeaderProps extends MacContainerHeaderWrapElementProps{
	title?: string | ReactNode
	buttonSize?: string
	theme?: ThemeType
}
export interface MacContainerWrapElementProps extends MacContainerEventProps{
	width?: string
	height?: string
	borderRadius?: string
	backgroundColor?: string
	padding?: string
	theme?: ThemeType
	overflow?: 'scroll' | 'visible' | 'auto' | 'hidden' | string
}
export interface MacContainerBodyElementProps {
	padding?: string
}
export interface MacContainerBody extends MacContainerBodyElementProps{
	
}
export interface MacContainerProps extends MacContainerWrapElementProps{
	header?: MacContainerHeaderProps
	body?: MacContainerBody
	children?: ReactNode
}