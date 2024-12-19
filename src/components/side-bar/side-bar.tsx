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
  border:  ${({$border}) => $border + useStyledTheme().darkGray};
  border-radius: ${({$borderRadius}) => $borderRadius};
  background-color: ${({$backgroundColor}) => $backgroundColor};
  box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.07);
  outline: none;
  pointer-events: auto;
  transition: transform 1s ease;
  opacity: ${({$opacity}) => $opacity};
  box-sizing: border-box;
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
  $isOpen,
  $width,
  $height,
  $padding,
  $position,
  $borderRight, 
  $borderRadius,
  $backgroundColor,
  children,
  $header,
  $opacity,
  $headerHeight,
  $border,
  $onMouseOver,
  $onMouseOut,
}: SideBarProps) => {
  const theme = useStyledTheme();
  $backgroundColor = $backgroundColor || theme.midLightGray;

  
  return (
    <StyledSidebar 
      onMouseOver={() =>  $onMouseOver && $onMouseOver()}
      onMouseOut={() => $onMouseOut && $onMouseOut()}
      $borderRadius={$borderRadius || '0.5rem'}
      $position={$position || 'fixed'}
      $isOpen={$isOpen || false}
      $width={$width || '20%'}
      $height={$height || '100%'}
      $borderRight={$borderRight || '1px solid '}
      $border={$border || '1px solid'}
      $backgroundColor={$backgroundColor}
      $opacity={$opacity || '100%'}
    >
      {$isOpen 
      &&<StyledNav
        $padding={$padding || '0.0rem'}
      >
      {$header &&
        <StyledHeader
          $headerHeight={$headerHeight || '60px'}
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
      }
    </StyledSidebar>
  );
};


export default SideBar;
