import { StoryFn } from "@storybook/react";
import GithubProfile from "./GithubProfile";


export default {
	title: 'GithubProfile',
	component: GithubProfile
}

const Template: StoryFn<typeof GithubProfile> = (args) => <GithubProfile {...args} />

export const ProfileTemplate = Template.bind({})
ProfileTemplate.args = {
	size: 30,
	gitPersonalAccessToken: "ghp_####"	
}