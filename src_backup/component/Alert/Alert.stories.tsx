import { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";


export default {
	title: 'Alert',
	Component: Alert
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />
export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
	level: 'secondary',
	position: 'top-right',
	children: <div>top-right</div>
}