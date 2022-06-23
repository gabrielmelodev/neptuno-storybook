import { css, keyframes } from '@stitches/react';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' },
});

export const Spinner = css({
  $$baseColor: '$colors$white',
  $$borderWidth: '2px',

  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',

  '&:before, &:after': {
    content: '',
    boxSizing: 'inherit',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '$$borderWidth solid $$baseColor',
    borderRightColor: 'transparent',
    borderRadius: '$full',
    animation: `${rotate} .6s linear infinite`,
  },

  '&:after': {
    borderColor: 'transparent',
    borderRightColor: '$$baseColor',
    opacity: '$medium',
  },

  variants: {
    size: {
      sm: {
        width: '12px',
        height: '12px',
      },
      md: {
        width: '16px',
        height: '16px',
      },
      lg: {
        width: '24px',
        height: '24px',
        $$borderWidth: '3px',
      },
      xl: {
        width: '32px',
        height: '32px',
        $$borderWidth: '3px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
