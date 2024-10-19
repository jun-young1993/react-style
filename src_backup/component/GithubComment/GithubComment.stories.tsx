import {Meta, StoryFn} from "@storybook/react";
import GithubComment from "./GithubComment";

export default {
	title: 'GithubComment',
	Component: GithubComment
} as Meta<typeof GithubComment>

const Template: StoryFn<typeof GithubComment> = (args) => <GithubComment {...args} />
export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {
	
}