import { cn } from '../../lib/utils';
import {
    Indicator as ProgressPrimitiveIndicator,
    Root as ProgressPrimitiveRoot,
} from '@radix-ui/react-progress';
import { type ComponentProps } from 'react';

export const Progress = ({
    className,
    value,
    ...props
}: ComponentProps<typeof ProgressPrimitiveRoot>) => (
    <ProgressPrimitiveRoot
        className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
        data-slot="progress"
        {...props}
    >
        <ProgressPrimitiveIndicator
            className="bg-primary h-full w-full flex-1 transition-all"
            data-slot="progress-indicator"
            // eslint-disable-next-line react/forbid-component-props
            style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
        />
    </ProgressPrimitiveRoot>
);
