import { cn } from '../../lib/utils';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
    Anchor as PopoverPrimitiveAnchor,
    Content as PopoverPrimitiveContent,
    Portal as PopoverPrimitivePortal,
    Root as PopoverPrimitiveRoot,
    Trigger as PopoverPrimitiveTrigger,
} from '@radix-ui/react-popover';
import { type ComponentProps } from 'react';

export const Popover = ({ ...props }: ComponentProps<typeof PopoverPrimitiveRoot>) => (
    <PopoverPrimitiveRoot data-slot="popover" {...props} />
);

export const PopoverTrigger = ({ ...props }: ComponentProps<typeof PopoverPrimitiveTrigger>) => (
    <PopoverPrimitiveTrigger data-slot="popover-trigger" {...props} />
);

export const PopoverContent = ({
    align = 'center',
    className,
    sideOffset = 4,
    ...props
}: ComponentProps<typeof PopoverPrimitiveContent>) => {
    const { containers } = useTheme();

    return (
        <PopoverPrimitivePortal container={containers.popover}>
            <PopoverPrimitiveContent
                align={align}
                className={cn(
                    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
                    className,
                )}
                data-slot="popover-content"
                sideOffset={sideOffset}
                {...props}
            />
        </PopoverPrimitivePortal>
    );
};

export const PopoverAnchor = ({ ...props }: ComponentProps<typeof PopoverPrimitiveAnchor>) => (
    <PopoverPrimitiveAnchor data-slot="popover-anchor" {...props} />
);
