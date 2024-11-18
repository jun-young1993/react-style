import styled from "styled-components";
import { useDefaultTheme } from "../../shared";
import { FlexContainerProps } from "./flex-container.props";




const FlexContainer = styled.div<FlexContainerProps>`
  width: ${({ width }) => width || '100vw'};
  height: ${({ height }) => height || '100vh'};
  display: ${({ display }) => display || 'flex'};
  color: ${({ color }) => color || useDefaultTheme().black};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: ${({ backgroundColor }) => backgroundColor || useDefaultTheme().lightGray};
  z-index: ${({ zIndex }) => zIndex};
  filter: brightness(${({filterBrightness}) => filterBrightness || '1'});
`;

export default FlexContainer;