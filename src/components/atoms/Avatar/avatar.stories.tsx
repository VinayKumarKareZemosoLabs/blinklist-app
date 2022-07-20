import {ComponentStory} from "@storybook/react";
import React from "react";
import Avatars from "./avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatars,
};

const Template: ComponentStory<typeof Avatars> = (args) => (
  <Avatars {...args} />
);

export const A = Template.bind({});
A.args = {
  chars: "A"
};

