import { css } from "@stitches/react";

export const Card = css({
  backgroundColor: '$grey-800',
  padding: '$6 $8',
  borderRadius: '$sm',
});

export const CardWrapper = css({
  display: 'flex',
  flexDirection: 'column',
});

export const CardHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4 $8',
  borderRadius: '$sm $sm 0 0',

  backgroundImage: 'linear-gradient(90deg, $grey-700 0%, transparent 100%)',
  backgroundColor: '$grey-800',
});
