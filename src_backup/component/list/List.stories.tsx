import { Meta, StoryFn } from "@storybook/react";
import List from "./List";
import ListItem from "./List.item";
import { title } from "process";

export default {
	title: 'List',
	component: List
} as Meta<typeof List>
const items = [
	<ListItem>
		<div>list 1</div>
	</ListItem>,
	<ListItem>
		<div>list 2</div>
	</ListItem>,
]
const Template: StoryFn<typeof List> = (args) => <List {...args} />
export const ListTemplate = Template.bind({})
ListTemplate.args = {
	title: 'test list',
	children: items
}
