import {Meta, StoryFn} from "@storybook/react";
import {SearchModal} from "./index";
import {DarkTheme} from "../StyleThemeProvider";
export default {
    title: 'SearchModal',
    component: SearchModal
} as Meta<typeof SearchModal>
const Template: StoryFn<typeof SearchModal> = (args) => <SearchModal {...args}/>
export const defaultTemplate = Template.bind({
    theme: DarkTheme
});
