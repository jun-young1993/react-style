import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";
import { Size, Variant, useStyledTheme } from "../../shared";
import { ButtonProps } from "./styled-button.props";

const getButtonStyles = (theme: DefaultTheme, variant: Variant) => {
  return css`
    background-color: ${theme.button[variant].backgroundColor};
    color: ${theme.button[variant].color};
    border: 1px solid ${theme.button[variant].borderColor};

    &:hover {
      background-color: ${theme.button[variant].hoverBackgroundColor};
      border-color: ${theme.button[variant].hoverBorderColor || theme.button[variant].borderColor};
    }

    &:disabled {
      background-color: ${theme.button[variant].disabledBackgroundColor || theme.button[variant].backgroundColor};
      border-color: ${theme.button[variant].disabledBorderColor || theme.button[variant].borderColor};
      color: ${theme.button[variant].disabledColor || theme.button[variant].color};
    }
  `;
};
const getSizeStyles = (theme: DefaultTheme, size: Size) => {
  return css`
    padding: ${theme.buttonSize[size].padding};
    font-size: ${theme.buttonSize[size].fontSize};
    width: ${theme.buttonSize[size].width};
    height: ${theme.buttonSize[size].height};
  `;
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  ${({$variant, $size}) => {
    const theme = useStyledTheme(); // 테마를 여기서 사용합니다.
    
    return css`
      ${getButtonStyles(theme, $variant || theme.buttonDefault)}
      ${getSizeStyles(theme, $size || theme.buttonSizeDefault)}
    `;
  }}
  ${({$fullWidth}) => $fullWidth && "width: 100%;"}

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledButton;
