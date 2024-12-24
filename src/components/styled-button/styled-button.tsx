import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";
import { Size, useStyledTheme } from "../../shared";
import { ButtonProps } from "./styled-button.props";
import {ButtonStyledThemeType} from "../../shared/theme/styled-theme.interface";

const getButtonStyles = (theme: DefaultTheme, variant: ButtonStyledThemeType) => {
  return css`
    background-color: ${theme.button[variant].backgroundColor};
    color: ${theme.button[variant].color};
    border: ${theme.button[variant].border};

    &:hover {
      background-color: ${theme.button[variant].hoverBackgroundColor};
      border-color: ${theme.button[variant].hoverBorderColor || theme.button[variant].borderColor};
      color: ${theme.button[variant].hoverColor}
    }

    &:disabled {
      background-color: ${theme.button[variant].disabledBackgroundColor || theme.button[variant].backgroundColor};
      border-color: ${theme.button[variant].disabledBorderColor || theme.button[variant].borderColor};
      color: ${theme.button[variant].disabledColor || theme.button[variant].color};
    }
  `;
};
const getSizeStyles = (theme: DefaultTheme, $size: Size, $padding?: string | number) => {
  return css`
    padding: ${$padding || theme.buttonSize[$size].padding};
    font-size: ${theme.buttonSize[$size].fontSize};
    width: ${ theme.buttonSize[$size].width};
    height: ${  theme.buttonSize[$size].height};
  `;
};

const StyledButton = styled.button<ButtonProps>`
  position: ${({$position}) => $position};
  top: ${({$top}) => $top};
  right: ${({$right}) => $right};
  color: ${({$color}) => $color};
  display: block;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  pointer-events: ${({$pointerEvents}: ButtonProps) => $pointerEvents};
  gap: ${({$gap}) => $gap};
  transition: background-color 0.2s ease, border-color 0.2s ease;
  ${({ $variant, $size, $padding}: ButtonProps) => {
    const theme = useStyledTheme();
    
    return css`
      ${getButtonStyles(theme, $variant || theme.buttonDefault)}
      ${getSizeStyles(theme, $size || theme.buttonSizeDefault, $padding)}
    `;
  }}
  ${({$fullWidth}) => $fullWidth && "width: 100%;"}

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledButton;
