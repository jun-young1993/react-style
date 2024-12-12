import { useStyledTheme } from "../../shared";
import { StyledButton } from "../styled-button";
import { StyledIconButtonProps } from "./styled-icon-button.props";
// import Tooltip from "../tool-tip/tool-tip";

const StyledIconButton = (props: StyledIconButtonProps) => {
    const { theme: styledTheme, $size, $fill, $tooltip, children, $label, ...styledButtonProps } = props;
    const theme = useStyledTheme();
    
    return (
        // <Tooltip
        //     {...$tooltip}
        // >
            <StyledButton 
                $size={$size  || theme.buttonSizeDefault}
                $padding={'0px'}
                {...styledButtonProps}
            >
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"current"}
                        height={"current"}
                        fill={"currentColor"}
                        viewBox={`0 0 14 14`}
                        preserveAspectRatio="none"
                    >
                        {children}
                    </svg>
                    <span>{$label}</span>
            </StyledButton>
        // </Tooltip>
    )
}

export default StyledIconButton;