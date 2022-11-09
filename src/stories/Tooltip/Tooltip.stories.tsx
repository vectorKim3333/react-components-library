import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ padding: 100 }}>
    <Tooltip {...args} />
  </div>
);

export const BasicTooltip = Template.bind({});
BasicTooltip.args = {
  title: "tooltip",
  children: <Button label="hover here" />,
};
