import Profile from "./Profile";
import {Meta, StoryFn} from "@storybook/react";
import {ProfileProps} from "./Profile.type";

export default {
    title: 'Profile',
    component: Profile
} as Meta<typeof Profile>

const Template: (args: ProfileProps) => JSX.Element = (args: ProfileProps) => <Profile {...args} />

export const ProfileTest = Template.bind({});
ProfileTest.args = {
    corners: 'lg'
}

export const ProfileTest2 = Template.bind({});
ProfileTest2.args = {
    corners: 'sm'
}

export const ProfileTest3 = Template.bind({});
ProfileTest3.args = {
    corners: 'md'
}
