import { Meta, StoryObj } from "@storybook/react";
import ItemListContainer from "./item-list-container";
import { ListItem } from "../../components/list-item";

export default {
    title: 'Components/ItemListContainer',
    component: ItemListContainer
} as Meta<typeof ItemListContainer>

type Story = StoryObj<typeof ItemListContainer>;

export const Default: Story = {

};

export const Items: Story = {
    args: {
        $items: [
            <ListItem>ITEM 1</ListItem>
        ]
    }
};