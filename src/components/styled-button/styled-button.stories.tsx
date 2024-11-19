import { Meta, StoryObj } from "@storybook/react";
import StyledButton from "./styled-button";

export default {
	title: 'Components/StyledButton',
	component: StyledButton
} as Meta<typeof StyledButton>

type Story = StoryObj<typeof StyledButton>;
const SearchIcon = 		<svg
	xmlns="http://www.w3.org/2000/svg"
	width={24}
	height={24}
	fill="currentColor"
	viewBox="0 0 24 24"
	>
	<path d="M10 2a8 8 0 015.292 13.708l5.417 5.417a1 1 0 01-1.415 1.415l-5.417-5.417A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
	</svg>
;
export const Default: Story = {
	args: {
		children: <div>기본 버튼</div>,
	}
};
export const Xs: Story = {
	args: {
		$size: 'xs',
		children: <div>기본 버튼</div>,
	}
};
export const XsSvg: Story = {
	args: {
		$size: 'xs',
		$variant: 'secondary',
		children: SearchIcon,
	}
};
export const Small: Story = {
	args: {
		$size: 'small',
		children: <div>기본 버튼</div>,
	}
};

export const Large: Story = {
	args: {
		$size: 'large',
		children: <div>기본 버튼</div>,
	}
};

export const Secondary: Story = {
	args: {
		$variant: "secondary",
		children: <div>기본 버튼</div>,
	}
};

export const SvgDefault: Story = {
	args: {
		$variant: "secondary",
		children:  SearchIcon
	}
}

export const DarkTheme: Story = {
	args: {
		children: <div>다크모드 버튼</div>,
	},
	parameters: {
		theme: 'dark'
	}
};

export const DarkThemeSecondary: Story = {
	args: {
		$variant: "secondary",
		children: <div>다크모드 버튼</div>,
	},
	parameters: {
		theme: 'dark'
	}
};