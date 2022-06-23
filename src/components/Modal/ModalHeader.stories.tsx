import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Text } from '../..';
import {
  Modal,
  ModalProps,
  ModalTrigger,
  ModalContent,
  ModalWrapper,
} from './Modal';
import { ModalHeader as ModalHeaderComponent } from './ModalHeader';

export default {
  title: 'Overlay/Modal/Modal Header',
  component: ModalHeaderComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    closeButton: { control: 'boolean' },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Title',
    closeButton: true,
    size: 'md',
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>OPEN MODAL</Button>
      </ModalTrigger>
      <ModalWrapper>
        <ModalHeaderComponent {...args} />

        <ModalContent>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
            incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
            assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
            facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
            recusandae facilis similique assumenda eum adipisci alias, incidunt
            rem veritatis quasi!
          </Text>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export const ModalHeader = Template.bind({});
