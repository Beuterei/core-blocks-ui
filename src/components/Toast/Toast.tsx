import { cn } from '../../lib/utils';
import {
    Action as ToastPrimitivesAction,
    Close as ToastPrimitivesClose,
    Description as ToastPrimitivesDescription,
    Root as ToastPrimitivesRoot,
    Title as ToastPrimitivesTitle,
    Viewport as ToastPrimitivesViewport,
} from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import {
    type ComponentPropsWithoutRef,
    type ComponentRef,
    forwardRef,
    type ReactElement,
} from 'react';

export const ToastViewport = forwardRef<
    ComponentRef<typeof ToastPrimitivesViewport>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesViewport>
>(({ className, ...props }, ref) => (
    <ToastPrimitivesViewport
        className={cn(
            'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
            className,
        )}
        ref={ref}
        {...props}
    />
));

ToastViewport.displayName = ToastPrimitivesViewport.displayName;

const toastVariants = cva(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
        defaultVariants: {
            variant: 'default',
        },
        variants: {
            variant: {
                default: 'border bg-background text-foreground',
                destructive:
                    'destructive group border-destructive bg-destructive text-destructive-foreground',
            },
        },
    },
);

export const Toast = forwardRef<
    ComponentRef<typeof ToastPrimitivesRoot>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesRoot> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    return (
        <ToastPrimitivesRoot
            className={cn(toastVariants({ variant }), className)}
            ref={ref}
            {...props}
        />
    );
});

Toast.displayName = ToastPrimitivesRoot.displayName;

export const ToastAction = forwardRef<
    ComponentRef<typeof ToastPrimitivesAction>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesAction>
>(({ className, ...props }, ref) => (
    <ToastPrimitivesAction
        className={cn(
            'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
            className,
        )}
        ref={ref}
        {...props}
    />
));

ToastAction.displayName = ToastPrimitivesAction.displayName;

export const ToastClose = forwardRef<
    ComponentRef<typeof ToastPrimitivesClose>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesClose>
>(({ className, ...props }, ref) => (
    <ToastPrimitivesClose
        className={cn(
            'absolute right-2 top-2 cursor-pointer rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
            className,
        )}
        ref={ref}
        toast-close=""
        {...props}
    >
        <X className="h-4 w-4" />
    </ToastPrimitivesClose>
));

ToastClose.displayName = ToastPrimitivesClose.displayName;

export const ToastTitle = forwardRef<
    ComponentRef<typeof ToastPrimitivesTitle>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesTitle>
>(({ className, ...props }, ref) => (
    <ToastPrimitivesTitle className={cn('text-sm font-semibold', className)} ref={ref} {...props} />
));

ToastTitle.displayName = ToastPrimitivesTitle.displayName;

export const ToastDescription = forwardRef<
    ComponentRef<typeof ToastPrimitivesDescription>,
    ComponentPropsWithoutRef<typeof ToastPrimitivesDescription>
>(({ className, ...props }, ref) => (
    <ToastPrimitivesDescription
        className={cn('text-sm opacity-90', className)}
        ref={ref}
        {...props}
    />
));

ToastDescription.displayName = ToastPrimitivesDescription.displayName;

export type ToastActionElement = ReactElement<typeof ToastAction>;

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;

export { Provider as ToastProvider } from '@radix-ui/react-toast';
