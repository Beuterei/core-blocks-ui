import { Input } from '@/components/Input/Input';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Input',
    component: Input,
    args: {
        placeholder: 'Text',
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        type: 'email',
        placeholder: 'Email',
    },
};

export const File: Story = {
    args: {
        type: 'file',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
