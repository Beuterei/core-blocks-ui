import { cn } from '../../lib/utils';
import {
    CheckboxItem as MenubarPrimitiveCheckboxItem,
    Content as MenubarPrimitiveContent,
    Group as MenubarPrimitiveGroup,
    Item as MenubarPrimitiveItem,
    ItemIndicator as MenubarPrimitiveItemIndicator,
    Label as MenubarPrimitiveLabel,
    Menu as MenubarPrimitiveMenu,
    Portal as MenubarPrimitivePortal,
    RadioGroup as MenubarPrimitiveRadioGroup,
    RadioItem as MenubarPrimitiveRadioItem,
    Root as MenubarPrimitiveRoot,
    Separator as MenubarPrimitiveSeparator,
    Sub as MenubarPrimitiveSub,
    SubContent as MenubarPrimitiveSubContent,
    SubTrigger as MenubarPrimitiveSubTrigger,
    Trigger as MenubarPrimitiveTrigger,
} from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

export const Menubar = ({
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveRoot>) => (
    <MenubarPrimitiveRoot
        className={cn(
            'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
            className,
        )}
        data-slot="menubar"
        {...props}
    />
);

export const MenubarMenu = ({ ...props }: React.ComponentProps<typeof MenubarPrimitiveMenu>) => (
    <MenubarPrimitiveMenu data-slot="menubar-menu" {...props} />
);

export const MenubarGroup = ({ ...props }: React.ComponentProps<typeof MenubarPrimitiveGroup>) => (
    <MenubarPrimitiveGroup data-slot="menubar-group" {...props} />
);

export const MenubarPortal = ({
    ...props
}: React.ComponentProps<typeof MenubarPrimitivePortal>) => (
    <MenubarPrimitivePortal data-slot="menubar-portal" {...props} />
);

export const MenubarRadioGroup = ({
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveRadioGroup>) => (
    <MenubarPrimitiveRadioGroup data-slot="menubar-radio-group" {...props} />
);

export const MenubarTrigger = ({
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveTrigger>) => (
    <MenubarPrimitiveTrigger
        className={cn(
            'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
            className,
        )}
        data-slot="menubar-trigger"
        {...props}
    />
);

export const MenubarContent = ({
    align = 'start',
    alignOffset = -4,
    className,
    sideOffset = 8,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveContent>) => (
    <MenubarPortal>
        <MenubarPrimitiveContent
            align={align}
            alignOffset={alignOffset}
            className={cn(
                'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
                className,
            )}
            data-slot="menubar-content"
            sideOffset={sideOffset}
            {...props}
        />
    </MenubarPortal>
);

export const MenubarItem = ({
    className,
    inset,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveItem> & {
    readonly inset?: boolean;
    readonly variant?: 'default' | 'destructive';
}) => (
    <MenubarPrimitiveItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-inset={inset}
        data-slot="menubar-item"
        data-variant={variant}
        {...props}
    />
);

export const MenubarCheckboxItem = ({
    checked,
    children,
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveCheckboxItem>) => (
    <MenubarPrimitiveCheckboxItem
        checked={checked}
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="menubar-checkbox-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <MenubarPrimitiveItemIndicator>
                <CheckIcon className="size-4" />
            </MenubarPrimitiveItemIndicator>
        </span>
        {children}
    </MenubarPrimitiveCheckboxItem>
);

export const MenubarRadioItem = ({
    children,
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveRadioItem>) => (
    <MenubarPrimitiveRadioItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="menubar-radio-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <MenubarPrimitiveItemIndicator>
                <CircleIcon className="size-2 fill-current" />
            </MenubarPrimitiveItemIndicator>
        </span>
        {children}
    </MenubarPrimitiveRadioItem>
);

export const MenubarLabel = ({
    className,
    inset,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveLabel> & {
    readonly inset?: boolean;
}) => (
    <MenubarPrimitiveLabel
        className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
        data-inset={inset}
        data-slot="menubar-label"
        {...props}
    />
);

export const MenubarSeparator = ({
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveSeparator>) => (
    <MenubarPrimitiveSeparator
        className={cn('bg-border -mx-1 my-1 h-px', className)}
        data-slot="menubar-separator"
        {...props}
    />
);

export const MenubarShortcut = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span
        className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
        data-slot="menubar-shortcut"
        {...props}
    />
);

export const MenubarSub = ({ ...props }: React.ComponentProps<typeof MenubarPrimitiveSub>) => (
    <MenubarPrimitiveSub data-slot="menubar-sub" {...props} />
);

export const MenubarSubTrigger = ({
    children,
    className,
    inset,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveSubTrigger> & {
    readonly inset?: boolean;
}) => (
    <MenubarPrimitiveSubTrigger
        className={cn(
            'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8',
            className,
        )}
        data-inset={inset}
        data-slot="menubar-sub-trigger"
        {...props}
    >
        {children}
        <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitiveSubTrigger>
);

export const MenubarSubContent = ({
    className,
    ...props
}: React.ComponentProps<typeof MenubarPrimitiveSubContent>) => (
    <MenubarPrimitiveSubContent
        className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
            className,
        )}
        data-slot="menubar-sub-content"
        {...props}
    />
);
