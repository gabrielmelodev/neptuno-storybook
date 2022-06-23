import { Story, Meta } from '@storybook/react';
import React from 'react';
import { TabsProps } from '../types';


import { StyledTabs, StyledTabs as TabsComponent, StyledTabsList, StyledTabsTrigger } from './Tabs';

export default {
  title: 'Data/Tabs',
  component: TabsComponent,

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

export const Tabs: Story<TabsProps> = (args) => (
  <StyledTabs  {...args}>
      <StyledTabsList aria-label="Manage your account">
      <StyledTabsTrigger value="tab1">Account</StyledTabsTrigger>
        <StyledTabsTrigger value="tab2">Password</StyledTabsTrigger>
      </StyledTabsList>
  </StyledTabs>
);
