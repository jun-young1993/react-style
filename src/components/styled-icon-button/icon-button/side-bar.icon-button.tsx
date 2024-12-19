import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const SideBarIconButton = ({svg,...props}: StyledIconButtonProps) => {
    return (
        <StyledIconButton 
            {...props} 
        >
             <rect x="1" y="1" width="12" height="12" rx="2" ry="2" stroke="currentColor" fill="none"></rect>
            <line x1="3" y1="4" x2="9" y2="4" stroke="currentColor"></line>
            <line x1="3" y1="6" x2="9" y2="6" stroke="currentColor"></line>
            <line x1="3" y1="8" x2="9" y2="8" stroke="currentColor"></line>
            <line x1="10" y1="2" x2="10" y2="10" stroke="currentColor"></line>
        </StyledIconButton>
    )
    
}

export default SideBarIconButton;

