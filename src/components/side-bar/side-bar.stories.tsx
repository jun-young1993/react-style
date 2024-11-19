import { Meta, ReactRenderer, StoryObj } from "@storybook/react";

import SideBar from "./side-bar";
import { SideBarProps } from "./side-bar.props";
import { StoryAnnotations } from "storybook/internal/types";

export default {
	title: 'Components/SideBar',
	component: SideBar
} as Meta<typeof SideBar>

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
	args: {
		$isOpen: true,
		$header: <div>header</div>,
		children: <p>기본 사이드바 콘텐츠</p>,
	}
};

export const Default2: Story = {
	args: {
		$isOpen: true,
		children: <p>기본 사이드바 콘텐츠</p>,
	}
};

export const DarkTheme: Story = {
	args: {
		$isOpen: true,
		children: <p>다크모드 사이드바</p>,
	},
	parameters: {
		theme: 'dark'
	}
};