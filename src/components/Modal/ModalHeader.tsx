import { ModalHeader as ModalHeaderCSS } from './styles';
import { styled } from '@stitches/react';
import { DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import React, { forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';

import { Heading, IconButton } from '../..';

const StyledModalHeader = styled('header', ModalHeaderCSS);

export type ModalHeaderProps = React.ComponentProps<
  typeof StyledModalHeader
> & {
  closeButton?: boolean;
};

export const ModalHeader = forwardRef<
  React.ElementRef<typeof StyledModalHeader>,
  ModalHeaderProps
>(({ children, closeButton = true, ...props }, forwardedRef) => {
  const { size } = props;

  return (
    <StyledModalHeader {...props} ref={forwardedRef}>
      <DialogTitle asChild>
        <Heading size={size}>{children}</Heading>
      </DialogTitle>

      {closeButton && (
        <DialogClose asChild>
          <IconButton size="sm" icon={<IoClose size={16} />} variant="ghost" />
        </DialogClose>
      )}
    </StyledModalHeader>
  );
});

ModalHeader.displayName = 'ModalHeader';
