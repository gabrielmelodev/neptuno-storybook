import { Story, Meta } from '@storybook/react';
import React from 'react';
import { IoCheckbox, CheckboxIndicator } from './Checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export default {
  title: 'Popover/Checkbox',
  component: IoCheckbox,
} as Meta;


const Template: Story = (args) => {

  return (
    <IoCheckbox {...args}>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </IoCheckbox>
  )
}

export const Checkbox = Template.bind({});