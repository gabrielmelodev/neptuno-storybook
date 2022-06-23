import { ModalActions as ModalActionsCSS } from './styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from 'react';

const StyledModalActions = styled('div', ModalActionsCSS);

export type ModalActionsProps = React.ComponentProps<typeof StyledModalActions>;

export const ModalActions = forwardRef<
  React.ElementRef<typeof StyledModalActions>,
  ModalActionsProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledModalActions {...props} ref={forwardedRef}>
      {children}
    </StyledModalActions>
  );
});

ModalActions.displayName = 'ModalActions';
