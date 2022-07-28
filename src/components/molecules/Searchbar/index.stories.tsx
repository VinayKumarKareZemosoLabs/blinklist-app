import { ComponentStory } from "@storybook/react";
import SearchBar from ".";

export default{
    title:'Molecules/SearchBar',
    component: SearchBar
}

const Template: ComponentStory<typeof SearchBar> = (args) =><SearchBar {...args}></SearchBar>

export const search = Template.bind({});
search.args={
    palceholder:"Search by title or author"
}