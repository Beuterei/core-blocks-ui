import { Input } from '../Input/Input';
import { Label } from './Label';
import { type Meta, type StoryObj } from '@storybook/react';
import { type ComponentProps, useId } from 'react';

const DefaultExample = (args: ComponentProps<typeof Label>) => {
    const id = useId();

    return (
        <div className="grid w-full items-center gap-1.5">
            <Label {...args} htmlFor={id} />
            <Input id={id} placeholder="Email" type="email" />
        </div>
    );
};

const meta = {
    args: {
        children: 'Email',
    },
    render: DefaultExample,
    title: 'Components/Label',
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
