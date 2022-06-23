import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from "@neptuno-ui/web";
import { Avatar as AvatarComponents } from './Avatar';
import { AvatarProps } from '../types';

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
    onLoadingStatusChange: {
      options: ['idle', 'loading', 'loaded',  'error'],
    },
    borderColor: {
      options: colors,
      control: { type: 'select'},
    }
  },
  args: {
    src: 'https://ui-avatars.com/api/?name=Gabriel+Melo&background=0466C8&color=fff',
    size: 'md',
    delayMs: '600',
    label: '',
  }
} as Meta;

const Template: Story<AvatarProps> = (args) => <AvatarComponents {...args} />;

export const Default = Template.bind({});

