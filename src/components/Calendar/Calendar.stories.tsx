import { Calendar } from './Calendar';
import { type Meta, type StoryObj } from '@storybook/react';

// TODO: add docu link and block link: https://ui.shadcn.com/blocks/calendar

const meta = {
    component: Calendar,
    title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        captionLayout: 'dropdown',
        className: 'rounded-md border shadow-sm',
        mode: 'single',
    },
    render: (args) => {
        return <Calendar {...args} />;
    },
};
