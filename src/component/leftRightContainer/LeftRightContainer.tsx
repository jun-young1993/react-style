import styled from "styled-components";
import {Children} from "react";
import {ChildrenLeftRightLayoutProps, LeftRightLayoutProps} from "./LeftRightContainer.type";
import {MediaMobileOnlyStyle, MediaTabletOnlyStyle} from "../../libs/media-query";
const ChildrenContainer = styled.div<ChildrenLeftRightLayoutProps>`
    ${({ratio}) => `
        flex: ${ratio};
    `}
`;
const Container = styled.div<LeftRightLayoutProps>`
    display: flex;
    ${({flexDirection, height, width}) => `
        flex-direction: ${flexDirection ?? 'row'};
        height: ${height ?? '100%'};;
        width: ${width ?? '100%'};;
    `}
    
    ${MediaMobileOnlyStyle(`
            flex-direction: column;
    `)}
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
const LeftRightContainer = ({children, ratio, height, width, flexDirection, gap}: LeftRightLayoutProps) => {
    const [leftContent, rightContent] = Children.toArray(children);
    return (
        <Container
            flexDirection={flexDirection}
            height={height}
            width={width}
        >
            <ChildrenContainer
                ratio={ratio ?? 1}
            >
                {leftContent}
            </ChildrenContainer>
            <div style={{width: gap ?? '10px'}}></div>
            <ChildrenContainer
                ratio={1}
            >
                {rightContent}
            </ChildrenContainer>
        </Container>
    )
}

export default LeftRightContainer;