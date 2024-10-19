import {Meta, StoryFn} from "@storybook/react";
import GithubReply from "./GithubReply";

export default {
	title: 'GithubReply',
	Component: GithubReply
} as Meta<typeof GithubReply>

const Template: StoryFn<typeof GithubReply> = (args) => <GithubReply {...args} />
export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {
	
}