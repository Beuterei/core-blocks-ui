import { StoryPage } from '../../../storybook/preview';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Button } from '../Button/Button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../Drawer/Drawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../DropdownMenu/DropdownMenu';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './Breadcrumb';
import { type Meta, type StoryObj } from '@storybook/react';
import { ChevronDown, Dot, Home, Slash } from 'lucide-react';
import { useState } from 'react';

const meta = {
    component: Breadcrumb,
    globals: {
        containerClassName: 'min-h-100',
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/breadcrumb',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        BreadcrumbEllipsis,
        BreadcrumbItem,
        BreadcrumbLink,
        BreadcrumbList,
        BreadcrumbPage,
    },
    title: 'Components/Breadcrumb',
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const WithHomeIcon: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink className="flex items-center gap-1" href="/">
                        <Home className="size-4" />
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Laptop</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const WithCustomSeparator: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>Getting Started</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const WithDotSeparator: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Dot className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Dot className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>Latest Post</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const WithEllipsis: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components/ui">UI</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const AsChild: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <a className="flex items-center gap-1" href="/">
                            <Home className="size-4" />
                            Home
                        </a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <a className="flex items-center gap-1" href="/products">
                            Products
                        </a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Current Product</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

export const WithDropdown: Story = {
    args: {
        children: (
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5">
                            Components
                            <ChevronDown className="size-3.5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Documentation</DropdownMenuItem>
                            <DropdownMenuItem>Themes</DropdownMenuItem>
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash className="size-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        ),
    },
};

const ResponsiveExample = () => {
    const items = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'Documentation' },
        { href: '#', label: 'Building Your Application' },
        { href: '#', label: 'Data Fetching' },
        { label: 'Caching and Revalidating' },
    ];

    const ITEMS_TO_DISPLAY = 3;

    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={items[0].href ?? '/'}>{items[0].label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {items.length > ITEMS_TO_DISPLAY ? (
                    <>
                        <BreadcrumbItem>
                            {isDesktop ? (
                                <DropdownMenu onOpenChange={setOpen} open={open}>
                                    <DropdownMenuTrigger
                                        aria-label="Toggle menu"
                                        className="flex items-center gap-1"
                                    >
                                        <BreadcrumbEllipsis className="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {items.slice(1, -2).map((item, index) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <DropdownMenuItem key={index}>
                                                <a href={item.href ?? '#'}>{item.label}</a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Drawer onOpenChange={setOpen} open={open}>
                                    <DrawerTrigger aria-label="Toggle Menu">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>Navigate to</DrawerTitle>
                                            <DrawerDescription>
                                                Select a page to navigate to.
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <div className="grid gap-1 px-4">
                                            {items.slice(1, -2).map((item, index) => (
                                                <a
                                                    className="py-1 text-sm"
                                                    href={item.href ?? '#'}
                                                    // eslint-disable-next-line react/no-array-index-key
                                                    key={index}
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                        <DrawerFooter className="pt-4">
                                            <DrawerClose asChild>
                                                <Button variant="outline">Close</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>
                ) : null}
                {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <BreadcrumbItem key={index}>
                        {item.href ? (
                            <>
                                <BreadcrumbLink
                                    className="max-w-20 truncate md:max-w-none"
                                    href={item.href}
                                >
                                    {item.label}
                                </BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </>
                        ) : (
                            <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                                {item.label}
                            </BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export const Responsive: Story = {
    render: ResponsiveExample,
};
