import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from "./Button";
import { IoEyeOff, IoLockClosed, IoPerson, } from 'react-icons/io5';

const iconArgType = {
  options: ['noIcon', 'IoPerson', 'IoLockClosed', 'IoEyeOff'],
  mapping: {
    noIcon: null,
    IoPerson: <IoPerson size="16" />,
    IoLockClosed: <IoLockClosed size="16" />,
    IoEyeOff: <IoEyeOff size="16" />
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No ICON',
    }
  }
};

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    css: { table: { disable: true } },
    children: { control: { type: 'text' } },
    variant: {
      options: ['solid', 'soft', 'ghost', 'danger', 'link'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
    full: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
  args: {
    childen: 'LABEL',
    variant: 'solid',
    size: 'md',
    disabled: false,
    outlined: false,
    full: false,
    loading: false,
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Solid = Template.bind({});

export const Soft = Template.bind({});
Soft.args = { variant: 'soft' };

export const Ghost = Template.bind({});
Ghost.args = { variant: 'ghost' };

export const Link = Template.bind({});
Link.args = { variant: 'link' };

export const Danger = Template.bind({});
Danger.args = { variant: 'danger' };

export const Full = Template.bind({});
Full.args = { full: true };

export const Loading = Template.bind({});
Loading.args = { loading: true };



