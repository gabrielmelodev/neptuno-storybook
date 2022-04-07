import {
  IconButton as IconButtonCSS,
  IconButtonLoading as IconButtonLoadingCSS,
} from './IconButton-styles';

import { styled } from "@stitches/react"
import React, { forwardRef } from "react"
import { Spinner } from '../Spinner/Spinner';
import { IconButtonProps } from '../types';

export const StyledIconButton = styled('button', IconButtonCSS);
export const IconButtonLoading = styled('span', IconButtonLoadingCSS)


export const IconButton = forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  IconButtonProps
>(({ icon, loading, disabled, ...props }, forwardedRef) => {
  return (
    <StyledIconButton
      disabled={disabled}
      loading={loading}
      ref={forwardedRef}
      {...props}
    >
      {icon}
      {loading && (
        <IconButtonLoading>
          <Spinner />
        </IconButtonLoading>
      )}
    </StyledIconButton>
  )
})
