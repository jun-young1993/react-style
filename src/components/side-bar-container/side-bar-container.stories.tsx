import { Meta, StoryObj } from "@storybook/react";
import SideBarContainer from './side-bar-container';

export default {
	title: 'Components/SideBarContainer',
	component: SideBarContainer
} as Meta<typeof SideBarContainer>

type Story = StoryObj<typeof SideBarContainer>;

export const Default: Story = {
	args: {
		$isOpen: true,
		$header: <div>header</div>,
		$sideBar: <p>기본 콘텐츠</p>,
		children: <div>기본 사이드바 콘텐츠</div>,
	}
};


export const DarkTheme: Story = {
	args: {
		$isOpen: true,
		$sideBar: <p>다크모드 사이드바 콘텐츠</p>,
		children: <div>다크모드 콘텐츠</div>,
	},
	parameters: {
		theme: 'dark'
	}
};