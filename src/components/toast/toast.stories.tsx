import { Meta, StoryObj } from "@storybook/react";
import ToastMessage from "./toast-message"
import {useState} from "react";
import useToast from "./toast.hook";

export default {
    title: 'Components/ToastMessage',
    component: ToastMessage
} as Meta<typeof ToastMessage>

type Story = StoryObj<typeof ToastMessage>

const TestButton = () => {
    const { addToast } = useToast()
    const [count, setCount] = useState(1)
    const handleClick = () => {
        addToast('test'+ count)
        setCount(count+1)
    }
    return (
        <div>
            <button
                onClick={handleClick}>
                click
            </button>
        </div>

    )
}

export const Default: Story = {
    render: (args) => (
        <TestButton />
    )
}

