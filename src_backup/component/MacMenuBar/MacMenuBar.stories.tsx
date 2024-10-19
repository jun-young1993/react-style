import { Meta, StoryFn } from "@storybook/react";
import MacMenuBar from "./MacMenuBar";
export default {
	title: 'MacMenuBar',
	Component: MacMenuBar
} as Meta<typeof MacMenuBar>

const Template: StoryFn<typeof MacMenuBar> = (args) => <MacMenuBar {...args} />
export const MacMenubarTemplate = Template.bind({});
MacMenubarTemplate.args = {
	
}
