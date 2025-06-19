import { Button } from './Button';
import { withActions } from '@storybook/addon-actions/decorator';
import { type Meta, type StoryObj } from '@storybook/react';
import { ChevronRightIcon, Loader2Icon } from 'lucide-react';

const meta = {
    args: {
        children: 'Text',
    },
    component: Button,
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
    title: 'Components/Button',
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
        children: <ChevronRightIcon />,
        size: 'icon',
        variant: 'outline',
    },
};

export const Loading: Story = {
    args: {
        children: (
            <>
                <Loader2Icon className="animate-spin" />
                Please wait
            </>
        ),
        disabled: true,
    },
};

export const AsChild: Story = {
    args: {
        asChild: true,
        // eslint-disable-next-line jsx-a11y/anchor-is-valid, react/jsx-no-script-url, no-script-url
        children: <a href="javascript:void(0)">Login</a>,
    },
};
