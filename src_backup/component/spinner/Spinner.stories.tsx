import { Meta, StoryFn } from "@storybook/react";
import Spinner from "./Spinner";


export default {
	title: 'Spinner',
	Component: Spinner
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />

export const SpinnerTemplate = Template.bind({});

SpinnerTemplate.args = {
	width: '10px',
	height: '10px'
}