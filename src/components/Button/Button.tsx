import {
  Button as ButtonCSS,
  ButtonLabel as ButtonLabelCSS,
  ButtonLoading as ButtonLoadingCSS
} from './button-styles';
import { styled } from "@stitches/react";
import React, { forwardRef } from "react";
import { Spinner } from '../spinner/Spinner';
import { ButtonProps } from '../types';


export const StyledButton = styled('button', ButtonCSS);
export const ButtonLabel = styled('span', ButtonLabelCSS);
export const ButtonLoading = styled('span', ButtonLoadingCSS);


export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(
  (
    { children, leftIcon, rightIcon, css, loading, disabled, ...props },
    forwardRef
  ) => {
    return (
      <StyledButton
        ref={forwardRef}
        disabled={disabled}
        loading={loading}
        {...props}>
        <ButtonLabel>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonLabel>
        {
          loading && (
            <ButtonLoading>
              <Spinner />
            </ButtonLoading>
          )
        }
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

