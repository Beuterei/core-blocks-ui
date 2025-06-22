import { cn } from '../../lib/utils';
import { Root as SeparatorPrimitiveRoot } from '@radix-ui/react-separator';
import { type ComponentProps } from 'react';

export const Separator = ({
    className,
    decorative = true,
    orientation = 'horizontal',
    ...props
}: ComponentProps<typeof SeparatorPrimitiveRoot>) => (
    <SeparatorPrimitiveRoot
        className={cn(
            'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
            className,
        )}
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        {...props}
    />
);
