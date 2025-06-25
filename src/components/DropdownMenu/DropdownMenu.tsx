import { cn } from '../../lib/utils';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
    CheckboxItem as DropdownMenuPrimitiveCheckboxItem,
    Content as DropdownMenuPrimitiveContent,
    Group as DropdownMenuPrimitiveGroup,
    Item as DropdownMenuPrimitiveItem,
    ItemIndicator as DropdownMenuPrimitiveItemIndicator,
    Label as DropdownMenuPrimitiveLabel,
    Portal as DropdownMenuPrimitivePortal,
    RadioGroup as DropdownMenuPrimitiveRadioGroup,
    RadioItem as DropdownMenuPrimitiveRadioItem,
    Root as DropdownMenuPrimitiveRoot,
    Separator as DropdownMenuPrimitiveSeparator,
    Sub as DropdownMenuPrimitiveSub,
    SubContent as DropdownMenuPrimitiveSubContent,
    SubTrigger as DropdownMenuPrimitiveSubTrigger,
    Trigger as DropdownMenuPrimitiveTrigger,
} from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

export const DropdownMenu = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveRoot>) => (
    <DropdownMenuPrimitiveRoot data-slot="dropdown-menu" {...props} />
);

export const DropdownMenuPortal = ({
    ...props
}: ComponentProps<typeof DropdownMenuPrimitivePortal>) => (
    <DropdownMenuPrimitivePortal data-slot="dropdown-menu-portal" {...props} />
);

export const DropdownMenuTrigger = ({
    className,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveTrigger>) => (
    <DropdownMenuPrimitiveTrigger
        className={cn('cursor-pointer', className)}
        data-slot="dropdown-menu-trigger"
        {...props}
    />
);

export const DropdownMenuContent = ({
    className,
    sideOffset = 4,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveContent>) => {
    const { containers } = useTheme();

    return (
        <DropdownMenuPrimitivePortal container={containers.dropdownMenu}>
            <DropdownMenuPrimitiveContent
                className={cn(
                    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
                    className,
                )}
                data-slot="dropdown-menu-content"
                sideOffset={sideOffset}
                {...props}
            />
        </DropdownMenuPrimitivePortal>
    );
};

export const DropdownMenuGroup = ({
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveGroup>) => (
    <DropdownMenuPrimitiveGroup data-slot="dropdown-menu-group" {...props} />
);

export const DropdownMenuItem = ({
    className,
    inset,
    variant = 'default',
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveItem> & {
    readonly inset?: boolean;
    readonly variant?: 'default' | 'destructive';
}) => (
    <DropdownMenuPrimitiveItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-inset={inset}
        data-slot="dropdown-menu-item"
        data-variant={variant}
        {...props}
    />
);

export const DropdownMenuCheckboxItem = ({
    checked,
    children,
    className,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveCheckboxItem>) => (
    <DropdownMenuPrimitiveCheckboxItem
        checked={checked}
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="dropdown-menu-checkbox-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitiveItemIndicator>
                <CheckIcon className="size-4" />
            </DropdownMenuPrimitiveItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitiveCheckboxItem>
);

export const DropdownMenuRadioGroup = ({
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveRadioGroup>) => (
    <DropdownMenuPrimitiveRadioGroup data-slot="dropdown-menu-radio-group" {...props} />
);

export const DropdownMenuRadioItem = ({
    children,
    className,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveRadioItem>) => (
    <DropdownMenuPrimitiveRadioItem
        className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
            className,
        )}
        data-slot="dropdown-menu-radio-item"
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitiveItemIndicator>
                <CircleIcon className="size-2 fill-current" />
            </DropdownMenuPrimitiveItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitiveRadioItem>
);

export const DropdownMenuLabel = ({
    className,
    inset,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveLabel> & {
    readonly inset?: boolean;
}) => (
    <DropdownMenuPrimitiveLabel
        className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
        data-inset={inset}
        data-slot="dropdown-menu-label"
        {...props}
    />
);

export const DropdownMenuSeparator = ({
    className,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveSeparator>) => (
    <DropdownMenuPrimitiveSeparator
        className={cn('bg-border -mx-1 my-1 h-px', className)}
        data-slot="dropdown-menu-separator"
        {...props}
    />
);

export const DropdownMenuShortcut = ({ className, ...props }: ComponentProps<'span'>) => (
    <span
        className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
        data-slot="dropdown-menu-shortcut"
        {...props}
    />
);

export const DropdownMenuSub = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveSub>) => (
    <DropdownMenuPrimitiveSub data-slot="dropdown-menu-sub" {...props} />
);

export const DropdownMenuSubTrigger = ({
    children,
    className,
    inset,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveSubTrigger> & {
    readonly inset?: boolean;
}) => (
    <DropdownMenuPrimitiveSubTrigger
        className={cn(
            'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
            className,
        )}
        data-inset={inset}
        data-slot="dropdown-menu-sub-trigger"
        {...props}
    >
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitiveSubTrigger>
);

export const DropdownMenuSubContent = ({
    className,
    ...props
}: ComponentProps<typeof DropdownMenuPrimitiveSubContent>) => (
    <DropdownMenuPrimitiveSubContent
        className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
            className,
        )}
        data-slot="dropdown-menu-sub-content"
        {...props}
    />
);
