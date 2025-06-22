import { Toggle } from './Toggle';
import { type Meta, type StoryObj } from '@storybook/react';
import { Bold } from 'lucide-react';

const meta = {
    args: {
        'aria-label': 'Toggle italic',
        children: <Bold className="h-4 w-4" />,
    },
    component: Toggle,
    title: 'Components/Toggle',
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
