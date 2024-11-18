import { Meta, StoryObj } from "@storybook/react";

import SideBar from "./side-bar";

export default {
	title: 'Components/SideBar',
	component: SideBar
} as Meta<typeof SideBar>

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};

export const DarkTheme: Story = {
	parameters: {
		theme: 'dark'
	}
};