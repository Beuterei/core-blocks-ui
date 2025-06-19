import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Meta, type StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});

const meta = {
    title: 'Components/Form',
} satisfies Meta;

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

        const onSubmit = (data: z.infer<typeof formSchema>) => {};

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
