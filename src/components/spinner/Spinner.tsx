import { Spinner as SpinnerCSS } from '@neptuno-ui/styles';
import { styled } from '@stitches/react';
import React, { forwardRef } from "react";
import { getThemeColor, ThemeColor } from '../../helpers/color';

const StyledSpinner = styled('span', SpinnerCSS);

export type SpinnerProps = React.ComponentProps<typeof StyledSpinner> & {
  baseColor?: ThemeColor;
};


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