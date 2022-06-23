import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TextProps } from '../types';
import { Text as TextLabel } from './Text'

export default {
  title: 'Typography/Text',
  component: TextLabel,
  argTypes: {
    css: { table: { disable: true } },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.',
    size: 'md',
  },
} as Meta;


export const Text: Story<TextProps> = (args) => (
  <TextLabel css={{ maxWidth: 300}} {...args} />
);