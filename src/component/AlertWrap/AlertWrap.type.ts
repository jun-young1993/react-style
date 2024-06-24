import { AlertProps, StyledAlertProps } from "component/Alert/Alert.type";
import { ReactNode } from "react";

export interface AlertWrapProps extends StyledAlertProps {
	children?: ReactNode | undefined
	$level?: AlertProps['level']
	$isExiting?: boolean
}