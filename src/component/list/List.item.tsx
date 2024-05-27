import styled from "styled-components";
import {ListItemDivStyleProps, ListItemProps} from "./list.type";

const ListItemStyled = styled.div<ListItemDivStyleProps>`
    ${({
        borderRadius,
        borderWidth,
        borderStyle,
        borderColor,
        margin,
        padding,
        backgroundColor
    }) => `
        border-radius: ${borderRadius ?? '6px'};
        border-width: ${borderWidth ?? '1px'};
        border-style: ${borderStyle ?? 'solid'};
        border-color: ${borderColor ?? '#d0d7de'};
        margin: ${margin ?? '3px'};
        background-color: ${backgroundColor ?? '#ffffff'};
        padding: ${padding ?? '5px'};
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