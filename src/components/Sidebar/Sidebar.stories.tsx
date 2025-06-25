import { StoryPage } from '../../../storybook/preview';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
} from './Sidebar';
import { type Meta, type StoryObj } from '@storybook/react';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

const meta = {
    component: Sidebar,
    decorators: [
        (StoryFunction) => (
            <SidebarProvider>
                <StoryFunction />
            </SidebarProvider>
        ),
    ],
    globals: {
        containerClassName: 'min-h-100',
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'More Examples': 'https://ui.shadcn.com/blocks/sidebar',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/sidebar',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        SidebarContent,
        SidebarFooter,
        SidebarGroup,
        SidebarGroupAction,
        SidebarGroupContent,
        SidebarGroupLabel,
        SidebarHeader,
        SidebarInput,
        SidebarInset,
        SidebarMenu,
        SidebarMenuAction,
        SidebarMenuBadge,
        SidebarMenuButton,
        SidebarMenuItem,
        SidebarMenuSkeleton,
        SidebarMenuSub,
        SidebarMenuSubButton,
        SidebarMenuSubItem,
        SidebarProvider,
        SidebarRail,
        SidebarSeparator,
        SidebarTrigger,
    },
    title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
    {
        icon: Home,
        title: 'Home',
        url: '#',
    },
    {
        icon: Inbox,
        title: 'Inbox',
        url: '#',
    },
    {
        icon: Calendar,
        title: 'Calendar',
        url: '#',
    },
    {
        icon: Search,
        title: 'Search',
        url: '#',
    },
    {
        icon: Settings,
        title: 'Settings',
        url: '#',
    },
];

export const Default: Story = {
    render: (args) => (
        <>
            <SidebarTrigger />
            <Sidebar {...args}>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    ),
};
