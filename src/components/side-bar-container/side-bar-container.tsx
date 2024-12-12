import { SideBarContainerProps } from "./side-bar-container.props";
import { FlexContainer, ItemListContainer, SideBar } from "../index";

const SideBarContainer = (props: SideBarContainerProps) => {
    const {children, $items, $isOpen, $sideGap, ...sideBarProps } = props;
    return (
        <FlexContainer
            $gap={$isOpen ? ($sideGap || '1rem') : undefined}
        >
            <SideBar 
                {...sideBarProps}
                $isOpen={$isOpen}
                $position={$isOpen ? "static" : 'absolute'}
                $width={$isOpen ? sideBarProps.$width : '20px'}
                $backgroundColor={!$isOpen ? 'transparent' : undefined}
                $borderRight={!$isOpen ? 'none' : undefined}
                $opacity={$isOpen ? '100%' : '0%'}
            >
                {
                    $items &&
                    Array.isArray($items) &&
                    <ItemListContainer $overflow="unset" $items={$items} />
                }
            </SideBar>
            <FlexContainer
                $width="100%"
                $flex={$isOpen ? '1' : '0 1 auto'}
                $transition="flex-grow 0.3s ease"
            >
                {children}
            </FlexContainer>
        </FlexContainer>
    )
}

export default SideBarContainer;