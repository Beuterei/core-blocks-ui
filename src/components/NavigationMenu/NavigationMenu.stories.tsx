import { StoryPage } from '../../../storybook/preview';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from './NavigationMenu';
import { type Meta, type StoryObj } from '@storybook/react';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

const meta = {
    component: NavigationMenu,
    globals: {
        containerClassName: 'min-h-100 items-start',
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/navigation-menu#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/navigation-menu',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        navigationMenuTriggerStyle,
        NavigationMenuViewport,
    },
    title: 'Components/NavigationMenu',
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const components: Array<{ description: string; href: string; title: string }> = [
    {
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
        href: '/docs/primitives/alert-dialog',
        title: 'Alert Dialog',
    },
    {
        description: 'For sighted users to preview content available behind a link.',
        href: '/docs/primitives/hover-card',
        title: 'Hover Card',
    },
    {
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        href: '/docs/primitives/progress',
        title: 'Progress',
    },
    {
        description: 'Visually or semantically separates content.',
        href: '/docs/primitives/scroll-area',
        title: 'Scroll-area',
    },
    {
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        href: '/docs/primitives/tabs',
        title: 'Tabs',
    },
    {
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        href: '/docs/primitives/tooltip',
        title: 'Tooltip',
    },
];

const ListItem = ({
    children,
    href,
    title,
    ...props
}: React.ComponentPropsWithoutRef<'li'> & { readonly href: string }) => {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
};

export const Default: Story = {
    args: {
        children: (
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Beautifully designed components built with Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    href={component.href}
                                    key={component.title}
                                    title={component.title}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <a href="/docs">Docs</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>List</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">
                                        <div className="font-medium">Components</div>
                                        <div className="text-muted-foreground">
                                            Browse all components in the library.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                            Learn how to use the library.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">Components</a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">Documentation</a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="https://example.com">Blocks</a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex-row items-center gap-2"
                                        href="https://example.com"
                                    >
                                        <CircleHelpIcon />
                                        Backlog
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex-row items-center gap-2"
                                        href="https://example.com"
                                    >
                                        <CircleIcon />
                                        To Do
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex-row items-center gap-2"
                                        href="https://example.com"
                                    >
                                        <CircleCheckIcon />
                                        Done
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        ),
        viewport: false,
    },
};
