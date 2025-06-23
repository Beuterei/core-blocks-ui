import { StoryPage } from '../../../storybook/preview';
import { Label } from '../Label/Label';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: RadioGroup,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/radio-groups',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        RadioGroupItem,
    },
    title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <div className="flex items-center gap-3">
                    <RadioGroupItem id="r1" value="default" />
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem id="r2" value="comfortable" />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem id="r3" value="compact" />
                    <Label htmlFor="r3">Compact</Label>
                </div>
            </>
        ),
        defaultValue: 'comfortable',
    },
};
