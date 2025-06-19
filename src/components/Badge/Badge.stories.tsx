import { Badge } from './Badge';
import { type Meta, type StoryObj } from '@storybook/react';
import { AlertTriangle, Check, Info, X } from 'lucide-react';

const meta = {
    component: Badge,
    title: 'Components/Badge',
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge>
                <Check />
                Success
            </Badge>
            <Badge variant="destructive">
                <X />
                Error
            </Badge>
            <Badge variant="secondary">
                <Info />
                Info
            </Badge>
            <Badge variant="outline">
                <AlertTriangle />
                Warning
            </Badge>
        </div>
    ),
};

export const CountBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge>1</Badge>
            <Badge variant="secondary">23</Badge>
            <Badge variant="destructive">99+</Badge>
            <Badge variant="outline">New</Badge>
        </div>
    ),
};

export const AsLink: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge asChild>
                <a className="cursor-pointer" href="https://example.com">
                    Clickable Badge
                </a>
            </Badge>
            <Badge asChild variant="secondary">
                <a className="cursor-pointer" href="https://example.com">
                    Secondary Link
                </a>
            </Badge>
            <Badge asChild variant="outline">
                <a className="cursor-pointer" href="https://example.com">
                    Outline Link
                </a>
            </Badge>
        </div>
    ),
};
