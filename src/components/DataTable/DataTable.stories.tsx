import { StoryPage } from '../../../storybook/preview';
import { Button } from '../Button/Button';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    parameters: {
        docs: {
            page: () => <StoryPage />,
        },
    },
    title: 'Components/DataTable',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Button asChild>
            <a
                href="https://ui.shadcn.com/docs/components/data-table"
                rel="noreferrer"
                target="_blank"
            >
                To the docs
            </a>
        </Button>
    ),
};
