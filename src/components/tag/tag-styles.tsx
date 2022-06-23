import { css } from "@stitches/react";

export const Tag = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  border: '1px solid transparent',
  borderRadius: '$full',
  transition: 'background .2s, color .2s',
  cursor: 'default',

  variants: {
    variant: {
      active: {
        backgroundColor: '$grey-600',
        '&:hover': {
          backgroundColor: '$grey-500',
        },
      },
      inactive: {
        color: '$grey-200',
        backgroundColor: 'transparent',
        borderColor: '$grey-600',
        '&:hover': {
          color: '$grey-100',
        },
      },
      deletable: {
        backgroundColor: '$grey-600',
      },
    },

    size: {
      sm: {
        height: '1.5rem',
        padding: '0 $3',
        fontSize: '$xxs',
      },
      md: {
        height: '1.75rem',
        padding: '0 $3',
        fontSize: '$xs',
      },
      lg: {
        height: '2rem',
        padding: '0 $4',
        fontSize: '$sm',
      },
    },
  },

  defaultVariants: {
    variant: 'active',
    size: 'md',
  },
});

export const TagDeleteButton = css({
  position: 'relative',
  background: '$grey-800',
  borderRadius: '$full',
  cursor: 'pointer',
  '&:before, &:after': {
    content: '',
    position: 'absolute',
    height: '1px',
    backgroundColor: '$grey-100',
    transform: 'rotate(45deg)',
    transition: 'background .2s',
  },
  '&:after': { transform: 'rotate(-45deg)' },
  '&:hover': {
    '&:before, &:after': { backgroundColor: '$grey-300' },
  },

  variants: {
    size: {
      sm: {
        width: '13px',
        height: '13px',
        marginLeft: '6px',
        marginRight: '-8px',
        '&:before, &:after': {
          width: '7px',
          top: '6px',
          left: '2.5px',
        },
      },
      md: {
        width: '15px',
        height: '15px',
        marginLeft: '6.5px',
        marginRight: '-7.5px',
        '&:before, &:after': {
          width: '7px',
          top: '7px',
          left: '3.5px',
        },
      },
      lg: {
        width: '17px',
        height: '17px',
        marginLeft: '7px',
        marginRight: '-8px',
        '&:before, &:after': {
          width: '9px',
          top: '8px',
          left: '4.5px',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
