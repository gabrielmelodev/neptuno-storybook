import {
  ModalOverlay as ModalOverlayCSS,
  ModalWrapper as ModalWrapperCSS,
  ModalContent as ModalContentCSS,
} from './styles';
import { styled } from '@stitches/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { forwardRef } from 'react';

const StyledModalOverlay = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
const StyledModalWrapper = styled(DialogPrimitive.Content, ModalWrapperCSS);
const StyledModalContent = styled('div', ModalContentCSS);

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

export const Modal = ({ children, overlay = true, ...props }: ModalProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      {overlay && <StyledModalOverlay />}
      {children}
    </DialogPrimitive.Root>
  );
};

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  React.ComponentProps<typeof StyledModalWrapper> & {
    width?: string;
    maintainDimensions?: boolean;
  };

export const ModalWrapper = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalWrapperProps
>(
  (
    { children, width = 700, maintainDimensions = false, css, ...props },
    forwardedRef
  ) => {
    return (
      <StyledModalWrapper
        css={{
          ...(width && { $$maxWidth: `${width}px` }),
          ...(!maintainDimensions && {
            [`@media (max-width: ${width}px)`]: {
              width: '100vw',
              minHeight: '100vh',
              borderRadius: 0,
            },
          }),
          ...css,
        }}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </StyledModalWrapper>
    );
  }
);
ModalWrapper.displayName = 'ModalWrapper';

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = 'ModalTrigger';

export const ModalContent = StyledModalContent;
ModalContent.displayName = 'ModalContent';
