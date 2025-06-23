import { cn } from '../../lib/utils';
import {
    Corner as ScrollAreaPrimitiveCorner,
    Root as ScrollAreaPrimitiveRoot,
    ScrollAreaScrollbar as ScrollAreaPrimitiveScrollAreaScrollbar,
    ScrollAreaThumb as ScrollAreaPrimitiveScrollAreaThumb,
    Viewport as ScrollAreaPrimitiveViewport,
} from '@radix-ui/react-scroll-area';
import { type ComponentProps } from 'react';

export const ScrollBar = ({
    className,
    orientation = 'vertical',
    ...props
}: ComponentProps<typeof ScrollAreaPrimitiveScrollAreaScrollbar>) => (
    <ScrollAreaPrimitiveScrollAreaScrollbar
        className={cn(
            'flex touch-none p-px transition-colors select-none',
            orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
            orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
            className,
        )}
        data-slot="scroll-area-scrollbar"
        orientation={orientation}
        {...props}
    >
        <ScrollAreaPrimitiveScrollAreaThumb
            className="bg-border relative flex-1 rounded-full"
            data-slot="scroll-area-thumb"
        />
    </ScrollAreaPrimitiveScrollAreaScrollbar>
);

export const ScrollArea = ({
    children,
    className,
    ...props
}: ComponentProps<typeof ScrollAreaPrimitiveRoot>) => (
    <ScrollAreaPrimitiveRoot
        className={cn('relative', className)}
        data-slot="scroll-area"
        {...props}
    >
        <ScrollAreaPrimitiveViewport
            className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
            data-slot="scroll-area-viewport"
        >
            {children}
        </ScrollAreaPrimitiveViewport>
        <ScrollBar />
        <ScrollAreaPrimitiveCorner />
    </ScrollAreaPrimitiveRoot>
);
