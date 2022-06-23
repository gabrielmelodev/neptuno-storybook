import {
  Container as ContainerCSS,
  Field as TextFieldCSS,
  Icon as IconCSS
} from './field-styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from 'react';
import { TextFieldProps } from '../types';

export const StyledContainer = styled('div', ContainerCSS);
export const StyledField = styled('input', TextFieldCSS);
export const StyledIcon = styled('div', IconCSS);

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