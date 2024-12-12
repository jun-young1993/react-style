import { Meta, StoryObj } from "@storybook/react"
import SideBarContainer from './side-bar-container'
import { ItemListContainer, ListItem } from "../../components"
import { useState } from "react";

export default {
	title: 'Components/SideBarContainer',
	component: SideBarContainer
} as Meta<typeof SideBarContainer>

type Story = StoryObj<typeof SideBarContainer>;

export const Default: Story = {
	args: {
		$isOpen: true,
		$header: <div>header</div>,
		$items: [...Array.from({length: 100}, (_, index) => <ListItem><div> ITEM {index} </div></ListItem>)],
		children: (
			<ItemListContainer>
				<ListItem>
					<div>ITEM 1</div>
				</ListItem>
			</ItemListContainer>
		),
	},
	argTypes: {
		$isOpen: {
			control: 'boolean'
		}
	}
};


export const DarkTheme: Story = {
	args: {
		$isOpen: true,
		$items: [
			<ListItem><div>ITEM 1</div></ListItem>
		],
		children: <div style={{width: '100%'}}>다크모드 콘텐츠</div>,
	},
	parameters: {
		theme: 'dark'
	}
};

export const HoverSideBar: Story = {
	render: () => {
		const [isOpen ,setIsOpen] = useState(false)
		return (
			<SideBarContainer
				$isOpen={isOpen}
				$header={<div>header</div>}
				$items={[<ListItem><div> ITEM 1 </div></ListItem>]}
				$onMouseOut={() => {
					setIsOpen(false)
				}}
				$onMouseOver={() => {
					setIsOpen(true)
				}}
			>
				<div>test</div>
			</SideBarContainer>
		)
	}
}