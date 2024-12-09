import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const CloseIconButton = (props: StyledIconButtonProps) => {
    return (
        <StyledIconButton {...props} >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z" fill="currentColor"></path></svg>
        </StyledIconButton>
    );
}

export default CloseIconButton;