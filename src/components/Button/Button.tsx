import styled from '@emotion/styled';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cx } from '@twind/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircleIcon } from 'lucide-react';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    readonly asChild?: boolean;
    readonly loading?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly tw?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant, size, asChild = false, children, loading, disabled, tw, ...props },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                {...props}
                className={tw(cx(buttonVariants({ variant, size, className })))}
                disabled={loading ?? disabled}
                ref={ref}
            >
                {loading && <LoaderCircleIcon className="mr-2 animate-spin" />}
                <Slottable>{children}</Slottable>
            </Comp>
        );
    },
);

Button.displayName = 'Button';

// const StyledButton = styled(Button)(props => ({
//     backgroundColor: props.theme.colors.primary,
//     ...(props.variant === 'outline' && {
//         borderColor: props.theme.colors.primary,
//         color: props.theme.colors.primary,
//     }),
//     ...(props.size === 'icon' && {
//         padding: 0,
//     }),
// }));

export { Button };
