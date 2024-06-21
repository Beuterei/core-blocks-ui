import { Input, type InputProps } from '@/components/Input/Input';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Input',
    component: Input,
    args: {
        placeholder: 'Text',
    },
} satisfies Meta<InputProps>;

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

// TODO: Add component composition as different group

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
