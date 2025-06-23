import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Meta, type StoryObj } from '@storybook/react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});

// TODO: add all examples
const meta = {
    component: Form,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'React Hook Form Docs': 'https://react-hook-form.com',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/form',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
    },
    title: 'Components/Form',
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const form = useForm<z.input<typeof formSchema>, unknown, z.output<typeof formSchema>>({
            defaultValues: {
                username: '',
            },
            resolver: zodResolver(formSchema),
        });

        const onSubmit = (data: z.infer<typeof formSchema>) => {
            toast('Form submitted', {
                description: (
                    <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                        <code>{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            });
        };

        return (
            <FormProvider {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Max Mustermann" {...field} />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </FormProvider>
        );
    },
};
