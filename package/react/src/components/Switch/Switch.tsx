import React, { forwardRef } from 'react';
import {
    Switch as SwitchCSS,
    SwitchTumb as SwitchTumbCSS,
    SwitchLabel as SwitchLabelCSS,
    SwitchContainer as SwitchContainerCSS,
} from './switch-styles';
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from '@stitches/react';

const StyledContainer = styled('div', SwitchContainerCSS);
const StyledSwitch = styled(SwitchPrimitive.Root, SwitchCSS);
const StyledThumb = styled(SwitchPrimitive.Thumb, SwitchTumbCSS);
const StyledLabel = styled('label', SwitchLabelCSS);

export type SwitchProps = React.ComponentProps<typeof StyledSwitch> & {
    label?: string;
  };
  

export const Switch = forwardRef<
React.ElementRef<typeof StyledSwitch>,
SwitchProps
>(({ label, disabled, ...props }, forwardedRef) => {
  return(
    <StyledContainer disabled={disabled}>
        {label && <StyledLabel>{label}</StyledLabel>}
    <StyledSwitch ref={forwardedRef} disabled={disabled} {...props}>
      <StyledThumb />
    </StyledSwitch>

    
  </StyledContainer>
  );
});

Switch.displayName = 'Switch';