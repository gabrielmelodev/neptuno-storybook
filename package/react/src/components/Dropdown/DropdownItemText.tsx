import { styled } from '@stitches/react';

import { Text } from '../..';

const StyledText = styled(Text, {
  color: '$grey-200',
  cursor: 'default',
});

export const DropdownItemText = StyledText;

DropdownItemText.displayName = 'DropdownItemText';