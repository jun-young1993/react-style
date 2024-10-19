import React from 'react';
import DivContainer from "./div-container";
import {ContainerProps} from "./container.type";
import styled from "styled-components";

const ContainerStyled = styled.div<ContainerProps>`
  display: ${(props) => props?.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  width: ${(props) => props.width || '80vw'};
  height: ${(props) => props.height || '80vh'};
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;

const Container: React.FC<ContainerProps> = (props) => {
    return (
        <ContainerStyled {...props}>
            {props.children}
        </ContainerStyled>
    );
};



export default Container;
