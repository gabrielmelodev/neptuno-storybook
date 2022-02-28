import { theme } from '@netuno-ui/web';

export type ThemeColor =
| `$${keyof typeof theme.}`
  