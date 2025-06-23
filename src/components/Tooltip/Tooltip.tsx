import { cn } from '../../lib/utils';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
    Arrow as TooltipPrimitiveArrow,
    Content as TooltipPrimitiveContent,
    Portal as TooltipPrimitivePortal,
    Provider as TooltipPrimitiveProvider,
    Root as TooltipPrimitiveRoot,
    Trigger as TooltipPrimitiveTrigger,
} from '@radix-ui/react-tooltip';
import { type ComponentProps } from 'react';

export const TooltipProvider = ({
    delayDuration = 0,
    ...props
}: ComponentProps<typeof TooltipPrimitiveProvider>) => (
    <TooltipPrimitiveProvider
        data-slot="tooltip-provider"
        delayDuration={delayDuration}
        {...props}
    />
);

export const Tooltip = ({ ...props }: ComponentProps<typeof TooltipPrimitiveRoot>) => (
    <TooltipProvider>
        <TooltipPrimitiveRoot data-slot="tooltip" {...props} />
    </TooltipProvider>
);

export const TooltipTrigger = ({ ...props }: ComponentProps<typeof TooltipPrimitiveTrigger>) => (
    <TooltipPrimitiveTrigger data-slot="tooltip-trigger" {...props} />
);

export const TooltipContent = ({
    children,
    className,
    sideOffset = 0,
    ...props
}: ComponentProps<typeof TooltipPrimitiveContent>) => {
    const { containers } = useTheme();

    return (
        <TooltipPrimitivePortal container={containers.tooltip}>
            <TooltipPrimitiveContent
                className={cn(
                    'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
                    className,
                )}
                data-slot="tooltip-content"
                sideOffset={sideOffset}
                {...props}
            >
                {children}
                <TooltipPrimitiveArrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
            </TooltipPrimitiveContent>
        </TooltipPrimitivePortal>
    );
};
