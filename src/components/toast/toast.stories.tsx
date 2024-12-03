import { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast"

export default {
    title: 'Components/Toast',
    component: Toast
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>


export const Default: Story = {
    args: {
        $isVisible: true,
        $message: 'test'
    }
}