import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../Dialog/Dialog';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Dialog } from './Dialog';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Dialog,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/dialog#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/dialog',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        DialogClose,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
    },
    title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input defaultValue="Pedro Duarte" id="name-1" name="name" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input defaultValue="@peduarte" id="username-1" name="username" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        ),
    },
};
