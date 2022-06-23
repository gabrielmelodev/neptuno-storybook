import {
    Container as ContainerCSS,
    TextareaField as TextareaCSS,
  } from './field-styles';
  import { styled } from '@stitches/react';
  import React, { forwardRef } from 'react';
  import { TextareaProps } from '../types';
  
  export const StyledContainer = styled('div', ContainerCSS);
  export const StyledTextarea = styled('textarea', TextareaCSS);

  export const Textarea = forwardRef<
    React.ElementRef<typeof StyledTextarea>,
    TextareaProps
  >(({  disabled, error, ...props }, forwardRef) => {
    return (
      <StyledContainer error={error} disabled={disabled}>
        <StyledTextarea
          {...props}
          disabled={disabled}
          ref={forwardRef}
        />
      </StyledContainer>
    )
  })
  
  Textarea.displayName = 'Textarea';
  