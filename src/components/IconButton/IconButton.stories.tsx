import React from "react";
import { IconButton, IconButtonProps } from "./IconButton";
import { IoPerson, IoLockClosed, IoAdd } from 'react-icons/io5';
import { Meta, Story } from "@storybook/react";

const iconArgType = {
  options: ['IoAdd', 'IoPerson', 'IoLockClosed'],
  mapping: {
    IoAdd: <IoAdd size="22" />,
    IoPerson: <IoPerson size="16" />,
    IoLockClosed: <IoLockClosed size="16" />,
  },
  control: { type: 'select' },
};

export default {
  title: 'Form/IconButton',
  component: IconButton,
  argTypes: {
    css: { table: { disable: true } },
    icon: iconArgType,
    variant: {
      options: ['solid', 'soft', 'ghost'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
    full: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  args: {
    icon: 'IoAdd',
    variant: 'solid',
    size: 'md',
    disabled: false,
    outlined: false,
    full: false,
    loading: false,
  },
  
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Solid = Template.bind({});

export const Soft = Template.bind({});
Soft.args = { variant: 'soft' };

export const Ghost = Template.bind({});
Ghost.args = { variant: 'ghost' };

export const Outlined = Template.bind({});
Outlined.args = { outlined: true };

export const Full = Template.bind({});
Full.args = { full: true };

export const Loading = Template.bind({});
Loading.args = { loading: true };