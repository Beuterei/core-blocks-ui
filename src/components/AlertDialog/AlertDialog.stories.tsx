import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './AlertDialog';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: AlertDialog,
    globals: {
        containerClassName: 'min-h-100',
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/alert-dialog',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogOverlay,
        AlertDialogPortal,
        AlertDialogTitle,
        AlertDialogTrigger,
    },
    title: 'Components/AlertDialog',
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </>
        ),
    },
};
