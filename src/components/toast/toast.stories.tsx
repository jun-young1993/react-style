import { Meta, StoryObj } from "@storybook/react";
import ToastMessage from "./toast-message"
import {useState} from "react";
import useToast from "./toast.hook";
import {FlexContainer} from "../flex-container";
import {DetailedPosition} from "../../shared";

export default {
    title: 'Components/ToastMessage',
    component: ToastMessage
} as Meta<typeof ToastMessage>

type Story = StoryObj<typeof ToastMessage>

const TestButton = () => {
    const { addToast } = useToast()
    const [count, setCount] = useState(1)

    const handleClick = (position: DetailedPosition) => {
        addToast(position+ count,{
            position: position,
            duration: 900000
        })
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
                        onClick={() => handleClick('top-left')}>
                        top-left
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleClick('top-middle')}>
                        top-middle
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleClick('top-right')}>
                        top-right
                    </button>
                </div>
            </FlexContainer>
            <FlexContainer
                $justifyContent={'center'}
                $alignItems={'center'}
                $gap={"1rem"}
            >
                <div>
                    <button
                        onClick={() => handleClick('bottom-left')}>
                        bottom-left
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleClick('bottom-middle')}>
                        bottom-middle
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleClick('bottom-right')}>
                        bottom-right
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

