import { Meta, StoryObj } from "@storybook/react";
import ToolTip from "./tool-tip";
import { SearchIconButton } from "../../components/styled-icon-button";
import { FlexContainer } from "../../components/flex-container";

export default {
	title: 'Components/ToolTip',
	component: ToolTip,
} as Meta<typeof ToolTip>

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
	args: {
        $message: 'Search',
		children: <SearchIconButton />
	}
};
export const BottomTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="bottom" $message="search"><SearchIconButton /></ToolTip></FlexContainer>
}
export const RightTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="right" $message="search"><SearchIconButton /></ToolTip></FlexContainer>
}

export const LeftTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="left" $message="search"><SearchIconButton /></ToolTip></FlexContainer>
}

export const TopTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="top" $message="search"><SearchIconButton /></ToolTip></FlexContainer>
}
export const LongBottomTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="bottom" $message="Search Search Search Search Search Search Search"><SearchIconButton /></ToolTip></FlexContainer>
}

export const LongRightTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="right" $message="Search Search Search Search Search Search Search"><SearchIconButton /></ToolTip></FlexContainer>
}

export const LongLeftTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="left" $message="Search Search Search Search Search Search Search"><SearchIconButton /></ToolTip></FlexContainer>
}

export const LongTopTooltip: Story = {
	render: (args) => <FlexContainer $justifyContent="center" $alignItems="center"><ToolTip $position="top" $message="Search Search Search Search Search Search Search"><SearchIconButton /></ToolTip></FlexContainer>
}