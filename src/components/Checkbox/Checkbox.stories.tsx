import { Checkbox, type CheckboxProps } from '@/components/Checkbox/Checkbox';
import { Label } from '@/components/Label/Label';
import { faker } from '@faker-js/faker';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Checkbox',
    render: ({ id = faker.string.uuid(), ...args }) => (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} {...args} />
            <Label htmlFor={id}>Accept terms and conditions</Label>
        </div>
    ),
} satisfies Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
