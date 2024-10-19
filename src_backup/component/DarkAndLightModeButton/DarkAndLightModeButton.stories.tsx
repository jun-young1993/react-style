import DarkAndLightModeButton from "./DarkAndLightModeButton";
import {Meta, StoryFn} from "@storybook/react";

export default {
    title: 'DarkAndLightModeButton',
    Component: DarkAndLightModeButton
} as Meta<typeof DarkAndLightModeButton>

const Template: StoryFn<typeof DarkAndLightModeButton> = (args) => <DarkAndLightModeButton {...args} />
export const DarkAndLightModeButtonTemplate = Template.bind({})
DarkAndLightModeButtonTemplate.args = {
    iconSize: "14"
}

