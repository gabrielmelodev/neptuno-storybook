import { css } from "@stitches/react";

export const SwitchContainer = css({
    display: 'flex',
    alignItems: 'center',
  
    variants: {
      disabled: {
        true: {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },
    },
  });
  
  export const Switch = css({
    all: 'unset',
    width: 72,
    height: 24,
    backgroundColor: '$grey-700',
    borderRadius: '$full',
    position: 'relative',
  
    '&[data-state="checked"]': {
      backgroundColor: '$seaclax-low',
    },
  
    '&:hover': {
      cursor: 'pointer',
    },
  });

  export const SwitchTumb = css({
    display: 'block',
    width: 40,
    height: 24,
    backgroundColor: '$grey-100',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(0px)',
    willChange: 'transform',
  
    '&[data-state="checked"]': {
      transform: 'translateX(33px)',
      backgroundColor: '$seaclax-light',
    },
  });

  export const SwitchLabel = css({
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$md',
    lineHeight: '$base',
  
    color: '$text-base',
  
    marginRight: '$4',
  });
  