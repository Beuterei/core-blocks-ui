import { StoryPage } from '../../../storybook/preview';
import { Slider } from './Slider';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
    },
    component: Slider,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/slider#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/slider',
                    }}
                />
            ),
        },
    },
    title: 'Components/Slider',
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
