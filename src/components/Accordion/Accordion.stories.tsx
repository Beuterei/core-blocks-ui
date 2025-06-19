import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: Accordion,
    title: 'Components/Accordion',
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'w-full max-w-md',
        collapsible: true,
        type: 'single',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other components&apos;
                    aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const SingleType: Story = {
    args: {
        className: 'w-full max-w-md',
        collapsible: true,
        defaultValue: 'item-1',
        type: 'single',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Our flagship product combines cutting-edge technology with sleek design.
                        Built with premium materials, it offers unparalleled performance and
                        reliability.
                    </p>
                    <p>
                        Key features include advanced processing capabilities, and an intuitive user
                        interface designed for both beginners and experts.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We offer worldwide shipping through trusted courier partners. Standard
                        delivery takes 3-5 business days, while express shipping ensures delivery
                        within 1-2 business days.
                    </p>
                    <p>
                        All orders are carefully packaged and fully insured. Track your shipment in
                        real-time through our dedicated tracking portal.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return policy. If
                        you&apos;re not completely satisfied, simply return the item in its original
                        condition.
                    </p>
                    <p>
                        Our hassle-free return process includes free return shipping and full
                        refunds processed within 48 hours of receiving the returned item.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const MultipleType: Story = {
    args: {
        className: 'w-full max-w-md',
        defaultValue: ['item-1', 'item-3'],
        type: 'multiple',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Account Settings</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <p>Manage your account preferences and security settings.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Update profile information</li>
                            <li>Change password</li>
                            <li>Enable two-factor authentication</li>
                            <li>Manage email notifications</li>
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Billing Information</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <p>View and manage your billing details and subscription.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Payment methods</li>
                            <li>Billing history</li>
                            <li>Subscription plans</li>
                            <li>Download invoices</li>
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Privacy Controls</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-2">
                        <p>Control your privacy settings and data preferences.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Data sharing preferences</li>
                            <li>Cookie settings</li>
                            <li>Marketing communications</li>
                            <li>Account visibility</li>
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const NonCollapsible: Story = {
    args: {
        className: 'w-full max-w-md',
        collapsible: false,
        defaultValue: 'item-1',
        type: 'single',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Always One Open</AccordionTrigger>
                <AccordionContent>
                    This accordion always has one item open. You cannot close all items.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Switch Between Items</AccordionTrigger>
                <AccordionContent>
                    Clicking another trigger will close the current item and open the new one.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>No Empty State</AccordionTrigger>
                <AccordionContent>
                    This ensures there&apos;s always content visible to the user.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const WithRichContent: Story = {
    args: {
        className: 'w-full max-w-2xl',
        collapsible: true,
        type: 'single',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Features Overview</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">Performance</h4>
                                <p className="text-sm text-muted-foreground">
                                    Lightning-fast processing with optimized algorithms.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">Security</h4>
                                <p className="text-sm text-muted-foreground">
                                    Enterprise-grade security with end-to-end encryption.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
                                type="button"
                            >
                                Learn More
                            </button>
                            <button className="px-3 py-1 border rounded text-sm" type="button">
                                Try Demo
                            </button>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Technical Specifications</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-3">
                        <table className="w-full text-sm">
                            <tbody className="space-y-2">
                                <tr className="border-b">
                                    <td className="py-2 font-medium">Platform</td>
                                    <td className="py-2">Cross-platform (Web, iOS, Android)</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-medium">API Version</td>
                                    <td className="py-2">v2.1.0</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-medium">Database</td>
                                    <td className="py-2">PostgreSQL 14+</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-medium">Uptime</td>
                                    <td className="py-2">99.9% SLA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Integration Examples</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2">REST API</h4>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                                <code>{`curl -X GET "https://api.example.com/v1/data" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json"`}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">JavaScript SDK</h4>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                                <code>{`import { Client } from '@example/sdk';

const client = new Client('YOUR_API_KEY');
const data = await client.getData();`}</code>
                            </pre>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Disabled: Story = {
    args: {
        className: 'w-full max-w-md',
        collapsible: true,
        disabled: true,
        type: 'single',
    },
    render: (args) => (
        <Accordion {...args}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Disabled Accordion</AccordionTrigger>
                <AccordionContent>
                    This content cannot be accessed because the accordion is disabled.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Another Disabled Item</AccordionTrigger>
                <AccordionContent>
                    This content is also inaccessible due to the disabled state.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
