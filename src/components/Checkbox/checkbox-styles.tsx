import { theme } from '@neptuno-ui/web';
import { css } from '@stitches/react';

const { colors } = theme;

export const StyledCheckbox = css({
  all: 'unset',
  backgroundColor: colors['grey-900'],
  width: '2rem',
  height: '2rem',
  borderRadius: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: colors['seaclax-mid']  },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const StyledIndicator = css({
  color: colors['seaclax-light'],
});
