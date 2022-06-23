import React, { forwardRef } from 'react';
import {
    Switch as SwitchCSS,
    SwitchTumb as SwitchTumbCSS,
    SwitchLabel as SwitchLabelCSS,
    SwitchContainer as SwitchContainerCSS,
} from './switch-styles';
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from '@stitches/react';
import { SwitchProps } from '../types';

export const StyledContaine = styled('div', SwitchContainerCSS);
export const StyledSwitch = styled(SwitchPrimitive.Root, SwitchCSS);
export const StyledThumb = styled(SwitchPrimitive.Thumb, SwitchTumbCSS);
export const StyledLabel = styled('label', SwitchLabelCSS);

export const Switch = forwardRef<
React.ElementRef<typeof StyledSwitch>,
SwitchProps
>(({ label, disabled, ...props }, forwardedRef) => {
  return(
    <StyledContaine disabled={disabled}>
        {label && <StyledLabel>{label}</StyledLabel>}
    <StyledSwitch ref={forwardedRef} disabled={disabled} {...props}>
      <StyledThumb />
    </StyledSwitch>

    
  </StyledContaine>
  );
});

Switch.displayName = 'Switch';