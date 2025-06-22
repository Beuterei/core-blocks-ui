import { StoryPage } from '../../../storybook/preview';
import { useIsDesktop } from '../../hooks/useMediaQuery';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../Dialog/Dialog';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './Drawer';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
    component: Drawer,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/drawer',
                        'Vaul Docs': 'https://vaul.emilkowal.ski/getting-started',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        DrawerClose,
        DrawerContent,
        DrawerDescription,
        DrawerFooter,
        DrawerHeader,
    },
    title: 'Components/Drawer',
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <DrawerTrigger asChild>
                    <Button>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                            <DrawerDescription>
                                This is a simple drawer example without external dependencies.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4">
                            <p className="text-gray-600 mb-4">
                                This drawer demonstrates the basic functionality of the drawer
                                component.
                            </p>
                            <div className="space-y-2">
                                <div className="p-3 bg-gray-100 rounded">
                                    <h4 className="font-medium">Feature 1</h4>
                                    <p className="text-sm text-gray-600">
                                        Description of feature 1
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-100 rounded">
                                    <h4 className="font-medium">Feature 2</h4>
                                    <p className="text-sm text-gray-600">
                                        Description of feature 2
                                    </p>
                                </div>
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button>Confirm</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </>
        ),
    },
};

const ProfileForm = ({ className }: React.ComponentProps<'form'>) => {
    return (
        <form className={cn('grid items-start gap-6', className)}>
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="beuluis@example.com" id="email" type="email" />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input defaultValue="@beuluis" id="username" />
            </div>
            <Button type="submit">Save changes</Button>
        </form>
    );
};

const ResponsiveExample = () => {
    const [open, setOpen] = useState(false);
    const isDesktop = useIsDesktop();

    if (isDesktop) {
        return (
            <Dialog onOpenChange={setOpen} open={open}>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer onOpenChange={setOpen} open={open}>
            <DrawerTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export const Responsive: Story = {
    render: ResponsiveExample,
};
