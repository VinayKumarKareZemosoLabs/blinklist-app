import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CardsList from ".";

export default{
    title: "Organisms/CardsList",
    component: CardsList
}

const Template : ComponentStory<typeof CardsList> = (args) => ( 
<BrowserRouter>
<CardsList {...args}/> 
</BrowserRouter>);

export const zeroProgress = Template.bind({});
zeroProgress.args={
    librarybu:true,
    checkComplete:0
};

export const thirtyOneProgress = Template.bind({});
thirtyOneProgress.args={
    finished:true,
    checkComplete:31
};

export const hundredProgress = Template.bind({});
hundredProgress.args={
    readAgain:true,
    checkComplete:100
};