import { css } from "@stitches/react";


export const styledScrollbar = css({
  '&::-webkit-scrollbar': {
    width: '4px',
    height: '4px',
  },

  '&::-webkit-scrollbar-track': {
    background: '$grey-700',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$grey-500',
  },

  '&::-webkit-scrollbar-corner': {
    background: '$grey-700',
  },

  scrollbarWidth: 'thin',
  scrollbarColor: '$grey-500 $grey-700',
});
