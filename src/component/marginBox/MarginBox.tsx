import styled from "styled-components";
import { MarginBoxProps } from "./MarginBox.type";
import { MarginBottom, MarginLeft, MarginRight, MarginTop } from "component/index.style";

const Container = styled.div<MarginBoxProps>`
	${({bottom}) => MarginBottom(bottom)}
	${({left}) => MarginLeft(left)}
	${({right}) => MarginRight(right)}
	${({top}) => MarginTop(top)}
`;

/**
 * 
 * @param {MarginBoxProps} props
 * @returns 
 * @example
 * ```
 * 	<MarginBox
 * 		bottom={"1px"}
 *  		top={"1px"}
 * 		right={"1px"}
 * 		left={"1px"}
 *      >
 * 		<div>foo</div>
 * 	<MarginBox>
 * ```
 */
const MarginBox = ({children, ...props}: MarginBoxProps) => {
	return (
		<Container {...props}>{children}</Container>
	)
}

export default MarginBox;