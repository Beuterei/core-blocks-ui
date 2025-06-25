import { cn } from '../../lib/utils';
import { type Button, buttonVariants } from '../Button/Button';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

export const Pagination = ({ className, ...props }: ComponentProps<'nav'>) => (
    <nav
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        data-slot="pagination"
        role="navigation"
        {...props}
    />
);

export const PaginationContent = ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul
        className={cn('flex flex-row items-center gap-1', className)}
        data-slot="pagination-content"
        {...props}
    />
);

export const PaginationItem = ({ ...props }: ComponentProps<'li'>) => (
    <li data-slot="pagination-item" {...props} />
);

type PaginationLinkProps = ComponentProps<'a'> &
    Pick<ComponentProps<typeof Button>, 'size'> & {
        readonly isActive?: boolean;
    };

// TODO: add support for other navigation elements using asChild
export const PaginationLink = ({
    children,
    className,
    isActive,
    size = 'icon',
    ...props
}: PaginationLinkProps) => (
    <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            buttonVariants({
                size,
                variant: isActive ? 'outline' : 'ghost',
            }),
            className,
        )}
        data-active={isActive}
        data-slot="pagination-link"
        {...props}
    >
        {children}
    </a>
);

export const PaginationPrevious = ({
    className,
    ...props
}: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
        size="default"
        {...props}
    >
        <ChevronLeftIcon />
        <span className="hidden sm:block">Previous</span>
    </PaginationLink>
);

export const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
        size="default"
        {...props}
    >
        <span className="hidden sm:block">Next</span>
        <ChevronRightIcon />
    </PaginationLink>
);

export const PaginationEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
    <span
        aria-hidden
        className={cn('flex size-9 items-center justify-center', className)}
        data-slot="pagination-ellipsis"
        {...props}
    >
        <MoreHorizontalIcon className="size-4" />
        <span className="sr-only">More pages</span>
    </span>
);
