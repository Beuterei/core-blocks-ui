import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import { ChevronRightIcon, HeartIcon, LoaderCircleIcon } from "lucide-react";

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Text",
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
    },
};

export const Link: Story = {
    args: {
        variant: "link",
    },
};

export const Icon: Story = {
    args: {
        variant: "outline",
        size: "icon",
        children: <ChevronRightIcon />,
    },
};

export const WithIcon: Story = {
    args: {
        children: <><HeartIcon className="mr-2" />Love</>,
    },
};

export const Loading: Story = {
    args: {
        disabled: true,
        children: <><LoaderCircleIcon className="mr-2 animate-spin" />Loading</>,
    },
};

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <a href="javascript:void(0)">Login</a>,
    },
};
