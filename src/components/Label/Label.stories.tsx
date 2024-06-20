import { Input } from '@/components/Input/Input';
import { Label, type LabelProps } from '@/components/Label/Label';
import { faker } from '@faker-js/faker';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Label',
    args: {
        children: 'Email',
    },
    render: ({ id = faker.string.uuid(), ...args }) => (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={id} {...args} />
            <Input id={id} placeholder="Email" type="email" />
        </div>
    ),
} satisfies Meta<LabelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
