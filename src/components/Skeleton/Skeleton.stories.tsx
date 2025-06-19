import { Skeleton } from './Skeleton';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Skeleton,
    render: () => (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    ),
    title: 'Components/Skeleton',
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
