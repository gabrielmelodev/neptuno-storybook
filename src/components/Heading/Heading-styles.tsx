import { css } from "@stitches/react";

export const Heading = css({
  color: '$text-title',
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  '* + &': {
    marginTop: '1.25em',
  },

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$6xl' },
      '2xl': { fontSize: '$7xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
