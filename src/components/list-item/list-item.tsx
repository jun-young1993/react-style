import styled, { css, DefaultTheme } from "styled-components";
import { FlexContainer } from "../../components/flex-container";
import { ListItemProps } from "./list-item.props";
import { ButtonStyledThemeType, useStyledTheme } from "../../shared";

const getItemStyles = (theme: DefaultTheme, variant: ButtonStyledThemeType) => {
    return css`
    background-color: ${theme.button[variant].backgroundColor};
    color: ${theme.button[variant].color};

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

const ListItemStyled = styled.div<ListItemProps>`
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 100%;
    ${({$variant}) => {
      const theme = useStyledTheme();
        return css`
          ${getItemStyles(theme, $variant || theme.buttonDefault)}
        `
    }}

`
const ListItem = ({
    $width,
    $height,
    $minHeight,
    ...props
}: ListItemProps) => {
    return (
        <FlexContainer
            $width={$width || "100%"}
            $height={$height || "auto"}
            $minHeight={$minHeight || '3.5rem'}
            $overflow="unset"
        >
            <ListItemStyled
                {...props}
            />

        </FlexContainer>
    )
}

export default ListItem;