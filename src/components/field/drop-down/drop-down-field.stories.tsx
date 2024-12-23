import { Meta, StoryObj } from "@storybook/react";
import DropDownField from "./drop-down-field";
import { SetStateAction, useState } from "react";

export default {
    title: 'Components/Field/DropDownField',
    component: DropDownField
} as Meta<typeof DropDownField>


type Story = StoryObj<typeof DropDownField>

export const Default: Story = {
    render: () => {
        const [isOpen, setOpen] = useState(false)
        const [selectedData, setSelectedData] = useState()
        const items = [1,2,3,4,5,6]
        const handleToggle = () => {
            setOpen(!isOpen)
        }
        const handleSelect = (_event: any, item: SetStateAction<undefined>) => {
            setSelectedData(item)
            setOpen(false)
        }
        return <DropDownField $isOpen={isOpen} $onToggle={handleToggle} $onSelect={handleSelect} $items={items}><div>{selectedData}</div></DropDownField>
    }
}