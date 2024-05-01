import styled from "styled-components";
import {TextOverFlowProps} from "./TextOverFlow.type";

const Container = styled.div<TextOverFlowProps>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

/**
 *
 * @param {TextOverFlowProps} props
 * @constructor
 * @example
 * ```tsx
 *  <TextOverFlow>foo</TextOverFlow>
 * ```
 */
const TextOverFlow = ({children}: TextOverFlowProps) => {
    return (
        <Container>{children}</Container>
    )
}

export default TextOverFlow;