import { Meta, StoryFn } from "@storybook/react";
import MacContainer from "./MacContainer";

export default {
	title: 'MacContainer',
	Component: MacContainer
} as Meta<typeof MacContainer>

const Template: StoryFn<typeof MacContainer> = (args) => <MacContainer {...args} />
export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
	header: {
		title: 'Latest Posts'
	}
}