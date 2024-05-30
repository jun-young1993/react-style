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
	gap: 1rem;
	${MediaMobileOnlyStyle(`
		gap: 1.5rem;
	`)}
`;
interface RoundButtonProps {
	color?: 'red' | 'green' | 'yellow'
}
const RoundButton = styled.div<RoundButtonProps>`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	
	width: 28px;
	height: 28px;
	
	border-radius: 50%;
	color: white;
	
	line-height: 50px;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s ease;
	
	&:hover {

		> svg {
			visibility: visible;
			opacity: 1;
		}
	}
	${({color}) => {
		
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
			default:
				return `
					background-color: #FF5F56; /* red */
					&:hover {
						background-color: #E0443E;
					}
				`
		}
	}}
	> svg {
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.3s ease;
	}
`;
const MacContainerHeader = ({title, ...elementProps}: MacContainerHeaderProps) => {
	
	return (
		<MacContainerHeaderWrapStyled {...elementProps}>
			<JustifyContentBetween>
				<JustifyContentStart>
					<RoundButton
						color={"red"}
					>
						<CloseIcon />
					</RoundButton>
					<RoundButton
						color={"yellow"}
					>
						<HiddenIcon />
					</RoundButton>
					<RoundButton
						color={"green"}
					>
						<MaximizeIcon />
					</RoundButton>
				</JustifyContentStart>
				{title}
			</JustifyContentBetween>
		</MacContainerHeaderWrapStyled>
	)
}
export default MacContainerHeader;