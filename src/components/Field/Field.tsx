import {
  Container as ContainerCSS,
  Field as TextFieldCSS,
  Icon as IconCSS
} from './field-styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from 'react';

const StyledContainer = styled('div', ContainerCSS);
const StyledField = styled('input', TextFieldCSS);
const StyledIcon = styled('div', IconCSS);

export type TextFieldProps = React.ComponentProps<typeof StyledField> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  disabled?: boolean;
  error?: boolean;
}


export const TextField = forwardRef<
  React.ElementRef<typeof StyledField>,
  TextFieldProps
>(({ leftIcon, rightIcon, disabled, error, ...props }, forwardRef) => {
  return (
    <StyledContainer error={error} disabled={disabled}>
      {leftIcon && <StyledIcon position="left">{leftIcon}</StyledIcon>}

      <StyledField
        {...props}
        disabled={disabled}
        hasLeftIcon={!!leftIcon}
        hasRightIcon={!!rightIcon}
        ref={forwardRef}
      />
      {rightIcon && <StyledIcon position="right">{rightIcon}</StyledIcon>}
    </StyledContainer>
  )
})

TextField.displayName = 'TextField';