import { ComponentStory } from "@storybook/react";
import Icons from "./Icons";
import Nature from "../../../../public/images/nature.svg";
import Add from "../../../../public/images/add.svg";
import Search from "../../../../public/images/search.svg";
import Cas from "../../../../public/images/career and success.svg";
import Check from "../../../../public/images/check.svg";
import ComSkills from "../../../../public/images/communication skills.svg";
import CorpCul from "../../../../public/images/corporate culture.svg";
import Down from "../../../../public/images/down arrow.svg";
import Up from "../../../../public/images/up arrow.svg";
import Alarm from "../../../../public/images/Vectoralarm.svg";
import Economics from "../../../../public/images/Vectoreconomics.svg";
import Edit from "../../../../public/images/Vectoredit.svg";
import Motivation from "../../../../public/images/Vectormotivationandinspiration.svg";
import Politics from "../../../../public/images/Vectorpolitics.svg";
import ReadAgain from "../../../../public/images/Vectorreadagain.svg";
import Remove2 from "../../../../public/images/Vectorremove2.svg";
import Relation from "../../../../public/images/Vectorsexandrelationship.svg";
import Time from "../../../../public/images/Vectortime.svg";
import Unchecked from "../../../../public/images/Vectorunchecked.svg";
import Upload from "../../../../public/images/Vectorupload.svg";


export default{
    title: "Atoms/Icons",
    component: Icons
}

const Template:ComponentStory<typeof Icons> = args => (<Icons {...args}/>);

export const nature = Template.bind({});
nature.args={
    source: Nature
}

export const add = Template.bind({});
add.args={
    source: Add
}

export const career = Template.bind({});
career.args={
    source: Cas
}

export const check = Template.bind({});
check.args={
    source: Check
}

export const communication = Template.bind({});
communication.args={
    source: ComSkills
}

export const corporate = Template.bind({});
corporate.args={
    source: CorpCul
}

export const down = Template.bind({});
down.args={
    source: Down
}

export const search = Template.bind({});
search.args={
    source: Search
}

export const up = Template.bind({});
up.args={
    source: Up
}

export const alarm = Template.bind({});
alarm.args={
    source: Alarm
}

export const economics = Template.bind({});
economics.args={
    source: Economics
}

export const edit = Template.bind({});
edit.args={
    source: Edit
}

export const motivation = Template.bind({});
motivation.args={
    source: Motivation
}

export const politics = Template.bind({});
politics.args={
    source: Politics
}

export const readagain = Template.bind({});
readagain.args={
    source: ReadAgain
}

export const remove2 = Template.bind({});
remove2.args={
    source: Remove2
}

export const relation = Template.bind({});
relation.args={
    source: Relation
}

export const time = Template.bind({});
time.args={
    source: Time
}

export const unchecked = Template.bind({});
unchecked.args={
    source: Unchecked
}

export const upload = Template.bind({});
upload.args={
    source: Upload
}