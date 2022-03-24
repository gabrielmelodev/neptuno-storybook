import { theme } from '@netuno-ui/web';

export type ThemeColor =
  | `$${keyof typeof theme.colors}`
  | (string & { _?: never });

export const getThemeColor = (color: ThemeColor) =>
  color.startsWith('$') ? `$colors${color}` : color;