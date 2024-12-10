import { useStyledTheme } from "../../shared";
import { StyledButton } from "../styled-button";
import { StyledIconButtonProps } from "./styled-icon-button.props";
// import Tooltip from "../tool-tip/tool-tip";

const StyledIconButton = (props: StyledIconButtonProps) => {
    const { theme: styledTheme, $width, $height, $fill, $tooltip, children, $label, ...styledButtonProps } = props;
    const theme = useStyledTheme();
    
    return (
        // <Tooltip
        //     {...$tooltip}
        // >
            <StyledButton 
                $width={$width || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height}
                $height={$height || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height}
                {...styledButtonProps}
            >
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={$width || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height} // icon 은 정사각형이라서 높이랑 넓이가 같아야함...
                        height={$height || theme.buttonSize[styledButtonProps.$size || theme.buttonSizeDefault].height}
                        fill={$fill || "currentColor"}
                        viewBox="0 0 14 14"
                    >
                        {children}
                    </svg>
                    <span>{$label}</span>
            </StyledButton>
        // </Tooltip>
    )
}

export default StyledIconButton;