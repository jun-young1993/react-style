import React from 'react';
import styled from 'styled-components';
import {BetweenContainerProps, SpacerProps} from "./BetweenContainer.type";

const BetweenContainerStyled = styled.div<BetweenContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ?? 'space-between'};
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

const ChildrenContainer = styled.div<{flex?: string}>`
    flex: ${({flex}) => flex ?? 1}; /* 모든 자식 요소가 균등하게 공간을 차지하도록 설정 */
    min-width: 0; /* 자식 요소가 줄어들 수 있도록 설정 */
`

const Spacer = styled.div<SpacerProps>`
  flex: 0 0 ${({ gap }) => gap ?? '1rem'};
`;

const BetweenContainer = ({ children: propsChildren, gap , ...props}: BetweenContainerProps) => {
    const children = React.Children.toArray(propsChildren);

    return (
        <BetweenContainerStyled
            {...props}
        >
            {children.map((child,index) => {
                return (
                    <React.Fragment key={index}>
                        <>
                            {child}
                            {index < children.length - 1 && <Spacer gap={gap} />}
                        </>
                    </React.Fragment>
                )
            })}
        </BetweenContainerStyled>
    );
};


export default BetweenContainer;
