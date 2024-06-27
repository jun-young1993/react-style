import { AlertItem, StyledAlert } from "../Alert/Alert"
import { AlertWrapProps } from "./AlertWrap.type"

const AlertWrap = ({
	position = 'top-right', 
	$opacity = '10%',
	$level = 'secondary',
	$isExiting = true,
	$active = true,
	$cursor,
	$topChildren,
	$hiddenChildren = false,
	$onClick,
	children
}: AlertWrapProps) => {
	return (
		<StyledAlert
			onClick={()=>{
				$onClick && $onClick();
			}}
			$active={$active}
			$opacity={$opacity}
			position={position}
			index={1}
			gap="3.5rem"
			$maxWidth="40%"
			$cursor={$cursor}
		>
			<>
			{$topChildren &&
			<AlertItem
				level={$level}
				$isExiting={$isExiting}
			>
			{$topChildren}
			</AlertItem>
			}
			{!$hiddenChildren &&
			<AlertItem
			level={$level}
			$isExiting={$isExiting}
			>	
				{children}	
			</AlertItem>
			}
			
			</>
		</StyledAlert>
	)
}

export default AlertWrap;