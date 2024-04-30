import styled from "styled-components";
import {AlignBoxProps} from "./AlignBox.type";
import { Children } from "react";

const Container = styled.div<AlignBoxProps>`
    display: flex;
    width: 100%;
    justify-content: ${({ align }) => {
        if (align === 'left') return 'flex-start';
        if (align === 'right') return 'flex-end';
        return 'center';
    }};
`;


/**
 *
 * @param {ReactNode[] | ReactNode} children
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
    const childrens = Children.toArray(children);
    return (
        <>
        {childrens.map((child) => {
            return <Container align={align ?? 'center'}>
                    {child}
                </Container>
        })}
        </>
    )
}

export default AlignBox;