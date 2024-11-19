import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const MenuIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <path d="M3 6h18c0.552 0 1-0.448 1-1s-0.448-1-1-1H3C2.448 4 2 4.448 2 5s0.448 1 1 1zm18 5H3c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zm0 7H3c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z" />
        </StyledIconButton>
    )
    
}

export default MenuIconButton;