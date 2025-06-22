import { cn } from '../../lib/utils';
import { Root as SwitchPrimitiveRoot, Thumb as SwitchPrimitiveThumb } from '@radix-ui/react-switch';
import { type ComponentProps } from 'react';

export const Switch = ({ className, ...props }: ComponentProps<typeof SwitchPrimitiveRoot>) => (
    <SwitchPrimitiveRoot
        className={cn(
            'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
            className,
        )}
        data-slot="switch"
        {...props}
    >
        <SwitchPrimitiveThumb
            className={cn(
                'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
            )}
            data-slot="switch-thumb"
        />
    </SwitchPrimitiveRoot>
);
