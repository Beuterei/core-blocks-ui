import { Input } from '../Input/Input';
import { Label } from './Label';
import { faker } from '@faker-js/faker';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        children: 'Email',
    },
    render: ({ id = faker.string.uuid(), ...args }) => (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={id} {...args} />
            <Input id={id} placeholder="Email" type="email" />
        </div>
    ),
    title: 'Components/Label',
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
