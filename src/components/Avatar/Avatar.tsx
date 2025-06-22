import { cn } from '../../lib/utils';
import {
    Fallback as AvatarPrimitiveFallback,
    Image as AvatarPrimitiveImage,
    Root as AvatarPrimitiveRoot,
} from '@radix-ui/react-avatar';
import { type ComponentProps } from 'react';

export const Avatar = ({ className, ...props }: ComponentProps<typeof AvatarPrimitiveRoot>) => (
    <AvatarPrimitiveRoot
        className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
        data-slot="avatar"
        {...props}
    />
);

export const AvatarImage = ({
    className,
    ...props
}: ComponentProps<typeof AvatarPrimitiveImage>) => (
    <AvatarPrimitiveImage
        className={cn('aspect-square size-full', className)}
        data-slot="avatar-image"
        {...props}
    />
);

export const AvatarFallback = ({
    className,
    ...props
}: ComponentProps<typeof AvatarPrimitiveFallback>) => (
    <AvatarPrimitiveFallback
        className={cn(
            'bg-muted flex size-full items-center justify-center rounded-full',
            className,
        )}
        data-slot="avatar-fallback"
        {...props}
    />
);
