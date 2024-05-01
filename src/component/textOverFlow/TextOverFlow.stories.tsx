import { StoryFn } from "@storybook/react";;
import {TextOverFlow} from "./index";


export default {
	title: 'GithubProfile',
	component: TextOverFlow
}

const Template: StoryFn<typeof TextOverFlow> = (args) => <TextOverFlow {...args} />

export const TextOverFlowTemplate = Template.bind({})
