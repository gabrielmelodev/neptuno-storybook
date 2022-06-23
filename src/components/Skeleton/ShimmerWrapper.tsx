import { ShimmerWrapper as ShimmerWrapperCSS } from "./shimmer-styles";
import { styled } from "@stitches/react";
import { ShimmerWrapperProps } from "../types";
import React from 'react';

export const StyledShimmerW = styled('div', ShimmerWrapperCSS);

export const ShimmerW = ({
    screen,
    children,
    ...rest
  }: ShimmerWrapperProps) => {
    return (
      <StyledShimmerW screen={screen} {...rest}>
        {children}
      </StyledShimmerW>
    );
  };