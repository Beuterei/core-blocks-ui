import { StoryPage } from '../../../storybook/preview';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';
import { type Meta, type StoryObj } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
    args: {
        children: (
            <>
                <ToggleGroupItem aria-label="Toggle bold" value="bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem aria-label="Toggle italic" value="italic">
                    <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem aria-label="Toggle strikethrough" value="strikethrough">
                    <Underline className="h-4 w-4" />
                </ToggleGroupItem>
            </>
        ),
        type: 'multiple',
    },
    component: ToggleGroup,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/toggle-group#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/toggle-group',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        ToggleGroupItem,
    },
    title: 'Components/ToggleGroup',
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'outline',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Single: Story = {
    args: {
        type: 'single',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
