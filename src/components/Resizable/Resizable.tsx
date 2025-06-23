import { cn } from '../../lib/utils';
import { GripVerticalIcon } from 'lucide-react';
import { type ComponentProps } from 'react';
import {
    Panel as ResizablePrimitivePanel,
    PanelGroup as ResizablePrimitivePanelGroup,
    PanelResizeHandle as ResizablePrimitivePanelResizeHandle,
} from 'react-resizable-panels';

export const ResizablePanelGroup = ({
    className,
    ...props
}: ComponentProps<typeof ResizablePrimitivePanelGroup>) => (
    <ResizablePrimitivePanelGroup
        className={cn(
            'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
            className,
        )}
        data-slot="resizable-panel-group"
        {...props}
    />
);

export const ResizablePanel = ({ ...props }: ComponentProps<typeof ResizablePrimitivePanel>) => (
    <ResizablePrimitivePanel data-slot="resizable-panel" {...props} />
);

export const ResizableHandle = ({
    className,
    withHandle,
    ...props
}: ComponentProps<typeof ResizablePrimitivePanelResizeHandle> & {
    readonly withHandle?: boolean;
}) => (
    <ResizablePrimitivePanelResizeHandle
        className={cn(
            'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
            className,
        )}
        data-slot="resizable-handle"
        {...props}
    >
        {withHandle && (
            <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
                <GripVerticalIcon className="size-2.5" />
            </div>
        )}
    </ResizablePrimitivePanelResizeHandle>
);
