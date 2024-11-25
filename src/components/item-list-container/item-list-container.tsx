import {FlexContainer} from "../flex-container";
import {ItemListContainerProps, ItemListItemProps} from "./item-list-container.props";
import styled, {css, DefaultTheme} from "styled-components";
import {ButtonStyledThemeType, useStyledTheme} from "../../shared";

const getItemStyles = (theme: DefaultTheme, variant: ButtonStyledThemeType) => {
    return css`
    background-color: ${theme.button[variant].backgroundColor};
    color: ${theme.button[variant].color};
    //border: 1px solid ${theme.button[variant].borderColor};

    &:hover {
      background-color: ${theme.button[variant].hoverBackgroundColor};
      border-color: ${theme.button[variant].hoverBorderColor || theme.button[variant].borderColor};
      cursor: pointer;
    }

    &:disabled {
      background-color: ${theme.button[variant].disabledBackgroundColor || theme.button[variant].backgroundColor};
      border-color: ${theme.button[variant].disabledBorderColor || theme.button[variant].borderColor};
      color: ${theme.button[variant].disabledColor || theme.button[variant].color};
    }
  `;
};
const ItemListItemStyled = styled.div<ItemListItemProps>`
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: #646464;
    width: 100%;
    ${({$variant}) => {
      const theme = useStyledTheme();
        return css`
          ${getItemStyles(theme, $variant || theme.buttonDefault)}
        `
    }}

`
const ItemListItem = (props: ItemListItemProps) => {
    return (
        <FlexContainer
            $width={"100%"}
            $height={"auto"}
        >
            <ItemListItemStyled
                {...props}
            />

        </FlexContainer>
    )
}

const ItemListContainer = (props: ItemListContainerProps) => {
    const {
        $flexDirection,
        $gap,
        $overflow,
        ...$flexProps
    } = props;
    return (
        <FlexContainer
            $flexDirection={$flexDirection || 'column-reverse'}
            $gap={$gap || '0.2rem'}
            $overflow={$overflow || 'scroll'}
            {...$flexProps}
        >
            <ItemListItem><div>item1</div></ItemListItem>
            <ItemListItem><div>item2</div></ItemListItem>
            <ItemListItem><div>item3</div></ItemListItem>
        </FlexContainer>
    )
}

export default ItemListContainer;