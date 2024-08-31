import { Label } from '@/components/Label/Label';
import { Switch } from '@/components/Switch/Switch';
import { faker } from '@faker-js/faker';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Switch',
    component: Switch,

    render: ({ id = faker.string.uuid(), ...args }) => (
        <div className="flex items-center space-x-2">
            <Switch id={id} {...args} />
            <Label htmlFor={id}>Switch</Label>
        </div>
    ),
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
