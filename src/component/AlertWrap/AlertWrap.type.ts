import { IntrinsicElementsDiv } from "../index.types";
import { AlertProps, StyledAlertProps } from "../Alert/Alert.type";
import { ReactNode } from "react";


export interface AlertWrapProps extends StyledAlertProps {
	children?: ReactNode | undefined
	$level?: AlertProps['level']
	$isExiting?: boolean
	$onClick?: () => void
	$topChildren?: ReactNode
	$hiddenChildren?: boolean
	$backgroundColor?: string
}