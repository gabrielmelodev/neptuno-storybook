import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Heading, Text } from '../..';
import {
  Modal,
  ModalProps,
  ModalTrigger,
  ModalWrapper as ModalWrapperComponent,
  ModalContent,
} from './Modal';

export default {
  title: 'Overlay/Modal/Modal Wrapper',
  component: ModalWrapperComponent,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 200,
        max: 1280,
        step: 10,
      },
    },
    maintainDimensions: { control: 'boolean' },
  },
  args: {
    width: 700,
    maintainDimensions: false,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>OPEN MODAL</Button>
      </ModalTrigger>
      <ModalWrapperComponent {...args}>
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
      </ModalWrapperComponent>
    </Modal>
  );
};

export const ModalWrapper = Template.bind({});
