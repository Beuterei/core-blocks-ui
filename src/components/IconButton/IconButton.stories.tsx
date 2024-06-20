import { IconButton, type IconButtonProps } from '@/components/IconButton/IconButton';
import { type Meta, type StoryObj } from '@storybook/react';
import { HeartIcon } from 'lucide-react';

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    args: {
        children: 'Text',
    },
    argTypes: {
        startIcon: {
            control: { type: 'boolean' },
            mapping: { false: '', true: <HeartIcon /> },
        },
        endIcon: {
            control: { type: 'boolean' },
            mapping: { false: '', true: <HeartIcon /> },
        },
    },
} satisfies Meta<IconButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithStartIcon: Story = {
    args: {
        startIcon: true,
    },
};

export const WithEndIcon: Story = {
    args: {
        endIcon: true,
    },
};
