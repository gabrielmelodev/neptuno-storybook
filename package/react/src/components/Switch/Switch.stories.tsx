import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Label',
    disabled: false,
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
