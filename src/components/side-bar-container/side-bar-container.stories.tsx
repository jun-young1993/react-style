import { Meta, StoryObj } from "@storybook/react"
import SideBarContainer from './side-bar-container'
import { ItemListContainer, ListItem } from "../../components"

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