import { Meta, StoryObj } from "@storybook/react";

import FlexContainer from "./flex-container";

export default {
	title: 'Components/FlexContainer',
	component: FlexContainer
} as Meta<typeof FlexContainer>

type Story = StoryObj<typeof FlexContainer>;

export const Default: Story = {};

export const DarkTheme: Story = {
	parameters: {
		theme: 'dark'
	}
};