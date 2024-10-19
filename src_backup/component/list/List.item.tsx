import styled, { ThemeProvider } from "styled-components";
import {ListItemDivStyleProps, ListItemProps} from "./list.type";
import LightTheme from "../StyleThemeProvider/LightTheme";

const ListItemStyled = styled.div<ListItemDivStyleProps>`

    ${({
        theme,
        borderRadius,
        borderWidth,
        borderStyle,
        borderColor,
        margin,
        padding,
        backgroundColor,
        fontColor
    }) => `
        border-radius: ${borderRadius ?? '6px'};
        border-width: ${borderWidth ?? '1px'};
        border-style: ${borderStyle ?? 'solid'};
        border-color: ${borderColor ?? theme.lightGray ?? LightTheme.lightGray};
        margin: ${margin ?? '3px'};
        background-color: ${backgroundColor ?? theme.veryLightGray ?? LightTheme.veryLightGray};
        padding: ${padding ?? '5px'};
        color: ${fontColor ?? theme.black ?? LightTheme.black};
    `}
`; 
const ListItem = ({ children, ...divProps }: ListItemProps) => {
        
    return (

            <ListItemStyled {...divProps} >
                {children}
            </ListItemStyled>

    );
};


export default ListItem;