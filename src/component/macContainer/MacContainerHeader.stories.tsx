import { Meta, StoryFn } from "@storybook/react";
import MacContainerHeader from "./MacContainerHeader";

export default {
	title: 'MacContainerHeader',
	Component: MacContainerHeader
} as Meta<typeof MacContainerHeader>

const Template: StoryFn<typeof MacContainerHeader> = (args) => <MacContainerHeader {...args} />
export const MacContainerHeaderTemplate = Template.bind({});
MacContainerHeaderTemplate.args = {
	title: "hi"
}