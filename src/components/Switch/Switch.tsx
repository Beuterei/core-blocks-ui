import {
    Root as SwitchPrimitivesRoot,
    Thumb as SwitchPrimitivesThumb,
} from '@radix-ui/react-switch';
import { cx } from '@twind/core';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

const Switch = forwardRef<
    ElementRef<typeof SwitchPrimitivesRoot>,
    ComponentPropsWithoutRef<typeof SwitchPrimitivesRoot>
>(({ className, ...props }, ref) => (
    <SwitchPrimitivesRoot
        className={cx(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            className,
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitivesThumb
            className={cx(
                'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
            )}
        />
    </SwitchPrimitivesRoot>
));

Switch.displayName = SwitchPrimitivesRoot.displayName;

export { Switch };
