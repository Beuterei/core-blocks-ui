import { Input } from './Input';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        placeholder: 'Text',
    },
    component: Input,
    title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        placeholder: 'Email',
        type: 'email',
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
