import { StoryPage } from '../../../storybook/preview';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from './Table';
import { type Meta, type StoryObj } from '@storybook/react';

const invoices = [
    {
        invoice: 'INV001',
        paymentMethod: 'Credit Card',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
    },
    {
        invoice: 'INV002',
        paymentMethod: 'PayPal',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
    },
    {
        invoice: 'INV003',
        paymentMethod: 'Bank Transfer',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
    },
    {
        invoice: 'INV004',
        paymentMethod: 'Credit Card',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
    },
    {
        invoice: 'INV005',
        paymentMethod: 'PayPal',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
    },
    {
        invoice: 'INV006',
        paymentMethod: 'Bank Transfer',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
    },
    {
        invoice: 'INV007',
        paymentMethod: 'Credit Card',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
    },
];

const meta = {
    args: {
        children: (
            <>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </>
        ),
    },
    component: Table,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/table',
                    }}
                />
            ),
        },
    },
    title: 'Components/Table',
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
