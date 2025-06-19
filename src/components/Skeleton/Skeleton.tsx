import { cn } from '../../lib/utils';
import { type ComponentProps } from 'react';

export const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn('bg-accent animate-pulse rounded-md', className)}
            data-slot="skeleton"
            {...props}
        />
    );
};
