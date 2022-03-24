import { colors as tokens } from '@neptuno-ui/colors';
import { getContrast } from 'polished';
import React from 'react';

import { Box } from '../../components/Box/Box';

const getContrastingColor = (color: string) =>
  getContrast(color, '#ffffff') < 3.5 ? '#000000' : '#ffffff';

type Color = {
  value: string;
  alias?: string;
};

const colors: { [k: string]: Color } = {};

Object.entries(tokens).forEach(([key, value]) => {
  const baseColor = Object.entries(colors).find(
    ([, color]) => color.value === value
  );

  if (baseColor) {
    colors[baseColor[0]].alias = key;
  } else {
    colors[key] = { value };
  }
});

export default function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <Box key={key}
      css={{
        backgroundColor: color.value,
        padding: '$8',
      }}
    >
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '$sm',
          fontFamily: '$code',
          color: getContrastingColor(color.value)
        }}
      >
        <strong>${key}</strong>
        {color.alias && <span>${color.alias}</span>}
        <span>{color.value}</span>
      </Box>

    </Box>
  ));
}
