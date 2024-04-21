import Button from "./Button";
import {Meta, StoryFn} from '@storybook/react';

export default {
    title: 'Button',
    component: Button
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const ButtonTest = Template.bind({});
ButtonTest.args = {
    text: 'click me'
};

export const ButtonTest2 = Template.bind({});
ButtonTest2.args = {
    text: 'click me2'
};