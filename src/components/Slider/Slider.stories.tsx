import { Slider } from './Slider';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
    },
    component: Slider,
    title: 'Components/Slider',
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
