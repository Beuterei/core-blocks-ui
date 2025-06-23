import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { Toaster } from './Sonner';
import { type Meta, type StoryObj } from '@storybook/react';
import { toast } from 'sonner';

const meta = {
    component: Toaster,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/sonner',
                        'Sonner Docs': 'https://sonner.emilkowal.ski',
                    }}
                />
            ),
        },
    },
    title: 'Components/Sonner',
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-4">
                <Button onClick={() => toast('Hello form default')}>Default</Button>
                <Button onClick={() => toast.success('Hello form success')}>Success</Button>
                <Button onClick={() => toast.error('Hello form error')}>Error</Button>
                <Button onClick={() => toast.warning('Hello form warning')}>Warning</Button>
                <Button onClick={() => toast.info('Hello form info')}>Info</Button>
                <Button onClick={() => toast.loading('Hello form loading')}>Loading</Button>
                <Button
                    onClick={() =>
                        toast.promise(
                            new Promise((resolve) => {
                                setTimeout(() => resolve(undefined), 1_000);
                            }),
                            {
                                error: 'Error',
                                loading: 'Loading...',
                                success: 'Loaded',
                            },
                        )
                    }
                >
                    Promise
                </Button>
                <Button
                    onClick={() =>
                        toast('Event has been created', {
                            action: {
                                label: 'Undo',
                                onClick: () => {},
                            },
                            description: 'Sunday, December 03, 2023 at 9:00 AM',
                        })
                    }
                >
                    Rich content
                </Button>
            </div>
        );
    },
};
