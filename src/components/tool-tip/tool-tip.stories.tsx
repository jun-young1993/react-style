import { Meta, StoryObj } from "@storybook/react";
import ToolTip from "./tool-tip";
import { SearchIconButton } from "../../components/styled-icon-button";

export default {
	title: 'Components/ToolTip',
	component: ToolTip
} as Meta<typeof ToolTip>

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
	args: {
        message: 'SearchSearchSearchSearchSearchSearchSearchSearchSearch',
		children: <SearchIconButton />
	}
};
