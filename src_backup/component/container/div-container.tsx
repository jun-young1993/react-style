import React from 'react';
import styled, { css } from 'styled-components';



const DivContainerStyled = styled.div`
  ${(props: React.HTMLAttributes<HTMLDivElement>) => css`
    ${Object.keys(props)
    .map((key) => `${key}: ${props[key as keyof React.HTMLAttributes<HTMLDivElement>]};`)
    .join(' ')}
  `}
`;

const DivContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <DivContainerStyled {...props}>
            {props.children}
        </DivContainerStyled>
    );
};

export default DivContainer;
