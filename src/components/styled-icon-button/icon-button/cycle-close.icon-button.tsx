import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const CycleCloseIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <path d="M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z" fill="currentColor"></path>
        </StyledIconButton>
    );
}

export default CycleCloseIconButton;