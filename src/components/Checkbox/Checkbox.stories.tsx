import { Label } from '../Label/Label';
import { Checkbox } from './Checkbox';
import { type Meta, type StoryObj } from '@storybook/react';
import { BookmarkIcon, HeartIcon, StarIcon } from 'lucide-react';
import { type ComponentProps, useId } from 'react';

const DefaultExample = (args: ComponentProps<typeof Checkbox>) => {
    const id = useId();

    return (
        <div className="flex items-center space-x-2">
            <Checkbox {...args} id={id} />
            <Label htmlFor={id}>Accept terms and conditions</Label>
        </div>
    );
};

const meta = {
    render: DefaultExample,

    title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        defaultChecked: true,
        disabled: true,
    },
};
const WithIconsExample = (args: ComponentProps<typeof Checkbox>) => {
    const favoritesId = useId();
    const likedId = useId();
    const bookmarkId = useId();

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Checkbox id={favoritesId} {...args} />
                <Label className="flex items-center gap-2" htmlFor={favoritesId}>
                    <StarIcon className="size-4" />
                    Add to favorites
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox defaultChecked id={likedId} {...args} />
                <Label className="flex items-center gap-2" htmlFor={likedId}>
                    <HeartIcon className="size-4" />
                    Like this post
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id={bookmarkId} {...args} />
                <Label className="flex items-center gap-2" htmlFor={bookmarkId}>
                    <BookmarkIcon className="size-4" />
                    Save for later
                </Label>
            </div>
        </div>
    );
};

export const WithIcons: Story = {
    render: WithIconsExample,
};
