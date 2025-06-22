import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Tooltip,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/tooltip',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        TooltipContent,
        TooltipTrigger,
    },
    title: 'Components/Tooltip',
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </>
        ),
    },
};
