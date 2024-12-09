import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const CycleCloseIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M8.5 8.5l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </StyledIconButton>
    );
}

export default CycleCloseIconButton;