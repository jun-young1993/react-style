import React from 'react';
import DivContainer from "./DivContainer";
import ScreenContainerProps from "./container.type";




const ScreenContainer: React.FC<ScreenContainerProps> = (props) => {
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

export default ScreenContainer;
