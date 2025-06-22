import { StoryPage } from '../../../storybook/preview';
import { Badge } from './Badge';
import { type Meta, type StoryObj } from '@storybook/react';
import { X } from 'lucide-react';

const meta = {
    component: Badge,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/badge',
                    }}
                />
            ),
        },
    },
    title: 'Components/Badge',
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Destructive',
        variant: 'destructive',
    },
};

export const WithIcons: Story = {
    args: {
        children: (
            <>
                <X />
                Error
            </>
        ),
        variant: 'destructive',
    },
};

export const AsLink: Story = {
    args: {
        asChild: true,
        children: (
            <a href="https://example.com" rel="noreferrer" target="_blank">
                Clickable Badge
            </a>
        ),
    },
};
