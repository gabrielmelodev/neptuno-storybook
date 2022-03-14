import { css } from '@stitches/react';

export const Avatar = css({
  $$borderColor: '$colors$grey-100',
  $$borderWidth: '2px',
  $$labelBackground: '$colors$grey-100',
  $$labelColor: '$colors$grey-700',

  position: 'relative',
  display: 'inline-flex',
  borderRadius: '$full',
  border: '$$borderWidth solid $$borderColor',

  img: {
    width: '100%',
    borderRadius: '$full',
  },

  
  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
        padding: '2px',
        span: {
          display: 'none',
        },
      },
      md: {
        width: '3.25rem',
        height: '3.25rem',
        padding: '3px',
      },
      lg: {
        $$borderWidth: '4px',
        width: '7rem',
        height: '7rem',
        padding: '7px',
      },
      xl: {
        $$borderWidth: '4px',
        width: '11.25rem',
        height: '11.25rem',
        padding: '7px',
        span: {
          height: '1.75rem',
          fontSize: '$xs',
        },
      },
    },
  },
        defaultVariants: {
          size: 'md',
        },

});