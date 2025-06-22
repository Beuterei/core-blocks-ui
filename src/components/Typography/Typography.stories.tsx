import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Typography',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
    render: () => (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Taxing Laughter: The Joke Tax Chronicles
        </h1>
    ),
};

export const H2: Story = {
    render: () => (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The People of the Kingdom
        </h2>
    ),
};

export const H3: Story = {
    render: () => (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Joke Tax</h3>
    ),
};

export const H4: Story = {
    render: () => (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
        </h4>
    ),
};

// Paragraph component
export const Paragraph: Story = {
    render: () => (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the error of his ways and
            repealed the joke tax.
        </p>
    ),
};

// Blockquote component
export const Blockquote: Story = {
    render: () => (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            "After all," he said, "everyone enjoys a good joke, so it's only fair that they should
            pay for the privilege."
        </blockquote>
    ),
};

// Table component
export const Table: Story = {
    render: () => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            King&apos;s Treasury
                        </th>
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            People&apos;s happiness
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Empty
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Overflowing
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Modest
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Satisfied
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Full
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Ecstatic
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ),
};

// List component
export const List: Story = {
    render: () => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners: 20 gold coins</li>
        </ul>
    ),
};

// Inline code component
export const InlineCode: Story = {
    render: () => (
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            @radix-ui/react-alert-dialog
        </code>
    ),
};

// Lead text component
export const Lead: Story = {
    render: () => (
        <p className="text-muted-foreground text-xl">
            A modal dialog that interrupts the user with important content and expects a response.
        </p>
    ),
};

// Large text component
export const Large: Story = {
    render: () => <div className="text-lg font-semibold">Are you absolutely sure?</div>,
};

// Small text component
export const Small: Story = {
    render: () => <small className="text-sm leading-none font-medium">Email address</small>,
};

// Muted text component
export const Muted: Story = {
    render: () => <p className="text-muted-foreground text-sm">Enter your email address.</p>,
};
