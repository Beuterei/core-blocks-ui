import { Progress } from './Progress';
import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

const meta = {
    component: Progress,
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
