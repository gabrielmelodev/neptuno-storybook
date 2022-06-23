import { Text as TextCSS } from './text-styles';
import { styled } from "@stitches/react";
import { forwardRef } from "react";
import React from 'react';
import { TextProps } from '../types';

export const StyledText = styled('p', TextCSS);


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