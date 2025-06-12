import { Textarea } from './Textarea';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        placeholder: 'Text',
    },
    component: Textarea,
    title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
