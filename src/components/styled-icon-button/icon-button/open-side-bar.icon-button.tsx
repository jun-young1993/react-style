import StyledIconButton from "../styled-icon-button";
import { StyledIconButtonProps } from "../styled-icon-button.props";

const OpenSideBarIconButton = ({...props}: StyledIconButtonProps) => {
    return (
        <StyledIconButton 
            {...props} 
            svg={{
                viewBox: "0 0 24 24",
                transform: "matrix(1, 0, 0, 1, 0, 0)"
            }}
        >
            <g stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g>
                <g> 
                    <path fill="none" d="M0 0h24v24H0z"></path> 
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 2v14h11V5H9z"></path> 
                </g> 
            </g>
        </StyledIconButton>
    )
    
}

export default OpenSideBarIconButton;

