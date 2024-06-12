import LightTheme from "component/StyleThemeProvider/LightTheme";
import styled, { css, keyframes } from "styled-components";
import { TextBoxWrapProps } from "./index.type";


const scrollText = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;


const TextBox = styled.span<TextBoxWrapProps>`
  color: ${({ color, theme }) => color ?? theme.black ?? LightTheme.black};

  ${({ scroll, duration }) => scroll && css`
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;

    &:hover {
      animation: ${scrollText} ${duration ?? '10s'} linear infinite;
    }
  `}
`;
export default TextBox;