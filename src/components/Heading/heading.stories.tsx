import { Story, Meta } from '@storybook/react';
import React from 'react';
import { HeadingProps } from '../types';

import { Heading as HeadingComponent } from './Heading';

export default {
  title: 'Typography/Heading',
  component: HeadingComponent,

  argTypes: {
    css: { table: { disable: true } },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
    children: { control: { type: 'text' } },
  },

  args: {
    children: 'Neptuno',
    size: 'md',
  },
} as Meta;

export const Heading: Story<HeadingProps> = (args) => (
  <HeadingComponent {...args} />
);
