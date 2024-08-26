import {
    Content as SelectPrimitiveContent,
    Group as SelectPrimitiveGroup,
    Icon as SelectPrimitiveIcon,
    Item as SelectPrimitiveItem,
    ItemIndicator as SelectPrimitiveItemIndicator,
    ItemText as SelectPrimitiveItemText,
    Label as SelectPrimitiveLabel,
    Root as SelectPrimitiveRoot,
    ScrollDownButton as SelectPrimitiveScrollDownButton,
    ScrollUpButton as SelectPrimitiveScrollUpButton,
    Separator as SelectPrimitiveSeparator,
    Trigger as SelectPrimitiveTrigger,
    Value as SelectPrimitiveValue,
    Viewport as SelectPrimitiveViewport,
} from '@radix-ui/react-select';
import { cx } from '@twind/core';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

export type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitiveRoot>;

const Select = SelectPrimitiveRoot;

export type SelectGroupProps = ComponentPropsWithoutRef<typeof SelectPrimitiveGroup>;

const SelectGroup = SelectPrimitiveGroup;

export type SelectValueProps = ComponentPropsWithoutRef<typeof SelectPrimitiveValue>;

const SelectValue = SelectPrimitiveValue;

export type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitiveTrigger>;

const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitiveTrigger>, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => (
        <SelectPrimitiveTrigger
            className={cx(
                'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                className,
            )}
            ref={ref}
            {...props}
        >
            {children}
            <SelectPrimitiveIcon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectPrimitiveIcon>
        </SelectPrimitiveTrigger>
    ),
);

SelectTrigger.displayName = SelectPrimitiveTrigger.displayName;

export type SelectScrollUpButtonProps = ComponentPropsWithoutRef<
    typeof SelectPrimitiveScrollUpButton
>;

const SelectScrollUpButton = forwardRef<
    ElementRef<typeof SelectPrimitiveScrollUpButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveScrollUpButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitiveScrollUpButton
        className={cx('flex cursor-default items-center justify-center py-1', className)}
        ref={ref}
        {...props}
    >
        <ChevronUp className="h-4 w-4" />
    </SelectPrimitiveScrollUpButton>
));

SelectScrollUpButton.displayName = SelectPrimitiveScrollUpButton.displayName;

export type SelectScrollDownButtonProps = ComponentPropsWithoutRef<
    typeof SelectPrimitiveScrollDownButton
>;

const SelectScrollDownButton = forwardRef<
    ElementRef<typeof SelectPrimitiveScrollDownButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveScrollDownButton>
>(({ className, ...props }, ref) => (
    <SelectPrimitiveScrollDownButton
        className={cx('flex cursor-default items-center justify-center py-1', className)}
        ref={ref}
        {...props}
    >
        <ChevronDown className="h-4 w-4" />
    </SelectPrimitiveScrollDownButton>
));

SelectScrollDownButton.displayName = SelectPrimitiveScrollDownButton.displayName;

export type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitiveContent>;

const SelectContent = forwardRef<
    ElementRef<typeof SelectPrimitiveContent>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveContent>
>(({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitiveContent
        className={cx(
            'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            position === 'popper' &&
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className,
        )}
        position={position}
        ref={ref}
        {...props}
    >
        <SelectScrollUpButton />
        <SelectPrimitiveViewport
            className={cx(
                'p-1',
                position === 'popper' &&
                    'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
        >
            {children}
        </SelectPrimitiveViewport>
        <SelectScrollDownButton />
    </SelectPrimitiveContent>
));

SelectContent.displayName = SelectPrimitiveContent.displayName;

export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitiveLabel>;

const SelectLabel = forwardRef<
    ElementRef<typeof SelectPrimitiveLabel>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveLabel>
>(({ className, ...props }, ref) => (
    <SelectPrimitiveLabel
        className={cx('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
        ref={ref}
        {...props}
    />
));

SelectLabel.displayName = SelectPrimitiveLabel.displayName;

export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitiveItem>;

const SelectItem = forwardRef<
    ElementRef<typeof SelectPrimitiveItem>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveItem>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitiveItem
        className={cx(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer',
            className,
        )}
        ref={ref}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitiveItemIndicator>
                <Check className="h-4 w-4" />
            </SelectPrimitiveItemIndicator>
        </span>

        <SelectPrimitiveItemText>{children}</SelectPrimitiveItemText>
    </SelectPrimitiveItem>
));

SelectItem.displayName = SelectPrimitiveItem.displayName;

export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitiveSeparator>;

const SelectSeparator = forwardRef<
    ElementRef<typeof SelectPrimitiveSeparator>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveSeparator>
>(({ className, ...props }, ref) => (
    <SelectPrimitiveSeparator
        className={cx('-mx-1 my-1 h-px bg-muted', className)}
        ref={ref}
        {...props}
    />
));

SelectSeparator.displayName = SelectPrimitiveSeparator.displayName;

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};
