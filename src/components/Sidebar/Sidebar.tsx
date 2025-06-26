import { useIsDesktop } from '../../hooks/useMediaQuery';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Separator } from '../Separator/Separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../Sheet/Sheet';
import { Skeleton } from '../Skeleton/Skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../Tooltip/Tooltip';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { PanelLeftIcon } from 'lucide-react';
import {
    type ComponentProps,
    createContext,
    type CSSProperties,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

interface SidebarContextProps {
    isDesktop: boolean;
    open: boolean;
    openMobile: boolean;
    setOpen: (open: boolean) => void;
    setOpenMobile: (open: boolean) => void;
    state: 'collapsed' | 'expanded';
    toggleSidebar: () => void;
}

const SidebarContext = createContext<null | SidebarContextProps>(null);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }

    return context;
};

export const Sidebar = ({
    children,
    className,
    collapsible = 'offcanvas',
    side = 'left',
    variant = 'sidebar',
    ...props
}: ComponentProps<'div'> & {
    readonly collapsible?: 'icon' | 'none' | 'offcanvas';
    readonly side?: 'left' | 'right';
    readonly variant?: 'floating' | 'inset' | 'sidebar';
}) => {
    const { isDesktop, openMobile, setOpenMobile, state } = useSidebar();

    if (collapsible === 'none') {
        return (
            <div
                className={cn(
                    'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
                    className,
                )}
                data-slot="sidebar"
                {...props}
            >
                {children}
            </div>
        );
    }

    if (!isDesktop) {
        return (
            <Sheet onOpenChange={setOpenMobile} open={openMobile} {...props}>
                <SheetContent
                    className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
                    data-mobile="true"
                    data-sidebar="sidebar"
                    data-slot="sidebar"
                    side={side}
                    // eslint-disable-next-line react/forbid-component-props
                    style={
                        {
                            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                        } as CSSProperties
                    }
                >
                    <SheetHeader className="sr-only">
                        <SheetTitle>Sidebar</SheetTitle>
                        <SheetDescription>Displays the mobile sidebar.</SheetDescription>
                    </SheetHeader>
                    <div className="flex h-full w-full flex-col">{children}</div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div
            className="group peer text-sidebar-foreground hidden md:block"
            data-collapsible={state === 'collapsed' ? collapsible : ''}
            data-side={side}
            data-slot="sidebar"
            data-state={state}
            data-variant={variant}
        >
            {/* This is what handles the sidebar gap on desktop */}
            <div
                className={cn(
                    'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
                    'group-data-[collapsible=offcanvas]:w-0',
                    'group-data-[side=right]:rotate-180',
                    variant === 'floating' || variant === 'inset'
                        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
                        : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
                )}
                data-slot="sidebar-gap"
            />
            <div
                className={cn(
                    'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
                    side === 'left'
                        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                    // Adjust the padding for floating and inset variants.
                    variant === 'floating' || variant === 'inset'
                        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                        : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
                    className,
                )}
                data-slot="sidebar-container"
                {...props}
            >
                <div
                    className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
                    data-sidebar="sidebar"
                    data-slot="sidebar-inner"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export const SidebarContent = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
                className,
            )}
            data-sidebar="content"
            data-slot="sidebar-content"
            {...props}
        />
    );
};

export const SidebarFooter = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn('flex flex-col gap-2 p-2', className)}
            data-sidebar="footer"
            data-slot="sidebar-footer"
            {...props}
        />
    );
};

export const SidebarGroup = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
            data-sidebar="group"
            data-slot="sidebar-group"
            {...props}
        />
    );
};

export const SidebarGroupAction = ({
    asChild = false,
    className,
    ...props
}: ComponentProps<'button'> & { readonly asChild?: boolean }) => {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={cn(
                'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                // Increases the hit area of the button on mobile.
                'after:absolute after:-inset-2 md:after:hidden',
                'group-data-[collapsible=icon]:hidden',
                className,
            )}
            data-sidebar="group-action"
            data-slot="sidebar-group-action"
            {...props}
        />
    );
};

export const SidebarGroupContent = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn('w-full text-sm', className)}
            data-sidebar="group-content"
            data-slot="sidebar-group-content"
            {...props}
        />
    );
};

export const SidebarGroupLabel = ({
    asChild = false,
    className,
    ...props
}: ComponentProps<'div'> & { readonly asChild?: boolean }) => {
    const Comp = asChild ? Slot : 'div';

    return (
        <Comp
            className={cn(
                'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                className,
            )}
            data-sidebar="group-label"
            data-slot="sidebar-group-label"
            {...props}
        />
    );
};

export const SidebarHeader = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn('flex flex-col gap-2 p-2', className)}
            data-sidebar="header"
            data-slot="sidebar-header"
            {...props}
        />
    );
};

export const SidebarInput = ({ className, ...props }: ComponentProps<typeof Input>) => {
    return (
        <Input
            className={cn('bg-background h-8 w-full shadow-none', className)}
            data-sidebar="input"
            data-slot="sidebar-input"
            {...props}
        />
    );
};

export const SidebarInset = ({ className, ...props }: ComponentProps<'main'>) => {
    return (
        <main
            className={cn(
                'bg-background relative flex w-full flex-1 flex-col',
                'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
                className,
            )}
            data-slot="sidebar-inset"
            {...props}
        />
    );
};

export const SidebarMenu = ({ className, ...props }: ComponentProps<'ul'>) => {
    return (
        <ul
            className={cn('flex w-full min-w-0 flex-col gap-1', className)}
            data-sidebar="menu"
            data-slot="sidebar-menu"
            {...props}
        />
    );
};

export const SidebarMenuItem = ({ className, ...props }: ComponentProps<'li'>) => {
    return (
        <li
            className={cn('group/menu-item relative', className)}
            data-sidebar="menu-item"
            data-slot="sidebar-menu-item"
            {...props}
        />
    );
};

export const SidebarProvider = ({
    children,
    className,
    defaultOpen = true,
    onOpenChange: setOpenProperty,
    open: openProperty,
    style,
    ...props
}: ComponentProps<'div'> & {
    readonly defaultOpen?: boolean;
    readonly onOpenChange?: (open: boolean) => void;
    readonly open?: boolean;
}) => {
    const isDesktop = useIsDesktop();
    const [openMobile, setOpenMobile] = useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = openProperty ?? internalOpen;
    const setOpen = useCallback(
        (value: ((value: boolean) => boolean) | boolean) => {
            const openState = typeof value === 'function' ? value(open) : value;
            if (setOpenProperty) {
                setOpenProperty(openState);
            } else {
                setInternalOpen(openState);
            }
        },
        [open, setOpenProperty],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = useCallback(() => {
        if (isDesktop) {
            setOpen((previousOpen) => !previousOpen);
        } else {
            setOpenMobile((previousOpen) => !previousOpen);
        }
    }, [isDesktop, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';

    const contextValue = useMemo<SidebarContextProps>(
        () => ({
            isDesktop,
            open,
            openMobile,
            setOpen,
            setOpenMobile,
            state,
            toggleSidebar,
        }),
        [isDesktop, open, openMobile, setOpen, setOpenMobile, state, toggleSidebar],
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <TooltipProvider delayDuration={0}>
                <div
                    className={cn(
                        'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
                        className,
                    )}
                    data-slot="sidebar-wrapper"
                    style={
                        {
                            '--sidebar-width': SIDEBAR_WIDTH,
                            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                            ...style,
                        } as CSSProperties
                    }
                    {...props}
                >
                    {children}
                </div>
            </TooltipProvider>
        </SidebarContext.Provider>
    );
};

export const SidebarRail = ({ className, ...props }: ComponentProps<'button'>) => {
    const { toggleSidebar } = useSidebar();

    return (
        <button
            aria-label="Toggle Sidebar"
            className={cn(
                'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
                'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
                '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
                'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
                '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
                '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
                className,
            )}
            data-sidebar="rail"
            data-slot="sidebar-rail"
            onClick={toggleSidebar}
            tabIndex={-1}
            title="Toggle Sidebar"
            type="button"
            {...props}
        />
    );
};

export const SidebarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => {
    return (
        <Separator
            className={cn('bg-sidebar-border mx-2 w-auto', className)}
            data-sidebar="separator"
            data-slot="sidebar-separator"
            {...props}
        />
    );
};

export const SidebarTrigger = ({ className, onClick, ...props }: ComponentProps<typeof Button>) => {
    const { toggleSidebar } = useSidebar();

    return (
        <Button
            className={cn('size-7', className)}
            data-sidebar="trigger"
            data-slot="sidebar-trigger"
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            size="icon"
            variant="ghost"
            {...props}
        >
            <PanelLeftIcon />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
};

const sidebarMenuButtonVariants = cva(
    'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
    {
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
        variants: {
            size: {
                default: 'h-8 text-sm',
                lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
                sm: 'h-7 text-xs',
            },
            variant: {
                default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                outline:
                    'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
            },
        },
    },
);

export const SidebarMenuAction = ({
    asChild = false,
    className,
    showOnHover = false,
    ...props
}: ComponentProps<'button'> & {
    readonly asChild?: boolean;
    readonly showOnHover?: boolean;
}) => {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={cn(
                'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
                // Increases the hit area of the button on mobile.
                'after:absolute after:-inset-2 md:after:hidden',
                'peer-data-[size=sm]/menu-button:top-1',
                'peer-data-[size=default]/menu-button:top-1.5',
                'peer-data-[size=lg]/menu-button:top-2.5',
                'group-data-[collapsible=icon]:hidden',
                showOnHover &&
                    'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
                className,
            )}
            data-sidebar="menu-action"
            data-slot="sidebar-menu-action"
            {...props}
        />
    );
};

export const SidebarMenuBadge = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
                'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
                'peer-data-[size=sm]/menu-button:top-1',
                'peer-data-[size=default]/menu-button:top-1.5',
                'peer-data-[size=lg]/menu-button:top-2.5',
                'group-data-[collapsible=icon]:hidden',
                className,
            )}
            data-sidebar="menu-badge"
            data-slot="sidebar-menu-badge"
            {...props}
        />
    );
};

export const SidebarMenuButton = ({
    asChild = false,
    className,
    isActive = false,
    size = 'default',
    tooltip,
    variant = 'default',
    ...props
}: ComponentProps<'button'> &
    VariantProps<typeof sidebarMenuButtonVariants> & {
        readonly asChild?: boolean;
        readonly isActive?: boolean;
        readonly tooltip?: ComponentProps<typeof TooltipContent> | string;
    }) => {
    let innerTooltip = tooltip;
    const Comp = asChild ? Slot : 'button';
    const { isDesktop, state } = useSidebar();

    const button = (
        <Comp
            className={cn(sidebarMenuButtonVariants({ size, variant }), className)}
            data-active={isActive}
            data-sidebar="menu-button"
            data-size={size}
            data-slot="sidebar-menu-button"
            {...props}
        />
    );

    if (!innerTooltip) {
        return button;
    }

    if (typeof innerTooltip === 'string') {
        innerTooltip = {
            children: innerTooltip,
        };
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent
                align="center"
                hidden={state !== 'collapsed' || !isDesktop}
                side="right"
                {...innerTooltip}
            />
        </Tooltip>
    );
};

export const SidebarMenuSkeleton = ({
    className,
    showIcon = false,
    ...props
}: ComponentProps<'div'> & {
    readonly showIcon?: boolean;
}) => {
    // Random width between 50 to 90%.
    const width = useMemo(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);

    return (
        <div
            className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
            data-sidebar="menu-skeleton"
            data-slot="sidebar-menu-skeleton"
            {...props}
        >
            {showIcon && (
                <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />
            )}
            <Skeleton
                className="h-4 max-w-(--skeleton-width) flex-1"
                data-sidebar="menu-skeleton-text"
                // eslint-disable-next-line react/forbid-component-props
                style={
                    {
                        '--skeleton-width': width,
                    } as CSSProperties
                }
            />
        </div>
    );
};

export const SidebarMenuSub = ({ className, ...props }: ComponentProps<'ul'>) => {
    return (
        <ul
            className={cn(
                'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
                'group-data-[collapsible=icon]:hidden',
                className,
            )}
            data-sidebar="menu-sub"
            data-slot="sidebar-menu-sub"
            {...props}
        />
    );
};

export const SidebarMenuSubButton = ({
    asChild = false,
    className,
    isActive = false,
    size = 'md',
    ...props
}: ComponentProps<'a'> & {
    readonly asChild?: boolean;
    readonly isActive?: boolean;
    readonly size?: 'md' | 'sm';
}) => {
    const Comp = asChild ? Slot : 'a';

    return (
        <Comp
            className={cn(
                'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
                'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                'group-data-[collapsible=icon]:hidden',
                className,
            )}
            data-active={isActive}
            data-sidebar="menu-sub-button"
            data-size={size}
            data-slot="sidebar-menu-sub-button"
            {...props}
        />
    );
};

export const SidebarMenuSubItem = ({ className, ...props }: ComponentProps<'li'>) => {
    return (
        <li
            className={cn('group/menu-sub-item relative', className)}
            data-sidebar="menu-sub-item"
            data-slot="sidebar-menu-sub-item"
            {...props}
        />
    );
};
