import { Avatar as AvatarCSS } from "./avatar-styles";
import { styled } from "@stitches/react"
import React, { forwardRef } from "react"
import { getThemeColor } from "../../helpers/color";
import { AvatarProps } from "../types";

export const StyledAvatar = styled('span', AvatarCSS);

export const Avatar = forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarProps
>(({ src, name, label, borderColor, css, ...props }, forwardedRef) => {
  return (
    <StyledAvatar
      css={{
        ...(borderColor && { $$borderColor: getThemeColor(borderColor) }),
        ...css,
      }}
      {...props}
      ref={forwardedRef}
    >
      <img src={src} alt={name} />
    </StyledAvatar>
  )
})