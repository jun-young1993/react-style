import { Meta, StoryFn } from "@storybook/react";
import FlexContainer from "./flex-container";

export default {
	title: 'FlexContainer',
	Component: FlexContainer
} as Meta<typeof FlexContainer>

const Template: StoryFn<typeof FlexContainer> = (args) => <FlexContainer {...args} />

export const DefaultTemplate = Template.bind({});