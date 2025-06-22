import { cn } from '../../lib/utils';
import { Label } from '../Label/Label';
import { type Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { type ComponentProps, createContext, useContext, useId, useMemo } from 'react';
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    useFormContext,
    useFormState,
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

interface FormItemContextValue {
    id: string;
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

export const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);
    const { getFieldState } = useFormContext();
    const formState = useFormState({ name: fieldContext.name });
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

export const FormItem = ({ className, ...props }: ComponentProps<'div'>) => {
    const id = useId();
    const contextValue = useMemo(() => ({ id }), [id]);

    return (
        <FormItemContext.Provider value={contextValue}>
            <div className={cn('grid gap-2', className)} data-slot="form-item" {...props} />
        </FormItemContext.Provider>
    );
};

export const FormLabel = ({ className, ...props }: ComponentProps<typeof LabelPrimitiveRoot>) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            className={cn('data-[error=true]:text-destructive', className)}
            data-error={Boolean(error)}
            data-slot="form-label"
            htmlFor={formItemId}
            {...props}
        />
    );
};

export const FormControl = ({ ...props }: ComponentProps<typeof Slot>) => {
    const { error, formDescriptionId, formItemId, formMessageId } = useFormField();

    return (
        <Slot
            aria-describedby={
                error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`
            }
            aria-invalid={Boolean(error)}
            data-slot="form-control"
            id={formItemId}
            {...props}
        />
    );
};

export const FormDescription = ({ className, ...props }: ComponentProps<'p'>) => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            className={cn('text-muted-foreground text-sm', className)}
            data-slot="form-description"
            id={formDescriptionId}
            {...props}
        />
    );
};

export const FormMessage = ({ className, ...props }: ComponentProps<'p'>) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? '') : props.children;

    if (!body) {
        return null;
    }

    return (
        <p
            className={cn('text-destructive text-sm', className)}
            data-slot="form-message"
            id={formMessageId}
            {...props}
        >
            {body}
        </p>
    );
};

export { FormProvider as Form } from 'react-hook-form';
