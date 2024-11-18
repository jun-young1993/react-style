import styled from "styled-components";
import { SideBarProps } from "./side-bar.props";
import { useDefaultTheme, zIndexConstants } from "../../shared";
import { FlexContainer } from "../../components/flex-container";

const defaultWidth = '300px';
const SideBarS = styled.div<SideBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width || defaultWidth};
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  color: ${({ color }) => color || '#000000'};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transform: translateX(${({ width }) => `-${width || defaultWidth}`});
  transition: transform 0.3s ease;
  transform: translateX(${({ isOpen, width }) => (isOpen ? '0' : `-${width || defaultWidth}`)})
  z-index: ${zIndexConstants.sideBar};
`;
const SideBar = () => {
  return <FlexContainer
  filterBrightness={3.5}
  >
    sdfaasdf
  </FlexContainer>
}
export default SideBar;