import { Alert, AlertDescription, AlertTitle } from './Alert';
import { type Meta, type StoryObj } from '@storybook/react';
import {
    AlertCircleIcon,
    CheckCircle2Icon,
    InfoIcon,
    TerminalIcon,
    TriangleAlertIcon,
    XCircleIcon,
} from 'lucide-react';

const meta = {
    component: Alert,
    title: 'Components/Alert',
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert>
            <TerminalIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
    ),
};

export const WithoutIcon: Story = {
    render: () => (
        <Alert>
            <AlertTitle>Update available</AlertTitle>
            <AlertDescription>
                A new software version is available. Please update to continue.
            </AlertDescription>
        </Alert>
    ),
};

export const TitleOnly: Story = {
    render: () => (
        <Alert>
            <InfoIcon />
            <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
        </Alert>
    ),
};

export const DescriptionOnly: Story = {
    render: () => (
        <Alert>
            <CheckCircle2Icon />
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </Alert>
    ),
};

export const Success: Story = {
    render: () => (
        <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
        </Alert>
    ),
};

export const Warning: Story = {
    render: () => (
        <Alert>
            <TriangleAlertIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                This action cannot be undone. Please proceed with caution.
            </AlertDescription>
        </Alert>
    ),
};

export const Error: Story = {
    render: () => (
        <Alert variant="destructive">
            <XCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
                <p>Please verify your billing information and try again.</p>
                <ul className="list-inside list-disc text-sm mt-2">
                    <li>Check your card details</li>
                    <li>Ensure sufficient funds</li>
                    <li>Verify billing address</li>
                </ul>
            </AlertDescription>
        </Alert>
    ),
};

export const MultipleAlerts: Story = {
    render: () => (
        <div className="grid w-full max-w-xl items-start gap-4">
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Success! Your changes have been saved</AlertTitle>
                <AlertDescription>
                    This is an alert with icon, title and description.
                </AlertDescription>
            </Alert>
            <Alert>
                <InfoIcon />
                <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
            </Alert>
            <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Unable to process your payment.</AlertTitle>
                <AlertDescription>
                    <p>Please verify your billing information and try again.</p>
                    <ul className="list-inside list-disc text-sm">
                        <li>Check your card details</li>
                        <li>Ensure sufficient funds</li>
                        <li>Verify billing address</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
    ),
};

export const RichContent: Story = {
    render: () => (
        <Alert>
            <InfoIcon />
            <AlertTitle>System Maintenance Scheduled</AlertTitle>
            <AlertDescription>
                <div className="space-y-2">
                    <p>We will be performing scheduled maintenance on our systems.</p>
                    <div className="bg-muted p-3 rounded text-sm">
                        <strong>Maintenance Window:</strong>
                        <br />
                        Date: Sunday, March 15, 2024
                        <br />
                        Time: 2:00 AM - 4:00 AM UTC
                        <br />
                        Duration: Approximately 2 hours
                    </div>
                    <p className="text-sm">
                        During this time, some services may be temporarily unavailable. We apologize
                        for any inconvenience.
                    </p>
                </div>
            </AlertDescription>
        </Alert>
    ),
};

export const LongContent: Story = {
    render: () => (
        <Alert>
            <AlertCircleIcon />
            <AlertTitle>Important Security Update</AlertTitle>
            <AlertDescription>
                <div className="space-y-3">
                    <p>
                        We have identified a security vulnerability that affects user accounts
                        created before January 1, 2024. While no data has been compromised, we
                        strongly recommend taking the following actions:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Update your password immediately</li>
                        <li>Enable two-factor authentication if not already enabled</li>
                        <li>Review your recent account activity</li>
                        <li>Update your recovery email address</li>
                    </ol>
                    <p className="text-sm text-muted-foreground">
                        If you have any questions or concerns, please contact our security team at
                        security@example.com or call our support line at 1-800-SECURITY.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <button
                            className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
                            type="button"
                        >
                            Update Password
                        </button>
                        <button className="px-3 py-1 border rounded text-sm" type="button">
                            Learn More
                        </button>
                    </div>
                </div>
            </AlertDescription>
        </Alert>
    ),
};
