import React from 'react';
import DivContainer from "./div-container";
import ContainerProps from "./container.type";




const Container: React.FC<ContainerProps> = (props) => {
    return (
        <DivContainer
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            width="80vw"
            height="80vh"
            backgroundColor="#ffffff"
            {...props}
        >
            {props.children}
        </DivContainer>
    );
};

export default Container;
