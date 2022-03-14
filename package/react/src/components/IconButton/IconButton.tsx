import {
  IconButton as IconButtonCSS,
  IconButtonLoading as IconButtonLoadingCSS,
} from './IconButton-styles';

import { styled } from "@stitches/react"
import React, { forwardRef } from "react"
import { Spinner } from '../spinner/Spinner';

const StyledIconButton = styled('button', IconButtonCSS);
const IconButtonLoading = styled('span', IconButtonLoadingCSS)

export type IconButtonProps = React.ComponentProps<typeof StyledIconButton> & {
  icon: React.ReactElement;
  loading?: boolean;
}

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
