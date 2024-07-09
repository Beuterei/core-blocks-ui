import {
    Indicator as CheckboxPrimitiveIndicator,
    Root as CheckboxPrimitive,
} from '@radix-ui/react-checkbox';
import { tx } from '@twind/core';
import { Check } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive>;

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive>, CheckboxProps>(
    ({ className, ...props }, ref) => (
        <CheckboxPrimitive
            className={tx(
                'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className,
            )}
            ref={ref}
            {...props}
        >
            <CheckboxPrimitiveIndicator
                className={tx('flex items-center justify-center text-current')}
            >
                <Check className="h-4 w-4" />
            </CheckboxPrimitiveIndicator>
        </CheckboxPrimitive>
    ),
);

Checkbox.displayName = CheckboxPrimitive.displayName;

export { Checkbox };
