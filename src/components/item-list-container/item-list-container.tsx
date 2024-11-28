import React, { ReactNode } from "react";
import { ListItem, ListItemProps } from "../../components/list-item";
import { FlexContainer } from "../flex-container";
import { ItemListContainerProps } from "./item-list-container.props";

const ItemListContainer = (props: ItemListContainerProps) => {
    const {
        $flexDirection,
        $gap,
        $overflow,
        $items,
        $height,
        children,
        ...$flexProps
    } = props;
    
    return (
        <FlexContainer
            $flexDirection={$flexDirection || 'column'}
            $gap={$gap || '0.2rem'}
            $overflow={$overflow || 'auto'}
            $height={$height || '100%'}
            {...$flexProps}
        >
            {children}
            {$items && $items.map((item) => 
                React.isValidElement<ReactNode>(item) && item
            )}
        </FlexContainer>
    )
}

export default ItemListContainer;