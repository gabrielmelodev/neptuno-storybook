import { DropdownItem as DropdownItemCSS } from './dropdown-styles';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';
import React from 'react';

export * from './DropdownContent';
export * from './DropdownItemText';

const StyledDropdownItem = styled(DropdownPrimitive.Item, DropdownItemCSS);
export type DropdownProps = React.ComponentProps<typeof DropdownPrimitive.Root>;


export const Dropdown = ({children, ...props}: DropdownProps) => {
  return <DropdownPrimitive.Root {...props}>{children}</DropdownPrimitive.Root>
};

export const DropdownTrigger = DropdownPrimitive.Trigger;
DropdownTrigger.displayName = 'DropdownTrigger';

export const DropdownItem = StyledDropdownItem;
DropdownItem.displayName = 'DropdownItem';