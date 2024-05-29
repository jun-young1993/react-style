import styled from "styled-components";
import { MacContainerHeaderProps } from "./MacContainer.type";
import { CloseIcon, HiddenIcon, MaximizeIcon } from "react-symbol";
import { MediaMobileOnlyStyle } from "../../libs/media-query";




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
	gap: 20px;
	${MediaMobileOnlyStyle(`
		gap: 15px;
	`)}
`;

const RoundButton = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	background-color: #4CAF50; /* You can change the color as needed */
	border-radius: 50%;
	color: white;
	text-align: center;
	line-height: 50px;
	font-size: 16px;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #45a049;
	}
`;
const MacContainerHeader = ({...elementProps}: MacContainerHeaderProps) => {
	return (
		<MacContainerHeaderWrapStyled {...elementProps}>
			<JustifyContentBetween>
				<JustifyContentStart>
					<CloseIcon />
					<HiddenIcon />
					<MaximizeIcon />
					<RoundButton />
				</JustifyContentStart>
			<span>hi</span>
			</JustifyContentBetween>
		</MacContainerHeaderWrapStyled>
	)
}
export default MacContainerHeader;