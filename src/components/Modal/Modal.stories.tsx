import { useArgs } from '@storybook/client-api';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Heading, Text } from '../..';
import {
  Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
} from './Modal';

export default {
  title: 'Overlay/Modal/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
    overlay: { control: 'boolean' },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>OPEN MODAL</Button>
      </ModalTrigger>
      <ModalWrapper>
        <ModalContent>
          <Heading>Lorem ipsum dolor.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
            incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
            assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
            facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
            recusandae facilis similique assumenda eum adipisci alias, incidunt
            rem veritatis quasi!
          </Text>
          <Heading>Lorem ipsum dolor.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
            incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
            assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
            facilis vitae voluptatem expedita soluta autem labore.
          </Text>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
};

export const Modal = Template.bind({});
