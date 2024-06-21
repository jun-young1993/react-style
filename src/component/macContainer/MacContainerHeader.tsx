import styled from "styled-components";
import { MacContainerHeaderProps, MacContainerHeaderWrapElementProps } from "./MacContainer.type";
import { CloseIcon, HiddenIcon, MaximizeIcon } from "react-symbol";
import { MediaMobileOnlyStyle } from "../../libs/media-query";
import LightTheme from "../StyleThemeProvider/LightTheme";
import RoundButton from "../utills/RoundButton";




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