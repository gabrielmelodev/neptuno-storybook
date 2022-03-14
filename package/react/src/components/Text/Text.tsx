import { Text as TextCSS } from './text-styles';
import { styled } from "@stitches/react";
import { forwardRef } from "react";
import React from 'react';

const StyledText = styled('p', TextCSS);

export type TextProps = React.ComponentProps<typeof StyledText> & {
  as?: React.ElementType;
};

export const Text = forwardRef<React.ElementRef<typeof StyledText>, TextProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyledText {...props} ref={forwardRef}>
        {children}
      </StyledText>
    );
  }
);
Text.displayName = 'Text';