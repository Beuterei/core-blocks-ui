import { cn } from '../../lib/utils';
import { buttonVariants } from '../Button/Button';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
    Action as AlertDialogPrimitiveAction,
    Cancel as AlertDialogPrimitiveCancel,
    Content as AlertDialogPrimitiveContent,
    Description as AlertDialogPrimitiveDescription,
    Overlay as AlertDialogPrimitiveOverlay,
    Portal as AlertDialogPrimitivePortal,
    Root as AlertDialogPrimitiveRoot,
    Title as AlertDialogPrimitiveTitle,
    Trigger as AlertDialogPrimitiveTrigger,
} from '@radix-ui/react-alert-dialog';
import { type ComponentProps } from 'react';

// TODO: adapt deps to peer deps for external wrapped libs
export const AlertDialog = ({ ...props }: ComponentProps<typeof AlertDialogPrimitiveRoot>) => (
    <AlertDialogPrimitiveRoot data-slot="alert-dialog" {...props} />
);

export const AlertDialogTrigger = ({
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveTrigger>) => (
    <AlertDialogPrimitiveTrigger data-slot="alert-dialog-trigger" {...props} />
);

export const AlertDialogPortal = ({
    ...props
}: ComponentProps<typeof AlertDialogPrimitivePortal>) => (
    <AlertDialogPrimitivePortal data-slot="alert-dialog-portal" {...props} />
);

export const AlertDialogOverlay = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveOverlay>) => (
    <AlertDialogPrimitiveOverlay
        className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
            className,
        )}
        data-slot="alert-dialog-overlay"
        {...props}
    />
);

export const AlertDialogContent = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveContent>) => {
    const { containers } = useTheme();

    return (
        <AlertDialogPortal container={containers.alertDialog}>
            <AlertDialogOverlay />
            <AlertDialogPrimitiveContent
                className={cn(
                    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
                    className,
                )}
                data-slot="alert-dialog-content"
                {...props}
            />
        </AlertDialogPortal>
    );
};

export const AlertDialogHeader = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
        data-slot="alert-dialog-header"
        {...props}
    />
);

export const AlertDialogFooter = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
        data-slot="alert-dialog-footer"
        {...props}
    />
);

export const AlertDialogTitle = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveTitle>) => (
    <AlertDialogPrimitiveTitle
        className={cn('text-lg font-semibold', className)}
        data-slot="alert-dialog-title"
        {...props}
    />
);

export const AlertDialogDescription = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveDescription>) => (
    <AlertDialogPrimitiveDescription
        className={cn('text-muted-foreground text-sm', className)}
        data-slot="alert-dialog-description"
        {...props}
    />
);

export const AlertDialogAction = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveAction>) => (
    <AlertDialogPrimitiveAction className={cn(buttonVariants(), className)} {...props} />
);

export const AlertDialogCancel = ({
    className,
    ...props
}: ComponentProps<typeof AlertDialogPrimitiveCancel>) => (
    <AlertDialogPrimitiveCancel
        className={cn(buttonVariants({ variant: 'outline' }), className)}
        {...props}
    />
);
