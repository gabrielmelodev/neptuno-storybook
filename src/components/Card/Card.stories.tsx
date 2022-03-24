import React from 'react';
import { Card as CardComponent, CardContent } from './Card';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Data/Card/Card',
  component: CardContent,
} as Meta;

const Template: Story = (args) => (
  <Box
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '$grey-600',
      borderRadius: '$sm',
    }}
  >
    <CardComponent>
      <CardContent {...args} css={{ maxWidth: 500 }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
      </CardContent>
    </CardComponent>
  </Box>
);

export const Card = Template.bind({});

