import {
  Avatar as AvatarCSS,
  StyledFallback as AvatarFallbackCSS,
  StyledImagem as AvatarImagemCSS,
} from "./avatar-styles";
import { styled } from "@stitches/react"
import React, { forwardRef } from "react"
import { getThemeColor } from "../../helpers/color";
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from "../types";

export const StyledAvatar = styled(AvatarPrimitive.Avatar, AvatarCSS);
export const StyledFallbacks = styled(AvatarPrimitive.Fallback, AvatarFallbackCSS);
export const StyledImg = styled(AvatarPrimitive.Image, AvatarImagemCSS);

export const Avatar = forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarProps
>(({ src, name, label, delayMs, borderColor, css, ...props }, forwardedRef) => {
  return (
    <StyledAvatar
      css={{
        ...(borderColor && { $$borderColor: getThemeColor(borderColor) }),
        ...css,
      }}
      {...props} 
      ref={forwardedRef}
    >
      <StyledImg src={src} alt={name} />
      <StyledFallbacks delayMs={delayMs} />
    </StyledAvatar>
  )
})

Avatar.displayName = 'Avatar';