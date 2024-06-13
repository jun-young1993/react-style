import styled from "styled-components";
import { MacContainerHeaderProps, MacContainerHeaderWrapElementProps } from "./MacContainer.type";
import { CloseIcon, HiddenIcon, MaximizeIcon } from "react-symbol";
import { MediaMobileOnlyStyle } from "../../libs/media-query";
import LightTheme from "../StyleThemeProvider/LightTheme";




const MacContainerHeaderWrapStyled = styled.div<MacContainerHeaderProps>`
	${({
		width = '100%'
	}) => `
		width: ${width};
	`}
`;
const JustifyContentBetween = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const JustifyContentStart = styled.div`
	display: flex;
	justify-content: start;
	width: 100%;
	gap: 1rem;
	flex: 1;
	${MediaMobileOnlyStyle(`
		gap: 1.5rem;
	`)}
`;

const RoundButtonWrap = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
interface RoundButtonProps {
	color?: 'red' | 'green' | 'yellow'
	size?: string | undefined
}
const RoundButton = styled.div<RoundButtonProps>`
	${({size}) => `
		width: ${size ?? '1rem'};
		height: ${size ?? '1rem'};
	`}
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	
	border-radius: 50%;
	color: white;
	
	line-height: 50px;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s ease;
	
	&:hover {

		> svg {
			width: 50%;  /* Adjust as needed */
			height: 50%;  /* Adjust as needed */
			display: flex;
			text-align: center;
			align-items: center;
			justify-content: center;
			visibility: visible;
			opacity: 1;
		}
	}
	${({color,theme}) => {
		
		switch(color){
			case 'yellow':
				return `
					background-color: #FFBD2E; /* yellow */
					&:hover {
						background-color: #E1A91A;
					}
				`
			case 'green':
				return `
					background-color: #27C93F; /* green */
					&:hover {
						background-color: #1AAB29;
					}
				`
			case 'red':
				return `
					background-color: #FF5F56; /* red */
					&:hover {
						background-color: #FF5F56; /* red */
					}
				`
			default:
				return `
					background-color: ${theme.lightGrayBlue ?? LightTheme.lightGrayBlue};
					&:hover {
						background-color: ${theme.veryLightGray ?? LightTheme.veryLightGray};
					}
				`
		}
	}}
	> svg {
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.3s ease;
	}
`;
const TitleWrap = styled.div<MacContainerHeaderWrapElementProps>`
	${({theme, textAlign}) => `
		color: ${theme.black ?? LightTheme.black};
		text-align: ${textAlign ?? 'right'};
	`}
	margin-right: 1.5rem;
	flex: 1;
	
`;
const MacContainerHeader = ({
	title,
	buttonSize,
	onClose,
	onMinimize,
	onHidden,
	showClose = true,
	showMinimize = true,
	showHidden = true,
	...elementProps
}: MacContainerHeaderProps) => {
	
	return (
		<MacContainerHeaderWrapStyled {...elementProps}>
			<JustifyContentBetween>
				<JustifyContentStart>
					{showClose &&
						<RoundButton
						size={buttonSize}
						color={"red"}
						onClick={() => onClose && onClose()}
						>
							<CloseIcon viewBox={"0 0 14 14"}/>
						</RoundButton>
					}
					{showMinimize &&
					<RoundButton
						size={buttonSize}
						color={"yellow"}
						onClick={() => onHidden && onHidden()}
						>
							<HiddenIcon viewBox={"0 0 14 14"} />
					</RoundButton>}
					{showHidden &&
					<RoundButton
					size={buttonSize}
					color={"green"}
					onClick={() => onMinimize && onMinimize()}
					>
						<MaximizeIcon viewBox={"0 0 14 14"} />
					</RoundButton>
					}	
				</JustifyContentStart>
				<TitleWrap
					{...elementProps}
				>
					{title}
				</TitleWrap>
			</JustifyContentBetween>
		</MacContainerHeaderWrapStyled>
	)
}
export default MacContainerHeader;