import { Label } from '../Label/Label';
import { Switch } from './Switch';
import { type Meta, type StoryObj } from '@storybook/react';
import { type ComponentProps, useId } from 'react';

const SwitchWithLabel = (args: ComponentProps<typeof Switch>) => {
    const id = useId();

    return (
        <div className="flex items-center space-x-2">
            <Switch {...args} id={id} />
            <Label htmlFor={id}>Switch</Label>
        </div>
    );
};

const meta = {
    component: Switch,
    render: SwitchWithLabel,
    title: 'Components/Switch',
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
