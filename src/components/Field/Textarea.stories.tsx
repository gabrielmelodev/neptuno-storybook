import { Meta, Story } from "@storybook/react";
import { TextFieldProps } from "../types";
import { Textarea } from "./Textarea";
import '../Box/Box';
import React from "react";
import { Box } from "../Box/Box";

export default {
    title: 'Form/Textarea',
    component: Textarea,
    argTypes: {
      placeholder: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
      error: { control: { type: 'boolean' } },
    },
    args: {
      placeholder: 'Placeholder',
      disabled: false,
      error: false,
    },
  } as Meta;
  

  const Template: Story<TextFieldProps> = (args) => (
    <Box css={{ width: '100%', maxWidth: '300px'}}>
      <Textarea {...args}/>
    </Box>
  );
  
  export const Base = Template.bind({});
  Base.args = {};
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    disabled: true,
  };
  
  export const WithError = Template.bind({});
  WithError.args = {
    error: true,
  }