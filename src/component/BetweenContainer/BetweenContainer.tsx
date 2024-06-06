import React from 'react';
import styled from 'styled-components';
import {BetweenContainerProps, SpacerProps} from "./BetweenContainer.type";

const BetweenContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

const Spacer = styled.div<SpacerProps>`
  flex: 0 0 ${({ gap }) => gap ?? '1rem'};
`;

const BetweenContainer = ({ children: propsChildren, gap }: BetweenContainerProps) => {
    const children = React.Children.toArray(propsChildren);

    return (
        <BetweenContainerStyled>
            {children.map((child,index) => {
                return (
                    <React.Fragment key={index}>
                        {child}
                        {index < children.length - 1 && <Spacer gap={gap} />}
                    </React.Fragment>
                )
            })}
        </BetweenContainerStyled>
    );
};


export default BetweenContainer;
