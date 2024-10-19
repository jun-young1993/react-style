import Profile from "./Profile";
import {Meta, StoryFn} from "@storybook/react";

export default {
    title: 'Profile',
    component: Profile
} as Meta<typeof Profile>

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />

export const ProfileTemplate = Template.bind({});


ProfileTemplate.args = {
    radius: 'full',
    size: "30px",
    src: "https://avatars.githubusercontent.com/u/102360897?v=4"
}

