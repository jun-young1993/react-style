import styled from "styled-components";
import {AlignBoxProps} from "./AlignBox.type";

const Container = styled.div<AlignBoxProps>`
    display: flex;
    justify-content: ${({ align }) => {
        if (align === 'left') return 'flex-start';
        if (align === 'right') return 'flex-end';
        return 'center';
    }};
`;

/**
 *
 * @param {ReactNode} children
 * @param {'left' | 'right' | 'center'} align default center
 * @constructor
 * @example
 * ```
 *  <AlignBox
 *      align={'left'}
 *   >
 *      <div>left</div>
 *  </AlignBox>
 * ```
 */
const AlignBox = ({ children, align }: AlignBoxProps) => {
    return (
        <Container align={align ?? 'center'}>
            {children}
        </Container>
    )
}

export default AlignBox;