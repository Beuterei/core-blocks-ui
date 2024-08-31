import { Slider } from '@/components/Slider/Slider';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Slider',
    component: Slider,
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
    },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
