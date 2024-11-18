import styled from "styled-components";
import { FlexContainerProps } from "./flex-container.interface";
import { useDefaultTheme } from "utills/theme/theme.hook";

const FlexContainer = styled.div<FlexContainerProps>`
  width: ${({ width }) => width || '100vw'};
  height: ${({ height }) => height || '100vh'};
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  background-color: ${({ backgroundColor }) => backgroundColor || useDefaultTheme().white};
`;

export default FlexContainer;