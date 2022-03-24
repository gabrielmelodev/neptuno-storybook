import { CardHeader as CardHeaderCSS } from './card-styles';
import { styled } from "@stitches/react";
import React from 'react';

const StyledCardHeader = styled('header', CardHeaderCSS);

export type CardHeaderProps = React.ComponentProps<typeof StyledCardHeader> & {
  rightContent?: React.ReactNode;
};

export const CardHeader = ({ children, rightContent }: CardHeaderProps) => {
  return (
    <StyledCardHeader>
      {children}

      {rightContent && rightContent}
    </StyledCardHeader>
  );
};

CardHeader.displayName = 'CardHeader';