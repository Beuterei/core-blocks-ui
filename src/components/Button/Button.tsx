import { buildVariants, type VariantsProps } from '../../utils/css.helper';
import { useTheme } from '@emotion/react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { LoaderCircleIcon } from 'lucide-react';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = buildVariants(
    theme => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        borderRadius: theme.borderRadius.md,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: 500,
        '--tw-ring-offset-color': theme.colors.background,
        transitionProperty:
            'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        // focus-visible:outline-none
        // focus-visible:ring-2
        // focus-visible:ring-ring
        // focus-visible:ring-offset-2
        ':focus-visible': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
            '--tw-ring-offset-shadow':
                'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow':
                'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            boxShadow:
                'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            '--tw-ring-color': theme.colors.ring,
            '--tw-ring-offset-width': '2px',
        },
        ':disabled': {
            pointerEvents: 'none',
            opacity: 0.5,
        },
    }),
    {
        variants: {
            variant: {
                default: theme => ({
                    backgroundColor: theme.colors.primary.DEFAULT,
                    color: theme.colors.primary.foreground,
                    // ':hover': {
                    //     backgroundColor: theme.colors.primary + '90',
                    // },
                }),
                destructive: {
                    // bg-destructive
                    // text-destructive-foreground
                    // hover:bg-destructive/90
                },
                outline: {
                    // border
                    // border-input
                    // bg-background
                    // hover:bg-accent
                    // hover:text-accent-foreground
                },
                secondary: {
                    // bg-secondary
                    // text-secondary-foreground
                    // hover:bg-secondary/80
                },
                ghost: {
                    // hover:bg-accent
                    // hover:text-accent-foreground
                },
                link: {
                    // text-primary
                    // underline-offset-4
                    // hover:underline
                },
            },
            size: {
                default: {
                    height: '2.5rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                },
                sm: {
                    // h-9
                    // rounded-md
                    // px-3
                },
                lg: {
                    // h-11
                    // rounded-md
                    // px-8
                },
                icon: {
                    // h-10
                    // w-10
                },
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
        VariantsProps<typeof buttonVariants> {
    readonly asChild?: boolean;
    readonly loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, asChild = false, children, loading, disabled, ...props }, ref) => {
        const theme = useTheme();

        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                {...props}
                css={buttonVariants(theme, { variant, size })}
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

export { Button };
