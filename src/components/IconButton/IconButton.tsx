import { Button, type ButtonProps } from '../Button/Button';
import type { ReactNode } from 'react';

export type IconButtonProps = ButtonProps & {
    readonly endIcon?: ReactNode;
    readonly startIcon?: ReactNode;
};

export const IconButton = ({ endIcon, startIcon, children, ...props }: IconButtonProps) => (
    <Button {...props}>
        {startIcon && <div className="mr-2">{startIcon}</div>}
        {children}
        {endIcon && <div className="ml-2">{endIcon}</div>}
    </Button>
);

IconButton.displayName = 'IconButton';
