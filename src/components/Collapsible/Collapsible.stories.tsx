import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';
import { type Meta, type StoryObj } from '@storybook/react';
import { ChevronDownIcon, InfoIcon, SettingsIcon, UserIcon } from 'lucide-react';

const meta = {
    component: Collapsible,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/collapsible',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        CollapsibleContent,
        CollapsibleTrigger,
    },
    title: 'Components/Collapsible',
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="outline">
                        View Details
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                        This is the collapsible content. You can put any content here that you want
                        to show or hide.
                    </div>
                </CollapsibleContent>
            </>
        ),
        className: 'w-full max-w-md space-y-2',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="ghost">
                        View Details
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                        This is the collapsible content. You can put any content here that you want
                        to show or hide.
                    </div>
                </CollapsibleContent>
            </>
        ),
        className: 'w-full max-w-md space-y-2',
    },
};

export const DefaultOpen: Story = {
    args: {
        children: (
            <>
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="outline">
                        FAQ Section
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 space-y-3">
                        <div>
                            <p className="font-medium text-sm mb-1">How do I reset my password?</p>
                            <p className="text-sm text-muted-foreground">
                                Click on the "Forgot Password" link on the login page and follow the
                                instructions.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-sm mb-1">Can I change my username?</p>
                            <p className="text-sm text-muted-foreground">
                                Usernames cannot be changed after account creation for security
                                reasons.
                            </p>
                        </div>
                    </div>
                </CollapsibleContent>
            </>
        ),
        className: 'w-full max-w-md space-y-2',
    },
};

export const Disabled: Story = {
    args: {
        children: (
            <>
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" disabled variant="outline">
                        Disabled Collapsible
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm text-muted-foreground">
                        This content cannot be accessed because the collapsible is disabled.
                    </div>
                </CollapsibleContent>
            </>
        ),
        className: 'w-full max-w-md space-y-2',
        disabled: true,
    },
};

export const MultipleCollapsibles: Story = {
    render: () => (
        <div className="w-full max-w-md space-y-4">
            <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="outline">
                        <div className="flex items-center gap-2">
                            <InfoIcon className="size-4" />
                            General Information
                        </div>
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                        This section contains general information about the product or service.
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="outline">
                        <div className="flex items-center gap-2">
                            <SettingsIcon className="size-4" />
                            Configuration Options
                        </div>
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                        Here you can find various configuration options and settings.
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild>
                    <Button className="w-full justify-between" variant="outline">
                        <div className="flex items-center gap-2">
                            <UserIcon className="size-4" />
                            User Preferences
                        </div>
                        <ChevronDownIcon className="size-4" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                        Manage your personal preferences and account settings here.
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    ),
};
