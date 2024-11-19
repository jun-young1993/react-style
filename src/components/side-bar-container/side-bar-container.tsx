import { SideBarContainerProps } from "./side-bar-container.props";
import { FlexContainer, SideBar } from "../index";


const SideBarContainer = (props: SideBarContainerProps) => {
    const {children, $sideBar, ...sideBarProps } = props;
    return (
        <FlexContainer>
            <SideBar 
                {...sideBarProps}
                $position="static"
                $width={sideBarProps.$isOpen ? sideBarProps.$width : '0px'}
            >
                {$sideBar}
            </SideBar>
            <FlexContainer
                $width="100%"
                $flex={sideBarProps.$isOpen ? '1' : '0 1 auto'}
                $transition="flex-grow 0.3s ease"
            >
                {children}
            </FlexContainer>
        </FlexContainer>
    )
}

export default SideBarContainer;