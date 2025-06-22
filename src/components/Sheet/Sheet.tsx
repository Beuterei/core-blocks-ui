import { cn } from '../../lib/utils';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
    Close as SheetPrimitiveClose,
    Content as SheetPrimitiveContent,
    Description as SheetPrimitiveDescription,
    Overlay as SheetPrimitiveOverlay,
    Portal as SheetPrimitivePortal,
    Root as SheetPrimitiveRoot,
    Title as SheetPrimitiveTitle,
    Trigger as SheetPrimitiveTrigger,
} from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

const Sheet = ({ ...props }: ComponentProps<typeof SheetPrimitiveRoot>) => (
    <SheetPrimitiveRoot data-slot="sheet" {...props} />
);

const SheetTrigger = ({ ...props }: ComponentProps<typeof SheetPrimitiveTrigger>) => (
    <SheetPrimitiveTrigger data-slot="sheet-trigger" {...props} />
);

const SheetClose = ({ ...props }: ComponentProps<typeof SheetPrimitiveClose>) => (
    <SheetPrimitiveClose data-slot="sheet-close" {...props} />
);

const SheetPortal = ({ ...props }: ComponentProps<typeof SheetPrimitivePortal>) => (
    <SheetPrimitivePortal data-slot="sheet-portal" {...props} />
);

const SheetOverlay = ({ className, ...props }: ComponentProps<typeof SheetPrimitiveOverlay>) => (
    <SheetPrimitiveOverlay
        className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
            className,
        )}
        data-slot="sheet-overlay"
        {...props}
    />
);

const SheetContent = ({
    children,
    className,
    side = 'right',
    ...props
}: ComponentProps<typeof SheetPrimitiveContent> & {
    readonly side?: 'bottom' | 'left' | 'right' | 'top';
}) => {
    const { containers } = useTheme();

    return (
        <SheetPortal container={containers?.sheet}>
            <SheetOverlay />
            <SheetPrimitiveContent
                className={cn(
                    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
                    side === 'right' &&
                        'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
                    side === 'left' &&
                        'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
                    side === 'top' &&
                        'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
                    side === 'bottom' &&
                        'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
                    className,
                )}
                data-slot="sheet-content"
                {...props}
            >
                {children}
                <SheetPrimitiveClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none cursor-pointer">
                    <XIcon className="size-4" />
                    <span className="sr-only">Close</span>
                </SheetPrimitiveClose>
            </SheetPrimitiveContent>
        </SheetPortal>
    );
};

const SheetHeader = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn('flex flex-col gap-1.5 p-4', className)}
        data-slot="sheet-header"
        {...props}
    />
);

const SheetFooter = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn('mt-auto flex flex-col gap-2 p-4', className)}
        data-slot="sheet-footer"
        {...props}
    />
);

const SheetTitle = ({ className, ...props }: ComponentProps<typeof SheetPrimitiveTitle>) => (
    <SheetPrimitiveTitle
        className={cn('text-foreground font-semibold', className)}
        data-slot="sheet-title"
        {...props}
    />
);

const SheetDescription = ({
    className,
    ...props
}: ComponentProps<typeof SheetPrimitiveDescription>) => (
    <SheetPrimitiveDescription
        className={cn('text-muted-foreground text-sm', className)}
        data-slot="sheet-description"
        {...props}
    />
);

export {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
};
