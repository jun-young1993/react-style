import { Meta, StoryObj } from "@storybook/react";
import StyledIconButton from "./styled-icon-button";
import {
	SearchIconButton,
	SqaureIconButton,
	SideBarIconButton,
	MenuIconButton,
	CloseIconButton,
	CycleCloseIconButton,
	OpenSideBarIconButton
} from "./icon-button";


export default {
	title: 'Components/StyledIconButton',
	component: StyledIconButton
} as Meta<typeof StyledIconButton>

type Story = StoryObj<typeof StyledIconButton>;

export const Search: Story = {
	render: (args) => <SearchIconButton {...args} />,
};

export const Square: Story = {
	render: (args) => <SqaureIconButton {...args} />
}

export const SideBar: Story = {
	render: (args) => <SideBarIconButton {...args} />
}

export const Menu: Story = {
	render: (args) => <MenuIconButton {...args} />
}

export const Close: Story = {
	render: (args) => <CloseIconButton {...args} />
}

export const CycleClose: Story = {
	render: (args) => <CycleCloseIconButton {...args} />
}

export const OpenSideBar: Story = {
	render: (args) => <OpenSideBarIconButton {...args} />
}