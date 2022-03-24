import { css } from "@stitches/react";

export const DropdownContent = css({
  background: '$grey-700',
  borderRadius: '$sm',
  color: '$text-title',
  overflow: 'hidden',
});

export const DropdownItem = css({
  padding: '$3 $4',
  minWidth: 140,

  '&:focus': {
    outline: 0,
    background: '$grey-600',
  },

  '& + &': {
    borderTopWidth: 1,
    borderTopColor: '$grey-600',
    borderTopStyle: 'solid',
  },
});
