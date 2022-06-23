import { DropdownContent as DropdownContentCSS } from './dropdown-styles';
import { styled } from '@stitches/react';
import { Content as ContentPrimitive } from '@radix-ui/react-dropdown-menu';
import React from 'react';
const StyledDropdownContent = styled(ContentPrimitive, DropdownContentCSS);

export type DropdownContentProps = React.ComponentProps<
  typeof ContentPrimitive
>;

export const DropdownContent = ({
  sideOffset = 8,
  side = 'right',
  align = 'center',
  ...props
}: DropdownContentProps) => {
  return (
    <StyledDropdownContent
    sideOffset={sideOffset}
    side={side}
    align={align}
    {...props}
    />
  )
}

DropdownContent.displayName = 'DropdownContent';
