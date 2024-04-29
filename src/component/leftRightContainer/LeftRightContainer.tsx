import styled from "styled-components";
import {Children} from "react";
import {ChildrenLeftRightLayoutProps, LeftRightLayoutProps} from "./LeftRightContainer.type";
const ChildrenContainer = styled.div<ChildrenLeftRightLayoutProps>`
    ${({ratio}) => `
        flex: ${ratio};
    `}
`;
const Container = styled.div`
    display: flex;
`;

/**
 *
 * @param {ReactNode[]} children
 * @param ratio
 * @constructor
 * @example
 * ```
 * <LeftRightContainer
 *  ratio={0.3}
 * >
 *     <div>
 *         left content
 *     </div>
 *     <div>
 *         right content
 *     </div>
 * </LeftRightContainer>
 * ```
 */
const LeftRightContainer = ({children, ratio}: LeftRightLayoutProps) => {
    const [leftContent, rightContent] = Children.toArray(children);
    return (
        <Container>
            <ChildrenContainer
                ratio={ratio ?? 1}
            >
                {leftContent}
            </ChildrenContainer>
            <ChildrenContainer
                ratio={1}
            >
                {rightContent}
            </ChildrenContainer>
        </Container>
    )
}

export default LeftRightContainer;