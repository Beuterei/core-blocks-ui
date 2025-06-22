import { StoryPage } from '../../../storybook/preview';
import { Calendar, DayButtonComponent } from './Calendar';
import { type Meta, type StoryObj } from '@storybook/react';

// TODO: add docu link and block link: https://ui.shadcn.com/blocks/calendar

const meta = {
    component: Calendar,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'DayPicker Docs': 'https://daypicker.dev',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/calendar',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        DayButtonComponent,
    },
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
};
