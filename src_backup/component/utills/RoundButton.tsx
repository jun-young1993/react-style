import { LightTheme } from "../StyleThemeProvider";
import styled from "styled-components";

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
export default RoundButton;