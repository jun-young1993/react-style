import { Meta, StoryFn } from "@storybook/react";
import {TreeList} from "./index";


export default {
	title: 'TreeList',
	Component: TreeList
} as Meta<typeof TreeList>

const Template: StoryFn<typeof TreeList> = (args) => <TreeList {...args} />

export const TreeListTemplate = Template.bind({});

const items = [
	'Develop',
	'Diverse',
	'Project',
	'Resume',
	'docs',
	'issue',
	'troubleshooting'
];
TreeListTemplate.args = {
	title: 'hi',
	items: [{
		active: false,
		title: 'Develop',
	},{
		active: true,
		title: 'Diverse',
	},{
		active: false,
		title: 'Project',
	},{
		active: false,
		title: 'Resume',
	},{
		active: false,
		title: 'issue',
	}]

}