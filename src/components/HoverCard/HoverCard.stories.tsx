import { StoryPage } from '../../../storybook/preview';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: HoverCard,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/hover-card',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        HoverCardContent,
        HoverCardTrigger,
    },
    title: 'Components/HoverCard',
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <HoverCardTrigger asChild>
                    <Button variant="link">@beuluis</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/beuluis.png" />
                            <AvatarFallback>BL</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@beuluis</h4>
                            <p className="text-sm">Munich based full stack engineer</p>
                        </div>
                    </div>
                </HoverCardContent>
            </>
        ),
    },
};
