import { cn } from '@/lib/utils';
import {
    Indicator as CheckboxPrimitiveIndicator,
    Root as CheckboxPrimitive,
} from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { forwardRef } from 'react';

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>;

const Checkbox = forwardRef<
    React.ElementRef<typeof CheckboxPrimitive>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive
        className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            className,
        )}
        ref={ref}
        {...props}
    >
        <CheckboxPrimitiveIndicator className={cn('flex items-center justify-center text-current')}>
            <Check className="h-4 w-4" />
        </CheckboxPrimitiveIndicator>
    </CheckboxPrimitive>
));

Checkbox.displayName = CheckboxPrimitive.displayName;

export { Checkbox };
