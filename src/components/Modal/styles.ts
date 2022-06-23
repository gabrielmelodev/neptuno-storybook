import { css, keyframes } from '@stitches/react';
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
  '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
});

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
  '100%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
});

export const ModalOverlay = css({
  backgroundColor: 'rgba(0,0,0,.9)',
  position: 'fixed',
  inset: 0,
  zIndex: '$overlay',

  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s ease-in`,
  },
  '&[data-state=closed]': {
    animation: `${overlayHide} 0.3s ease-in`,
  },
});
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

export const ModalWrapper = css(styledScrollbar, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(-50%, -50%, 0)',
  width: '90vw',
  maxWidth: '$$maxWidth',
  background: '$shape-primary',
  maxHeight: '90vh',
  overflowY: 'auto',
  zIndex: '$modal',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${contentShow} 0.3s ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 0.2s ease-out`,
  },

  boxShadow: `
    0px 1.8px 2.6px rgba(0, 0, 0, 0.038),
    0px 5px 7.1px rgba(0, 0, 0, 0.057),
    0px 12.1px 17.2px rgba(0, 0, 0, 0.077),
    0px 40px 57px rgba(0, 0, 0, 0.12)
  `,
});

export const ModalContent = css({
  padding: '$8',

  '@mobile': {
    padding: '$5',
  },
});

export const ModalActions = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  mx: '2rem',
  padding: '1rem',

  '@mobile': {
    flexDirection: 'column-reverse',
    mx: '1.25rem',
    padding: '1.25rem',

    '> *': {
      width: '100%',
    },
  },

  variants: {
    divider: {
      true: {
        borderTop: '1px solid $grey-600',
      },
      false: {
        paddingTop: 0,
      },
    },
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },

  defaultVariants: {
    divider: true,
    align: 'right',
  },
});

export const ModalHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundImage: 'linear-gradient(90deg, $grey-700 0%, transparent 100%)',
  padding: '$8',

  '@mobile': {
    padding: '$5',
  },

  variants: {
    size: {
      sm: {
        padding: '$4',
      },
      md: {
        padding: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});


