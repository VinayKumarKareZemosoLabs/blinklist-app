import { ComponentStory } from "@storybook/react";
import CoverImage from "./coverimage";

import ci2 from "../../../../public/images/cover_image/2.svg";
import ci3 from "../../../../public/images/cover_image/3.svg";
import ci4 from "../../../../public/images/cover_image/4.svg";
import ci5 from "../../../../public/images/cover_image/5.svg";
import ci6 from "../../../../public/images/cover_image/6.svg";
import ci7 from "../../../../public/images/cover_image/7.svg";
import ci8 from "../../../../public/images/cover_image/8.svg";
import ci9 from "../../../../public/images/cover_image/9.svg";
import ci10 from "../../../../public/images/cover_image/10.svg";
import ci11 from "../../../../public/images/cover_image/11.svg";

export default{
    title: "Atoms/cover-image",
    component: CoverImage
}

const Template:ComponentStory<typeof CoverImage> = args => (<CoverImage {...args}/>);



export const coverImage2 = Template.bind({});
coverImage2.args={
    source: ci2
}

export const coverImage3 = Template.bind({});
coverImage3.args={
    source: ci3
}

export const coverImage4 = Template.bind({});
coverImage4.args={
    source: ci4
}
export const coverImage5 = Template.bind({});
coverImage5.args={
    source: ci5
}
export const coverImage6 = Template.bind({});
coverImage6.args={
    source: ci6
}
export const coverImage7 = Template.bind({});
coverImage7.args={
    source: ci7
}
export const coverImage8 = Template.bind({});
coverImage8.args={
    source: ci8
}
export const coverImage9 = Template.bind({});
coverImage9.args={
    source: ci9
}
export const coverImage10 = Template.bind({});
coverImage10.args={
    source: ci10
}
export const coverImage11 = Template.bind({});
coverImage11.args={
    source: ci11
}
