import styled from "styled-components";
import { MacContainerBodyElementProps, MacContainerProps, MacContainerWrapElementProps } from "./MacContainer.type";
import MacContainerHeader from "./MacContainerHeader"
import LightTheme from "../StyleThemeProvider/LightTheme";
const MacContainerWrap = styled.div<MacContainerWrapElementProps>`
	${({
		width,
		height,
		borderRadius,
		backgroundColor,
		padding,
		overflow = 'auto',
		theme
	}) => {
		const paddingValue = padding ?? '0.5rem';
		const borderRadiusValue = borderRadius ?? '0.5rem';
		return `
			padding: ${paddingValue};
			width: ${width ?? '100%'};
			height: calc(${height ?? '100%'} - ${paddingValue} - ${borderRadiusValue});
			border-radius: ${borderRadiusValue};
			background-color: ${backgroundColor ?? theme.lightGrayBlue ?? LightTheme.lightGrayBlue};
			overflow: ${overflow};
		`
	}}
`;
const MacContainerBodyWrap = styled.div<MacContainerBodyElementProps>`
	${({
		padding
	}) => `
		padding: ${padding ?? '1rem'};
	`}
`
const MacContainer = ({header,body,children, onClose, onHidden, onMinimize, ...props}: MacContainerProps) => {
	return (
		<MacContainerWrap
			{...props}
		>
			<MacContainerHeader 
				onClose={onClose}
				onHidden={onHidden}
				onMinimize={onMinimize}
				{...header} 
			/>
			<MacContainerBodyWrap
				{...body}
			>
				{children}
			</MacContainerBodyWrap>
		</MacContainerWrap>
	)
}

export default MacContainer;