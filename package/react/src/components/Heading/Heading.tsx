import { Heading as HeadingCSS } from './Heading-styles';
import { styled } from "@stitches/react";
import React,{ forwardRef } from "react";

const StyledHeading = styled('h2', HeadingCSS);

export type HeadingProps = React.ComponentProps<typeof StyledHeading> & {
  as?: React.ElementType;
};

export const Heading = forwardRef<
  React.ElementRef<typeof StyledHeading>,
  HeadingProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledHeading {...props} ref={forwardedRef}>
      {children}
    </StyledHeading>
  );
});

Heading.displayName = 'Heading';
