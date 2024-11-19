import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const SideBarIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <rect x="2" y="2" width="20" height="20" rx="4" ry="4" stroke="currentColor" fill="none"></rect>
            <line x1="7" y1="8" x2="13" y2="8" stroke="currentColor"></line>
            <line x1="7" y1="12" x2="13" y2="12" stroke="currentColor"></line>
            <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor"></line>
            <line x1="16" y1="6" x2="16" y2="18" stroke="currentColor"></line>
        </StyledIconButton>
    )
    
}

export default SideBarIconButton;