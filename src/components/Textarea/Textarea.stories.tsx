import { StoryPage } from '../../../storybook/preview';
import { Textarea } from './Textarea';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        placeholder: 'Text',
    },
    component: Textarea,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/textarea',
                    }}
                />
            ),
        },
    },
    title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
