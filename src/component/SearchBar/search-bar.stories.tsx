import { Meta, StoryFn } from "@storybook/react";
import {SearchBar} from "./index";
import {DarkTheme} from "../StyleThemeProvider";
export default {
    title: 'SearchBar',
    component: SearchBar
} as Meta<typeof SearchBar>

const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar {...args}/>
export const defaultTemplate = Template.bind({
    theme: DarkTheme
});
