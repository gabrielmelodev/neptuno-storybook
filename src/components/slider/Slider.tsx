import {
    StyledSlider as SliderCSS,
    StyledTrack as SliderTrackCSS,
    StyledRange as SliderRangeCSS,
    StyledThumb as SliderThumbCSS,
  } from './slider-styles';
import { styled } from "@stitches/react";
import React, { forwardRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { SliderProps } from '../types';

export const StyledSlider = styled(SliderPrimitive.Root, SliderCSS);
export const StyledTrack = styled(SliderPrimitive.Track, SliderTrackCSS);
export const StyledRange = styled(SliderPrimitive.Range, SliderRangeCSS);
export const StyledSThumb = styled(SliderPrimitive.Thumb, SliderThumbCSS);

export const Slider = forwardRef<
  React.ElementRef<typeof StyledSlider>,
  SliderProps
>(
  (
    { value: valueProps, defaultValue: defaultValueProps, ...rest },
    forwardedRef
  ) => {
    const value = valueProps ? [valueProps] : undefined;
    const defaultValue = defaultValueProps ? [defaultValueProps] : undefined;

    return (
      <StyledSlider
        ref={forwardedRef}
        value={value}
        defaultValue={defaultValue}
        {...rest}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledSThumb />
      </StyledSlider>
    );
  }
);

Slider.displayName = 'Slider';