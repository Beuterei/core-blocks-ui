import { Label } from '../Label/Label';
import { Checkbox } from './Checkbox';
import { faker } from '@faker-js/faker';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    render: ({ id = faker.string.uuid(), ...args }) => (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} {...args} />
            <Label htmlFor={id}>Accept terms and conditions</Label>
        </div>
    ),
    title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
