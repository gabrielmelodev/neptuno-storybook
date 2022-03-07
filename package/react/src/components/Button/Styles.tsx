import { theme, css } from '@neptuno-ui/web';

const { colors } = theme;

export const ButtonLabel = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> * + *': {
    marginLeft: '$3',
  },
});

export const Button = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '$12',
  backgroundColor: '$$backgroundColor',
  color: '$$color',
  border: '1px solid transparent',
  borderRadius: '$xs',
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
        height: '$8',
        padding: '0 $4',
        fontSize: '$xs',
      },
      md: {
        height: '$10',
        padding: '0 $6',
      },
      lg: {
        height: '$12',
        padding: '0 $8',
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
      danger: {
        $$backgroundColor: colors['shape-secondary'],
        $$color: colors['danger-light'],
        $$hoverColor: colors['shape-tertiary'],
      },

      link: {
        backgroundColor: 'transparent',
        color: colors['seaclax-light'],
        $$hoverColor: 'none',
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
        [ButtonLabel.selector]: {
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

export const ButtonLoading = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});