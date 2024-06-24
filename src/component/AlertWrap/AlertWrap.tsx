import { AlertItem, StyledAlert } from "../Alert/Alert"
import { AlertWrapProps } from "./AlertWrap.type"

const AlertWrap = ({
	position = 'top-right', 
	$opacity = '10%',
	$level = 'secondary',
	$isExiting = true,
	children
}: AlertWrapProps) => {
	return (
		<StyledAlert
			$opacity={$opacity}
			position={position}
			index={1}
			gap="3.5rem"
			$maxWidth="40%"
		>
			<AlertItem
				level={$level}
				$isExiting={$isExiting}
			>
				{children}	
			</AlertItem>
		</StyledAlert>
	)
}

export default AlertWrap;