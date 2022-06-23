import { css } from '@stitches/react';

export const Text = css({
  color: '$text-base',
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  '* + &': {
    marginTop: '.75em',
  },

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
