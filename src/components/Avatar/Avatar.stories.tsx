import { Story, Meta } from '@storybook/react';
import { theme } from "@neptuno-ui/web";
import React from 'react';

import { Avatar as AvatarComponents, AvatarProps } from './Avatar';

const colors = Object.entries(theme.colors)
       .filter(([, value]) => !value.value.startsWith('$'))
       .map(([key]) => `$${key}`);

export default {
  title: 'Data/Avatar',
  component: AvatarComponents,
  argTypes: {
    css: { table: { disable: true }},
    src: { control: { type: 'text'}},
    size: { 
      options: ['sm','md','lg','xl'],
      control: { type: 'inline-radio'},
    },
    borderColor: {
      options: colors,
      control: { type: 'select'},
    }
  },
  args: {
    src: 'https://ui-avatars.com/api/?name=Gabriel+Melo&background=0466C8&color=fff',
    size: 'md',
    label: '',
  }
} as Meta;

const Template: Story<AvatarProps> = (args) => <AvatarComponents {...args} />;

export const Default = Template.bind({});

