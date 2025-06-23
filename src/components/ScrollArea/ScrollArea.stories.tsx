import { StoryPage } from '../../../storybook/preview';
import { Separator } from '../Separator/Separator';
import { ScrollArea, ScrollBar } from './ScrollArea';
import { type Meta, type StoryObj } from '@storybook/react';
import { Fragment } from 'react';

const meta = {
    component: ScrollArea,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/scroll-area#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/scroll-area',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        ScrollBar,
    },
    title: 'Components/ScrollArea',
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, index, a) => `v1.2.0-beta.${a.length - index}`);

export const Default: Story = {
    args: {
        children: (
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                {tags.map((tag) => (
                    <Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </Fragment>
                ))}
            </div>
        ),
        className: 'h-72 w-48 rounded-md border',
    },
};
