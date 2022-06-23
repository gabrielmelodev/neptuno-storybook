import {Meta, Story } from '@storybook/react';
import React from 'react';
import { TagProps } from '../types';
import { Tag } from './Tag';

export default {
  title: 'Form/Tag',
  component: Tag,
  argTypes: {
    css: { table: { disable: true } },
    children: { control: { type: 'text' } },
    variant: {
      options: ['active', 'inactive'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'LABEL',
    variant: 'active',
    size: 'md',
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

export const Inactive = Template.bind({});
Inactive.args = { variant: 'inactive'};

export const Deletable = Template.bind({});
Deletable.argTypes = {
  variant: { table: { disable: true }},
  onDelete: { action: 'click'},
}
