import { Avatar as AvatarCSS } from "./avatar-styles";
import { styled } from "@stitches/react"
import React, { forwardRef } from "react"
import { ThemeColor, getThemeColor } from "../../helpers/color";

const StyledAvatar = styled('span', AvatarCSS);

export type AvatarProps = React.ComponentProps<typeof StyledAvatar> & {
  src: string;
  name: string;
  label?: string;
  borderColor?: ThemeColor;
};

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