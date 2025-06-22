import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './Sheet';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    args: {
        children: (
            <>
                <SheetTrigger asChild>
                    <Button variant="outline">Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Name</Label>
                            <Input defaultValue="Luis Beu" id="sheet-demo-name" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Username</Label>
                            <Input defaultValue="@beuluis" id="sheet-demo-username" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </>
        ),
    },
    component: Sheet,
    globals: {
        containerClassName: 'min-h-200',
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/dialog#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/sheet',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        SheetClose,
        SheetContent,
        SheetDescription,
        SheetFooter,
        SheetHeader,
    },
    title: 'Components/Sheet',
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
