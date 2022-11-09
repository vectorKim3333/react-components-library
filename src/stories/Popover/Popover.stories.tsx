import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover } from "./Popover";
import { Button } from "../Button/Button";

export default {
  title: "Example/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Pop = Template.bind({});
Pop.args = {
  children: <Button label="click me" />,
};
