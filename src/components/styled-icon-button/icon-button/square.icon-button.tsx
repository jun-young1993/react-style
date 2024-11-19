import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const SquareIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <path d="M4 4h16v16H4z" />
        </StyledIconButton>
    )
    
}

export default SquareIconButton;