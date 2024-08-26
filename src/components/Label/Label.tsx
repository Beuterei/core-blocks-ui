import { Root as LabelPrimitive } from '@radix-ui/react-label';
import { cx } from '@twind/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive> &
    VariantProps<typeof labelVariants>;

const Label = forwardRef<ElementRef<typeof LabelPrimitive>, LabelProps>(
    ({ className, htmlFor, ...props }, ref) => (
        <LabelPrimitive
            className={cx(labelVariants(), className, htmlFor && 'cursor-pointer')}
            htmlFor={htmlFor}
            ref={ref}
            {...props}
        />
    ),
);

Label.displayName = LabelPrimitive.displayName;

export { Label };
