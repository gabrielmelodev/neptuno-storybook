import { useArgs } from '@storybook/client-api';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button } from '../..'
import {
  Dropdown as DropdownComponent,
  DropdownTrigger,
  DropdownItem,
  DropdownContent,
  DropdownItemText
} from './Dropdown';

export default {
  title: 'Popover/Dropdown',
  component: DropdownComponent,
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
  },
} as Meta;


const Template: Story = (args) => {
  const [, updateArgs] = useArgs();

  function handleSelectedItem(item: string) {
    alert(`Selected ${item}`);
  }

  return (
    <DropdownComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <DropdownTrigger asChild>
        <Button>OPEN MENU</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem asChild onSelect={() => handleSelectedItem('Item 01')}>
          <DropdownItemText>Item 01</DropdownItemText>
        </DropdownItem>
        <DropdownItem onSelect={() => handleSelectedItem('Item 02')}>
          <DropdownItemText>Item 02</DropdownItemText>
        </DropdownItem>
        <DropdownItem onSelect={() => handleSelectedItem('Item 03')}>
          <DropdownItemText>Item 03</DropdownItemText>
        </DropdownItem>
      </DropdownContent>
    </DropdownComponent>
  )
}

export const Dropdown = Template.bind({});