import { useStyledTheme } from "../../shared";
import { StyledButton } from "../styled-button";
import { StyledIconButtonProps } from "./styled-icon-button.props";

const StyledIconButton = (props: StyledIconButtonProps) => {
    const { theme: styledTheme, $width, $height, $fill,  children, ...styledButtonProps } = props;
    const theme = useStyledTheme(styledTheme);
    
    return (
        <StyledButton {...styledButtonProps}> 
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={$width || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height} // icon 은 정사각형이라서 높이랑 넓이가 같아야함...
            height={$height || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height}
            fill={$fill || "currentColor"}
            viewBox="0 0 24 24"
            >
                {children}
            </svg>
        </StyledButton>
    )
}

export default StyledIconButton;