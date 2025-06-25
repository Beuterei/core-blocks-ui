import { StoryPage } from '../../../storybook/preview';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';
import { Calendar } from '../Calendar/Calendar';
import { Checkbox } from '../Checkbox/Checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../Command/Command';
import { Input } from '../Input/Input';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/Popover';
import { RadioGroup, RadioGroupItem } from '../RadioGroup/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select/Select';
import { Switch } from '../Switch/Switch';
import { Textarea } from '../Textarea/Textarea';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type Meta, type StoryObj } from '@storybook/react';
import { format } from 'date-fns';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

// TODO: add github pages
const meta = {
    component: Form,
    globals: {
        containerClassName: 'min-h-200',
    },
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

const onSubmit = (data: object) => {
    toast('You submitted the following values', {
        description: (
            <pre className="mt-2 rounded-md bg-neutral-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    });
};

const checkboxItems = [
    {
        id: 'recents',
        label: 'Recents',
    },
    {
        id: 'home',
        label: 'Home',
    },
    {
        id: 'applications',
        label: 'Applications',
    },
    {
        id: 'desktop',
        label: 'Desktop',
    },
    {
        id: 'downloads',
        label: 'Downloads',
    },
    {
        id: 'documents',
        label: 'Documents',
    },
] as const;

const checkboxFormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some(Boolean), {
        message: 'You have to select at least one item.',
    }),
});

const CheckboxFormComponent = () => {
    const form = useForm<
        z.input<typeof checkboxFormSchema>,
        unknown,
        z.output<typeof checkboxFormSchema>
    >({
        defaultValues: {
            items: ['recents', 'home'],
        },
        resolver: zodResolver(checkboxFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Sidebar</FormLabel>
                                <FormDescription>
                                    Select the items you want to display in the sidebar.
                                </FormDescription>
                            </div>
                            {checkboxItems.map((item) => (
                                <FormField
                                    control={form.control}
                                    key={item.id}
                                    name="items"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                className="flex flex-row items-center gap-2"
                                                key={item.id}
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked) =>
                                                            checked
                                                                ? field.onChange([
                                                                      ...field.value,
                                                                      item.id,
                                                                  ])
                                                                : field.onChange(
                                                                      field.value?.filter(
                                                                          (value) =>
                                                                              value !== item.id,
                                                                      ),
                                                                  )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-sm font-normal">
                                                    {item.label}
                                                </FormLabel>
                                            </FormItem>
                                        );
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const CheckboxForm: Story = {
    render: () => <CheckboxFormComponent />,
};

const switchFormSchema = z.object({
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
});

const SwitchFormComponent = () => {
    const form = useForm<
        z.input<typeof switchFormSchema>,
        unknown,
        z.output<typeof switchFormSchema>
    >({
        defaultValues: {
            security_emails: true,
        },
        resolver: zodResolver(switchFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="marketing_emails"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel>Marketing emails</FormLabel>
                                        <FormDescription>
                                            Receive emails about new products, features, and more.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            // eslint-disable-next-line react/jsx-handler-names
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="security_emails"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel>Security emails</FormLabel>
                                        <FormDescription>
                                            Receive emails about your account security.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            aria-readonly
                                            checked={field.value}
                                            disabled
                                            // eslint-disable-next-line react/jsx-handler-names
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const SwitchForm: Story = {
    render: () => <SwitchFormComponent />,
};

const selectFormSchema = z.object({
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
});

const SelectFormComponent = () => {
    const form = useForm<
        z.input<typeof selectFormSchema>,
        unknown,
        z.output<typeof selectFormSchema>
    >({
        resolver: zodResolver(selectFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="w-2/3 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            {/* eslint-disable-next-line react/jsx-handler-names */}
                            <Select defaultValue={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="me@beuluis.com">me@beuluis.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                You can manage email addresses in your email settings.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const SelectForm: Story = {
    render: () => <SelectFormComponent />,
};

const radioGroupFormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
        required_error: 'You need to select a notification type.',
    }),
});

const RadioGroupFormComponent = () => {
    const form = useForm<
        z.input<typeof radioGroupFormSchema>,
        unknown,
        z.output<typeof radioGroupFormSchema>
    >({
        resolver: zodResolver(radioGroupFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="w-2/3 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Notify me about...</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    className="flex flex-col"
                                    defaultValue={field.value}
                                    // eslint-disable-next-line react/jsx-handler-names
                                    onValueChange={field.onChange}
                                >
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="all" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            All new messages
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="mentions" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Direct messages and mentions
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="none" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Nothing</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const RadioGroupForm: Story = {
    render: () => <RadioGroupFormComponent />,
};

const inputFormSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});

const InputFormComponent = () => {
    const form = useForm<
        z.input<typeof inputFormSchema>,
        unknown,
        z.output<typeof inputFormSchema>
    >({
        defaultValues: {
            username: '',
        },
        resolver: zodResolver(inputFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="w-2/3 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="beuluis" {...field} />
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
};

export const InputForm: Story = {
    render: () => <InputFormComponent />,
};

const textareaFormSchema = z.object({
    bio: z
        .string()
        .min(10, {
            message: 'Bio must be at least 10 characters.',
        })
        .max(160, {
            message: 'Bio must not be longer than 160 characters.',
        }),
});

const TextareaFormComponent = () => {
    const form = useForm<
        z.input<typeof textareaFormSchema>,
        unknown,
        z.output<typeof textareaFormSchema>
    >({
        resolver: zodResolver(textareaFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="w-2/3 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="resize-none"
                                    placeholder="Tell us a little bit about yourself"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You can <span>@mention</span> other users and organizations.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const TextareaForm: Story = {
    render: () => <TextareaFormComponent />,
};

const datePickerFormSchema = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
});

const DatePickerFormComponent = () => {
    const form = useForm<
        z.input<typeof datePickerFormSchema>,
        unknown,
        z.output<typeof datePickerFormSchema>
    >({
        resolver: zodResolver(datePickerFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            className={cn(
                                                'w-[240px] pl-3 text-left font-normal',
                                                !field.value && 'text-muted-foreground',
                                            )}
                                            variant="outline"
                                        >
                                            {field.value ? (
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent align="start" className="w-auto p-0">
                                    <Calendar
                                        captionLayout="dropdown"
                                        disabled={(date) =>
                                            date > new Date() || date < new Date('1900-01-01')
                                        }
                                        mode="single"
                                        // eslint-disable-next-line react/jsx-handler-names
                                        onSelect={field.onChange}
                                        selected={field.value}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const DatePickerForm: Story = {
    render: () => <DatePickerFormComponent />,
};

const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
] as const;

const comboboxFormSchema = z.object({
    language: z.string({
        required_error: 'Please select a language.',
    }),
});

const ComboboxFormComponent = () => {
    const form = useForm<
        z.input<typeof comboboxFormSchema>,
        unknown,
        z.output<typeof comboboxFormSchema>
    >({
        resolver: zodResolver(comboboxFormSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Language</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            className={cn(
                                                'w-[200px] justify-between',
                                                !field.value && 'text-muted-foreground',
                                            )}
                                            role="combobox"
                                            variant="outline"
                                        >
                                            {field.value
                                                ? languages.find(
                                                      (language) => language.value === field.value,
                                                  )?.label
                                                : 'Select language'}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput
                                            className="h-9"
                                            placeholder="Search language..."
                                        />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                'language',
                                                                language.value,
                                                            );
                                                        }}
                                                        value={language.label}
                                                    >
                                                        {language.label}
                                                        <Check
                                                            className={cn(
                                                                'ml-auto',
                                                                language.value === field.value
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0',
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is the language that will be used in the dashboard.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export const ComboboxForm: Story = {
    render: () => <ComboboxFormComponent />,
};
