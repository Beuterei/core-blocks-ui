import { Button } from '@/components/Button/Button';
import { withActions } from '@storybook/addon-actions/decorator';
import { type Meta, type StoryObj } from '@storybook/react';
import { ChevronRightIcon } from 'lucide-react';

const meta = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Text',
    },
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
    decorators: [withActions],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
    },
};

export const Icon: Story = {
    args: {
        variant: 'outline',
        size: 'icon',
        children: <ChevronRightIcon />,
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const AsChild: Story = {
    args: {
        asChild: true,
        // eslint-disable-next-line jsx-a11y/anchor-is-valid, react/jsx-no-script-url, no-script-url
        children: <a href="javascript:void(0)">Login</a>,
    },
};
