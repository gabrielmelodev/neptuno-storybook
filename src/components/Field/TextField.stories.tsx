import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from "./Field";
import { IoPerson, IoLockClosed, IoEyeOff } from 'react-icons/io5';
import React from "react";
import { Box } from '../Box/Box';



const iconArgType = {
  options: ['noIcon', 'IoPerson', 'IoLockClosed', 'IoEyeOff'],
  mapping: {
    noIcon: null,
    IoPerson: <IoPerson size="16" />,
    IoLockClosed: <IoLockClosed size="16" />,
    IoEyeOff: <IoEyeOff size="16" />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No icon',
    },
  },
};

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    error: false,
  },
} as Meta;


const Template: Story<TextFieldProps> = (args) => (
  <Box css={{ width: '100%', maxWidth: '300px'}}>
    <TextField {...args}/>
  </Box>
);

export const Base = Template.bind({});
Base.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = { 
  leftIcon: iconArgType.mapping.IoLockClosed,
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
}