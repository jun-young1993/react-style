import styled from "styled-components";
import { SideBarProps } from "./side-bar.props";
import { useStyledTheme, zIndexConstants } from "../../shared";
import { FlexContainer } from "../../components/flex-container";



const StyledSidebar = styled.div<SideBarProps>`
  position: ${({$position}) => $position};
  left: 0;
  top: 0;
  z-index: ${zIndexConstants.sideBar};
  height: ${({$height}) => $height};
  width: ${({$width}) => $width};
  border-right:  ${({$borderRight}) => $borderRight || '1px solid ' + useStyledTheme().darkGray};
  border-radius: ${({$borderRadius}) => $borderRadius};
  background-color: ${({$backgroundColor}) => $backgroundColor};
  box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.07);
  outline: none;
  pointer-events: auto;
  transform: translateX(${({$isOpen}) => ($isOpen ? '0' : '-100vw')});
  transition: transform 0.3s ease;
  opacity: ${({$opacity}) => $opacity || '100%'};
`;

const StyledNav = styled.nav<SideBarProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: ${({$padding}) => $padding};
  box-sizing: border-box;
`;

const StyledHeader = styled.div<SideBarProps>`
  display: flex;
  justify-content: space-between;
  height: ${({$headerHeight}) => $headerHeight};
  align-items: center;
`;

const SideBar = ({ 
  $isOpen = false, 
  $width = '25%', 
  $height = '100%',
  $padding = '0 1rem',
  $position= 'fixed',
  $borderRight, 
  $borderRadius = '0.5rem',
  $backgroundColor,
  children,
  $header,
  $opacity,
  $headerHeight = '60px'
}: SideBarProps) => {
  const defaultBackgroundColor = useStyledTheme().midLightGray;
  
  $backgroundColor = $backgroundColor || defaultBackgroundColor;
  
  return (
    <StyledSidebar 
      $borderRadius={$borderRadius}
      $position={$position}
      $isOpen={$isOpen} 
      $width={$width} 
      $height={$height}
      $borderRight={$borderRight}
      $backgroundColor={$backgroundColor}
      $opacity={$opacity}
    >
      <StyledNav
        $padding={$padding}
      >
        {$header &&
          <StyledHeader
            $headerHeight={$headerHeight}
          >
            {$header}
          </StyledHeader>
        }
        <FlexContainer
          $width="100%"
          $backgroundColor={$backgroundColor}
        >
          {children}
        </FlexContainer>
      </StyledNav>
    </StyledSidebar>
  );
};


export default SideBar;
