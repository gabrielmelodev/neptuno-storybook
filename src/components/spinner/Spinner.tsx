import { Spinner as SpinnerCSS } from './spinner-styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from "react";
import { getThemeColor } from '../../helpers/color';
import { SpinnerProps } from '../types';

export const StyledSpinner = styled('span', SpinnerCSS);

export const Spinner = forwardRef<React.ElementRef<typeof StyledSpinner>,
  SpinnerProps
>(({ baseColor, css, ...props}, forwardedRef) => {
  return (
    <StyledSpinner
       {...props}
       css={{
          ...(baseColor && { $$baseColor: getThemeColor(baseColor)}),
          ...css,
       }}
       ref={forwardedRef}
    />
  )
})

Spinner.displayName = 'Spinner';