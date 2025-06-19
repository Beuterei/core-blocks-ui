import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Avatar,
    title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage alt="@beuluis" src="https://github.com/beuluis.png" />
            <AvatarFallback>BL</AvatarFallback>
        </Avatar>
    ),
};

export const WithFallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage alt="User" src="" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

export const FallbackOnly: Story = {
    render: () => (
        <Avatar>
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
    ),
};

export const CustomSize: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="size-6">
                <AvatarImage alt="@beuluis" src="https://github.com/beuluis.png" />
                <AvatarFallback className="text-xs">BL</AvatarFallback>
            </Avatar>
            <Avatar className="size-10">
                <AvatarImage alt="@beuluis" src="https://github.com/beuluis.png" />
                <AvatarFallback>BL</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
                <AvatarImage alt="@beuluis" src="https://github.com/beuluis.png" />
                <AvatarFallback className="text-lg">BL</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const Group: Story = {
    render: () => (
        <div className="flex -space-x-2">
            <Avatar className="border-2 border-background">
                <AvatarImage alt="@beuluis" src="https://github.com/beuluis.png" />
                <AvatarFallback>BL</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage alt="User 2" src="" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage alt="User 3" src="" />
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>+3</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const WithBrokenImage: Story = {
    render: () => (
        <Avatar>
            <AvatarImage alt="Broken" src="https://broken-link.jpg" />
            <AvatarFallback>BK</AvatarFallback>
        </Avatar>
    ),
};
