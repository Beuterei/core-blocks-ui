import { Button } from '../Button/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Tooltip,
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
