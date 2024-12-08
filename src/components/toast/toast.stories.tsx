import { Meta, StoryObj } from "@storybook/react";
import ToastMessage from "./toast-message"
import {useState} from "react";
import useToast from "./toast.hook";
import {FlexContainer} from "../flex-container";

export default {
    title: 'Components/ToastMessage',
    component: ToastMessage
} as Meta<typeof ToastMessage>

type Story = StoryObj<typeof ToastMessage>

const TestButton = () => {
    const { addToast } = useToast()
    const [count, setCount] = useState(1)
    const handleTopLeftClick = () => {
        addToast('top-left'+ count,{
            position: 'top-left'
        })
        setCount(count+1)
    }
    const handleTopRightClick = () => {
        addToast('top-right'+ count,{
            position: 'top-right'
        })
        setCount(count+1)
    }
    const handleTopMiddleClick = () => {
        addToast('top-middle'+ count,{
            position: 'top-middle',
        })
        setCount(count+1)
    }
    const handleBottomLeftClick = () => {
        addToast('test'+ count)
        setCount(count+1)
    }
    return (
        <FlexContainer
            $justifyContent={'center'}
            $alignItems={'center'}
            $flexDirection={'column'}
        >
            <FlexContainer
                $justifyContent={'center'}
                $alignItems={'center'}
                $gap={"1rem"}
            >
                <div>
                    <button
                        onClick={handleTopLeftClick}>
                        top-left
                    </button>
                </div>
                <div>
                    <button
                        onClick={handleTopMiddleClick}>
                        top-middle
                    </button>
                </div>
                <div>
                    <button
                        onClick={handleTopRightClick}>
                        top-right
                    </button>
                </div>
            </FlexContainer>
            <FlexContainer
                $justifyContent={'center'}
                $alignItems={'center'}
            >
                <div>
                    <button
                        onClick={handleBottomLeftClick}>
                        bottom-left
                    </button>
                </div>
            </FlexContainer>
        </FlexContainer>

    )
}

export const Default: Story = {
    render: (args) => (
        <TestButton />
    )
}

