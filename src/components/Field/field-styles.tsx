import { css } from '@stitches/react';

const ICON_WIDTH = '3rem';


export const Icon = css({
  position: 'absolute',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: ICON_WIDTH,
  height: '100%',
  color: '$placeholder',
  transition: 'color .2s',

  variants: {
    position: {
      left: {
        left: '2px',
      },
      right: {
        right: '2px',
      }
    }
  }
});

export const Container = css({
  position: 'relative',
  display: 'flex',
  width: '100%',
  transition: 'opacity .2s',
 
  '&:focus-within': {
    input: {
      borderColor: '$seaclax-mid',
    },
    [Icon.selector]: {
      color: '$seaclax-mid',
    },
  },


  variants: {
    disabled: {
      true: {
        opacity: '50%',
      },
    },
    error: {
      true: {
        input: {
          borderColor: '$danger-base',
        },
        [Icon.selector]: {
          color: '$danger-base',
        },
      },
    },
  },
  
});

export const Field = css({
  boxSizing: 'border-box',
  appearance: 'none',
  outline: 0,
  width: '100%',
  height: 45,
  padding: '0 $4',
  fontFamily: '$default',
  fontSize: '$md',
  color: '$text-title',
  backgroundColor: '$grey-900',
  border: '2px solid transparent',
  borderRadius: '$sm',
  transition: 'border-color 0.2s',

  '&::placeholder': {
    color: '$placeholder',
  },

  variants: {
    hasLeftIcon: {
      true: {
        paddingLeft: ICON_WIDTH,
      },
    },
    hasRightIcon: {
      true: {
        paddingRight: ICON_WIDTH,
      },
    },
  },
})

