import { cn } from '../../lib/utils';
import { toggleVariants } from '../Toggle/Toggle';
import {
    Item as ToggleGroupPrimitiveItem,
    Root as ToggleGroupPrimitiveRoot,
} from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';
import { type ComponentProps, createContext, useContext, useMemo } from 'react';

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
    size: 'default',
    variant: 'default',
});

export const ToggleGroup = ({
    children,
    className,
    size,
    variant,
    ...props
}: ComponentProps<typeof ToggleGroupPrimitiveRoot> & VariantProps<typeof toggleVariants>) => {
    const contextValue = useMemo(() => ({ size, variant }), [size, variant]);

    return (
        <ToggleGroupPrimitiveRoot
            className={cn(
                'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
                className,
            )}
            data-size={size}
            data-slot="toggle-group"
            data-variant={variant}
            {...props}
        >
            <ToggleGroupContext.Provider value={contextValue}>
                {children}
            </ToggleGroupContext.Provider>
        </ToggleGroupPrimitiveRoot>
    );
};

export const ToggleGroupItem = ({
    children,
    className,
    size,
    variant,
    ...props
}: ComponentProps<typeof ToggleGroupPrimitiveItem> & VariantProps<typeof toggleVariants>) => {
    const context = useContext(ToggleGroupContext);

    return (
        <ToggleGroupPrimitiveItem
            className={cn(
                toggleVariants({
                    size: context.size ?? size,
                    variant: context.variant ?? variant,
                }),
                'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
                className,
            )}
            data-size={context.size ?? size}
            data-slot="toggle-group-item"
            data-variant={context.variant ?? variant}
            {...props}
        >
            {children}
        </ToggleGroupPrimitiveItem>
    );
};
