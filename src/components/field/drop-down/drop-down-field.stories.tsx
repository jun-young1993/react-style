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
        interface Item {
            name: string
        }
        const [isOpen, setOpen] = useState(false)
        const [selectedData, setSelectedData] = useState<Item | null>(null)
        const items:Item[] = [{
            name: 'I 1',
        },{
            name: 'I 2',
        }]
        const handleToggle = () => {
            setOpen(!isOpen)
        }
        const handleSelect = (item: Item, index: number, _event: React.MouseEvent<HTMLLIElement>, ) => {
            setSelectedData(item)
            setOpen(false)
        }
        
        return <DropDownField<Item> $isOpen={isOpen} $onToggle={handleToggle} $onSelect={() => handleSelect} $items={items}><div>{selectedData && selectedData.name}</div></DropDownField>
    }
}