import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Heading, Text } from '../..';
import {
  Modal,
  ModalProps,
  ModalTrigger,
  ModalContent,
  ModalWrapper,
} from './Modal';
import { ModalActions as ModalActionsComponent } from './ModalActions';

export default {
  title: 'Overlay/Modal/Modal Actions',
  component: ModalActionsComponent,
  argTypes: {
    divider: { control: 'boolean' },
    align: {
      options: ['left', 'right', 'center'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    divider: true,
    align: 'right',
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return (
    <Modal>
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
        </ModalContent>

        <ModalActionsComponent {...args}>
          <Button variant="soft">SECONDARY</Button>
          <Button>PRIMARY</Button>
        </ModalActionsComponent>
      </ModalWrapper>
    </Modal>
  );
};

export const ModalActions = Template.bind({});
