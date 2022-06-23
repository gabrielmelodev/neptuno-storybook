import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Box } from '../Box/Box';
import { SliderProps } from '../types';

import { Slider as SliderComponent} from './Slider';
export default {
  title: 'Form/Slider',
  component: SliderComponent,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    defaultValue: { control: { type: 'number' } },
  },
  args: {
    disabled: false,
    defaultValue: 50,
    max: 100,
  },
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Box css={{ width: '100%', maxWidth: '300px' }}>
    <SliderComponent {...args} />
  </Box>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
