import { ComponentStory } from "@storybook/react";
import Logo from "./logo";

import LogoIm from "../../../../public/images/logo.svg";

export default{
    title: "Atoms/Logo",
    component: Logo
}

const Template:ComponentStory<typeof Logo> = args => (<Logo {...args}/>);

export const logo = Template.bind({});
logo.args={
    source: LogoIm
}