import { Textarea } from '@/components/Textarea/Textarea';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    args: {
        placeholder: 'Text',
    },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
