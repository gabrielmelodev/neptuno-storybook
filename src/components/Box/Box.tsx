import { styled } from '@stitches/react'
import React, { forwardRef } from 'react';

const StyledBox = styled('div', {});

export type BoxProps = React.ComponentProps<typeof StyledBox> & {
  as?: React.ElementType;
};

export const Box = forwardRef<React.ElementRef<typeof StyledBox>, BoxProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledBox {...props} ref={forwardedRef}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = 'Box';