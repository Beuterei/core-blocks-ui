import { cn } from '../../lib/utils';
import {
    CheckboxItem as ContextMenuPrimitiveCheckboxItem,
    Content as ContextMenuPrimitiveContent,
    Group as ContextMenuPrimitiveGroup,
    Item as ContextMenuPrimitiveItem,
    ItemIndicator as ContextMenuPrimitiveItemIndicator,
    Label as ContextMenuPrimitiveLabel,
    Portal as ContextMenuPrimitivePortal,
    RadioGroup as ContextMenuPrimitiveRadioGroup,
    RadioItem as ContextMenuPrimitiveRadioItem,
    Root as ContextMenuPrimitiveRoot,
    Separator as ContextMenuPrimitiveSeparator,
    Sub as ContextMenuPrimitiveSub,
    SubContent as ContextMenuPrimitiveSubContent,
    SubTrigger as ContextMenuPrimitiveSubTrigger,
    Trigger as ContextMenuPrimitiveTrigger,
} from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

export const ContextMenu = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveRoot>) => {
    return <ContextMenuPrimitiveRoot data-slot="context-menu" {...props} />;
};

export const ContextMenuTrigger = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveTrigger>) => {
    return <ContextMenuPrimitiveTrigger data-slot="context-menu-trigger" {...props} />;
};

export const ContextMenuGroup = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveGroup>) => (
    <ContextMenuPrimitiveGroup data-slot="context-menu-group" {...props} />
);

export const ContextMenuPortal = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitivePortal>) => (
    <ContextMenuPrimitivePortal data-slot="context-menu-portal" {...props} />
);

export const ContextMenuSub = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveSub>) => (
    <ContextMenuPrimitiveSub data-slot="context-menu-sub" {...props} />
);

export const ContextMenuRadioGroup = ({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveRadioGroup>) => (
    <ContextMenuPrimitiveRadioGroup data-slot="context-menu-radio-group" {...props} />
);

export const ContextMenuSubContent = ({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveSubContent>) => (
    <ContextMenuPrimitiveSubContent
        className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
            className,
        )}
        data-slot="context-menu-sub-content"
        {...props}
    />
);

export const ContextMenuSubTrigger = ({
    children,
    className,
    inset,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveSubTrigger> & {
    readonly inset?: boolean;
}) => (
    <ContextMenuPrimitiveSubTrigger
        className={cn(
            "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className,
        )}
        data-inset={inset}
        data-slot="context-menu-sub-trigger"
        {...props}
    >
        {children}
        <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitiveSubTrigger>
);

export const ContextMenuContent = ({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveContent>) => (
    <ContextMenuPrimitivePortal>
        <ContextMenuPrimitiveContent
            className={cn(
                'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
                className,
            )}
            data-slot="context-menu-content"
            {...props}
        />
    </ContextMenuPrimitivePortal>
);

export const ContextMenuCheckboxItem = ({
    checked,
    children,
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveCheckboxItem>) => (
    <ContextMenuPrimitiveCheckboxItem
        checked={checked}
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="context-menu-checkbox-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <ContextMenuPrimitiveItemIndicator>
                <CheckIcon className="size-4" />
            </ContextMenuPrimitiveItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitiveCheckboxItem>
);

export const ContextMenuItem = ({
    className,
    inset,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveItem> & {
    readonly inset?: boolean;
    readonly variant?: 'default' | 'destructive';
}) => (
    <ContextMenuPrimitiveItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-inset={inset}
        data-slot="context-menu-item"
        data-variant={variant}
        {...props}
    />
);

export const ContextMenuLabel = ({
    className,
    inset,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveLabel> & {
    readonly inset?: boolean;
}) => (
    <ContextMenuPrimitiveLabel
        className={cn(
            'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
            className,
        )}
        data-inset={inset}
        data-slot="context-menu-label"
        {...props}
    />
);

export const ContextMenuRadioItem = ({
    children,
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveRadioItem>) => (
    <ContextMenuPrimitiveRadioItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="context-menu-radio-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <ContextMenuPrimitiveItemIndicator>
                <CircleIcon className="size-2 fill-current" />
            </ContextMenuPrimitiveItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitiveRadioItem>
);

export const ContextMenuSeparator = ({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitiveSeparator>) => (
    <ContextMenuPrimitiveSeparator
        className={cn('bg-border -mx-1 my-1 h-px', className)}
        data-slot="context-menu-separator"
        {...props}
    />
);

export const ContextMenuShortcut = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span
        className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
        data-slot="context-menu-shortcut"
        {...props}
    />
);
