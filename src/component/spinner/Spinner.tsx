import { Height, Width } from "../../component/index.style";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./Spinner.type";

const SpinStyled = keyframes`
	0% { 
		transform: rotate(0deg); 
	}
	100% { 
		transform: rotate(360deg); 
	}
`;

const SpinnerStyled = styled.div<SpinnerProps>`
	${({width,height}) => `
		${Width(width ?? '10px')}
		${Height(height ?? '10px')}
	`}
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left: 4px solid #767676; 
	border-radius: 50%;
	margin: 20px auto; 
	animation: 1s ${SpinStyled} linear infinite;
`;


/**
 * 
 * @param {SpinnerProps} props 
 * @returns 
 * ```
 * 	<Spinner width={"10px"} height={"10px"} />
 * ```
 */
const Spinner = (props: SpinnerProps) => {
	
	return <SpinnerStyled {...props}/>
};

export default Spinner;