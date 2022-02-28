import { css, theme } from '@netuno-ui/web';

const { colors } = theme;

export const Icon__Button = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: 0,
  backgroundColor: '$$backgroundColor',
  color: '$$color',
  border: '1px solid transparent',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'background 0.2s, box-shadow 0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '$medium',
  },

  '&:hover:not(:disabled)': {
    background: '$$hoverColor',
  },

  '&:focus-visible': {
    outline: 0,
    boxShadow:
      '0 0 0 4px $colors$color-background, 0 0 0 6px rgba(255, 255, 255, 0.4)',
  },

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$10',
        height: '$10',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
    },
    variant: {
      solid: {
        $$backgroundColor: colors['seaclax-mid'],
        $$color: colors.white,
        $$hoverColor: colors['seaclax-light'],
      },
      soft: {
        $$backgroundColor: colors['shape-secondary'],
        $$color: colors['text-title'],
        $$hoverColor: colors['shape-tertiary'],
      },
      ghost: {
        $$backgroundColor: 'transparent',
        $$color: colors['text-title'],
        $$hoverColor: colors['shape-secondary'],
      },
    },
    outlined: {
      true: {
        background: 'none',
        borderColor: '$$backgroundColor',
      },
    },
    full: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
    loading: {
      true: {
        '> *:first-child': {
          visibility: 'hidden',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});

export const IconButton__Loading = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
