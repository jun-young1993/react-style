import { Meta, StoryObj } from "@storybook/react";
import ListItem from "./list-item";


export default {
    title: 'Components/ListItem',
    component: ListItem
} as Meta<typeof ListItem>

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        children: 'hi'
    }
};

export const DarkTheme: Story = {
    args: {
        children: 'hi'
    },
    parameters: {
        theme: 'dark'
    }
};