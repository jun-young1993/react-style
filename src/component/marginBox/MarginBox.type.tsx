import { ComponentProps } from "react";

export interface MarginBoxProps extends ComponentProps<'div'>{
	bottom?: string
	top?: string
	left?: string
	right?: string
}
