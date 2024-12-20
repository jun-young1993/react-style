import { Meta, StoryObj } from "@storybook/react";
import ToolTip from "./tool-tip";
import { SearchIconButton } from "../../components/styled-icon-button";
import { FlexContainer } from "../../components/flex-container";
import LightTheme from "../../shared/theme/light-theme";

export default {
	title: 'Components/ToolTip',
	component: ToolTip,
} as Meta<typeof ToolTip>

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
	args: {
        $message: 'Search',
		children: <SearchIconButton theme={LightTheme} />
	}
};
export const BottomTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="bottom" $message="search"><SearchIconButton theme={args.theme}/></ToolTip></FlexContainer>
}

export const BottomRightTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="bottom-right" $message="search"><SearchIconButton theme={args.theme}/></ToolTip></FlexContainer>,
}
export const BottomTooltipDarkTheme: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="bottom" $message="search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>,

	parameters: {
		theme: 'dark'
	}
}
export const RightTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="right" $message="search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}

export const LeftTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="left" $message="search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}

export const TopTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="top" $message="search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}
export const LongBottomTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="bottom" $message="Search Search Search Search Search Search Search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}

export const LongRightTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="right" $message="Search Search Search Search Search Search Search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}

export const LongLeftTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="left" $message="Search Search Search Search Search Search Search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}

export const LongTopTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip theme={args.theme} $position="top" $message="Search Search Search Search Search Search Search"><SearchIconButton theme={args.theme} /></ToolTip></FlexContainer>
}