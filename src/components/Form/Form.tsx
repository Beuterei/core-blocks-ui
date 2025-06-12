'use client';

import { cn } from '../../lib/utils';
import { Label } from '../Label/Label';
import type * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
    type ComponentPropsWithoutRef,
    type ComponentRef,
    createContext,
    forwardRef,
    type HTMLAttributes,
    useContext,
    useId,
    useMemo,
} from 'react';
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    useFormContext,
} from 'react-hook-form';

interface FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    const contextValue = useMemo(() => ({ name: props.name }), [props.name]);

    return (
        <FormFieldContext.Provider value={contextValue}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const id = useId();
        const contextValue = useMemo(() => ({ id }), [id]);

        return (
            <FormItemContext.Provider value={contextValue}>
                <div className={cn('space-y-2', className)} ref={ref} {...props} />
            </FormItemContext.Provider>
        );
    },
);

FormItem.displayName = 'FormItem';

export const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);
    const { formState, getFieldState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }

    const { id } = itemContext;

    return {
        formDescriptionId: `${id}-form-item-description`,
        formItemId: `${id}-form-item`,
        formMessageId: `${id}-form-item-message`,
        id,
        name: fieldContext.name,
        ...fieldState,
    };
};

interface FormItemContextValue {
    id: string;
}

export const FormLabel = forwardRef<
    ComponentRef<typeof LabelPrimitive.Root>,
    ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            className={cn(error && 'text-destructive', className)}
            htmlFor={formItemId}
            ref={ref}
            {...props}
        />
    );
});

FormLabel.displayName = 'FormLabel';

export const FormControl = forwardRef<
    ComponentRef<typeof Slot>,
    ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
    const { error, formDescriptionId, formItemId, formMessageId } = useFormField();

    return (
        <Slot
            aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId}
            aria-invalid={Boolean(error)}
            id={formItemId}
            ref={ref}
            {...props}
        />
    );
});

FormControl.displayName = 'FormControl';

export const FormDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            className={cn('text-sm text-muted-foreground', className)}
            id={formDescriptionId}
            ref={ref}
            {...props}
        />
    );
});

FormDescription.displayName = 'FormDescription';

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }, ref) => {
        const { error, formMessageId } = useFormField();
        const body = error ? String(error?.message ?? '') : children;

        if (!body) {
            return null;
        }

        return (
            <p
                className={cn('text-sm font-medium text-destructive', className)}
                id={formMessageId}
                ref={ref}
                {...props}
            >
                {body}
            </p>
        );
    },
);

FormMessage.displayName = 'FormMessage';
