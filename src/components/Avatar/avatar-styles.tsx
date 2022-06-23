import { colors } from '@neptuno-ui/colors';
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
        width: '2rem',
        height: '2rem',
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

export const StyledFallback = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors['grey-700'],
  color: colors['seaclax-dark'],
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});


export const StyledImagem = css({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '$full',
});