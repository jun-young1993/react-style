import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const CloseIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <path d="M6.225 4.811a1 1 0 011.414 0L10 7.172l2.361-2.361a1 1 0 011.414 1.414L11.414 10l2.361 2.361a1 1 0 01-1.414 1.414L10 11.414l-2.361 2.361a1 1 0 01-1.414-1.414L8.586 10 6.225 7.639a1 1 0 010-1.414z" />
        </StyledIconButton>
    );
}

export default CloseIconButton;