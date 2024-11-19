import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const SearchIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <path d="M10 2a8 8 0 015.292 13.708l5.417 5.417a1 1 0 01-1.415 1.415l-5.417-5.417A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
        </StyledIconButton>
    )
    
}

export default SearchIconButton;