import { Meta, StoryObj } from "@storybook/react";
import TabPanel from "./tab-panel";


export default {
    title: 'Components/TabPanel',
    component: TabPanel
} as Meta<typeof TabPanel>

type Story = StoryObj<typeof TabPanel>

export const Default: Story = {
    render: () => {
        return (
            <TabPanel>
                <TabPanel.Tab label="Tab 1">
                <div>Content for Tab 1</div>
                </TabPanel.Tab>
                <TabPanel.Tab label="Tab 2">
                <div>Content for Tab 2</div>
                </TabPanel.Tab>
            </TabPanel>
        )
    }
}