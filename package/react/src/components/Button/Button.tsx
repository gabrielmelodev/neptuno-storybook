import {
  Button as ButtonCSS,
  ButtonLabel as ButtonLabelCSS,
  ButtonLoading as ButtonLoadingCSS
} from './button-styles';
import { styled } from "@stitches/react";
import React, { forwardRef } from "react";
import type * as Stitches from '@stitches/react';

import { Spinner } from '../Spinner/Spinner';


const StyledButton = styled('button', ButtonCSS);
const ButtonLabel = styled('span', ButtonLabelCSS);
const ButtonLoading = styled('span', ButtonLoadingCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loading?: boolean;
  css?: Stitches.CSS;
}

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

