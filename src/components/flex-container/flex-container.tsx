import styled from "styled-components";
import { useStyledTheme } from "../../shared";
import { FlexContainerProps } from "./flex-container.props";




const FlexContainer = styled.div<FlexContainerProps>`
  width: ${({ $width }) => $width || '100vw'};
  height: ${({ $height }) => $height || '100vh'};
  display: ${({ $display }) => $display || 'flex'};
  color: ${({ $color }) => $color || useStyledTheme().black};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  background-color: ${({ $backgroundColor }) => $backgroundColor || useStyledTheme().lightGray};
  z-index: ${({ $zIndex }) => $zIndex};
  filter: brightness(${({$filterBrightness}) => $filterBrightness || '1'});
  padding: ${({$padding}) => $padding || 0};
  flex: ${({ $flex }) => $flex || '0 1 auto'};
  transition: ${({$transition}) => $transition};
  transform: ${({$transform}) => $transform};
`;

export default FlexContainer;