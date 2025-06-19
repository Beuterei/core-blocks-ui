import { cn } from '../../lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { type ComponentProps } from 'react';

export const Breadcrumb = ({ ...props }: ComponentProps<'nav'>) => {
    return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
};

export const BreadcrumbList = ({ className, ...props }: ComponentProps<'ol'>) => {
    return (
        <ol
            className={cn(
                'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
                className,
            )}
            data-slot="breadcrumb-list"
            {...props}
        />
    );
};

export const BreadcrumbItem = ({ className, ...props }: ComponentProps<'li'>) => {
    return (
        <li
            className={cn('inline-flex items-center gap-1.5', className)}
            data-slot="breadcrumb-item"
            {...props}
        />
    );
};

export const BreadcrumbLink = ({
    asChild,
    className,
    ...props
}: ComponentProps<'a'> & {
    readonly asChild?: boolean;
}) => {
    const Comp = asChild ? Slot : 'a';

    return (
        <Comp
            className={cn('hover:text-foreground transition-colors', className)}
            data-slot="breadcrumb-link"
            {...props}
        />
    );
};

export const BreadcrumbPage = ({ className, ...props }: ComponentProps<'span'>) => {
    return (
        <span
            aria-current="page"
            aria-disabled="true"
            className={cn('text-foreground font-normal', className)}
            data-slot="breadcrumb-page"
            role="link"
            {...props}
        />
    );
};

export const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<'li'>) => {
    return (
        <li
            aria-hidden="true"
            className={cn('[&>svg]:size-3.5', className)}
            data-slot="breadcrumb-separator"
            role="presentation"
            {...props}
        >
            {children ?? <ChevronRight className="size-4" />}
        </li>
    );
};

export const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<'span'>) => {
    return (
        <span
            aria-hidden="true"
            className={cn('flex size-9 items-center justify-center', className)}
            data-slot="breadcrumb-ellipsis"
            role="presentation"
            {...props}
        >
            <MoreHorizontal className="size-4" />
            <span className="sr-only">More</span>
        </span>
    );
};
