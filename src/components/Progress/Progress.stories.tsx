import { StoryPage } from '../../../storybook/preview';
import { Progress } from './Progress';
import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

const meta = {
    component: Progress,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/progress#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/progressn',
                    }}
                />
            ),
        },
    },
    title: 'Components/Progress',
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

const AnimatedProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((previous) => {
                if (previous >= 100) {
                    return 0;
                }

                return previous + 10;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <Progress value={progress} />;
};

export const Default: Story = {
    render: () => <AnimatedProgress />,
};
