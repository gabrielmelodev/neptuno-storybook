import {
    Shimmer as ShimmerCSS,
    ShimmerContent as ShimmerContentCSS,
} from './shimmer-styles'
import { styled } from '@stitches/react';
import React from 'react';
import { ShimmerProps } from '../types';

const StyledShimmer = styled('span', ShimmerCSS);
const ShimmerContent = styled('div', ShimmerContentCSS);

export const Shimmer = ({
  type = 'line',
  lines = 1,
  width,
  height,
  ...rest
}: ShimmerProps) => {

  const arr = Array.from(Array(lines), (_, i) => i);

  if (lines === 1 || type !== 'line') {
    return (
      <StyledShimmer
        key={`${type}-shimmer`}
        css={{
          width: `${width}px;`,
          height: `${height}px;`,
        }}
        type={type}
        {...rest}
      />
    );
  }

  return (
    <ShimmerContent>
      {arr.map((_, i) => {
        return (
          <StyledShimmer
            key={`${type}-shimmer-${i}`}
            css={{
              width: `${width}px;`,
              height: `${height}px;`,
            }}
            type={type}
            {...rest}
          />
        );
      })}
    </ShimmerContent>
  );
};
