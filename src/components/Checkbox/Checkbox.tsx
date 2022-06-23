import React from 'react';
import {
  StyledCheckbox as CheckboxCSS,
  StyledIndicator as IndicatorCSS
} from './checkbox-styles';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '@stitches/react';

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, IndicatorCSS);
const StyledCheckbox = styled(CheckboxPrimitive.Root, CheckboxCSS);
export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;


export const IoCheckbox = ({children, ...props}: CheckboxProps) => {
  return <StyledCheckbox {...props}>{children}</StyledCheckbox>;
};


export const CheckboxIndicator = StyledCheckboxIndicator;
CheckboxIndicator.displayName = 'CheckboxIndicator';


IoCheckbox.displayName = 'Checkbox';
