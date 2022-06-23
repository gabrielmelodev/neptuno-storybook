import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import {
  Card,
  CardHeader as CardHeaderComponent,
  CardContent,
  CardHeaderProps,
} from './Card';

export default {
  title: 'Data/Card/Card Header',
  component: CardHeaderComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    rightContent: { control: { type: 'text' } },
  },
  args: {
    children: 'Lorem ipsum',
    rightContent: '',
  },
} as Meta;

const Template: Story<CardHeaderProps> = (args) => (
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
    <Card css={{ maxWidth: 600 }}>
      <CardHeaderComponent {...args}>
        <Heading>{args.children}</Heading>
      </CardHeaderComponent>

      <CardContent css={{ borderRadius: '0 0 $sm $sm' }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
      </CardContent>
    </Card>
  </Box>
);

export const CardHeader = Template.bind({});
