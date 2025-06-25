import { StoryPage } from '../../../storybook/preview';
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from './Chart';
import { type Meta, type StoryObj } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
    {
        desktop: 124,
        mobile: 142,
        month: 'January',
        nintendoDs: 89,
        playstation: 136,
        smartFridge: 78,
        xbox: 118,
    },
    {
        desktop: 118,
        mobile: 156,
        month: 'February',
        nintendoDs: 95,
        playstation: 144,
        smartFridge: 82,
        xbox: 125,
    },
    {
        desktop: 135,
        mobile: 147,
        month: 'March',
        nintendoDs: 92,
        playstation: 152,
        smartFridge: 85,
        xbox: 131,
    },
    {
        desktop: 142,
        mobile: 164,
        month: 'April',
        nintendoDs: 87,
        playstation: 148,
        smartFridge: 79,
        xbox: 127,
    },
    {
        desktop: 129,
        mobile: 172,
        month: 'May',
        nintendoDs: 98,
        playstation: 159,
        smartFridge: 88,
        xbox: 134,
    },
    {
        desktop: 138,
        mobile: 181,
        month: 'June',
        nintendoDs: 102,
        playstation: 168,
        smartFridge: 91,
        xbox: 140,
    },
];

const chartConfig = {
    desktop: {
        color: 'var(--chart-1)',
        label: 'Desktop',
    },
    mobile: {
        color: 'var(--chart-2)',
        label: 'Mobile',
    },
    nintendoDs: {
        color: 'var(--chart-3)',
        label: 'Nintendo DS',
    },
    playstation: {
        color: 'var(--chart-4)',
        label: 'Playstation',
    },
    smartFridge: {
        label: 'Smart Fridge',
        theme: {
            dark: '#dc2626',
            'dark-red': '#eb5d25',
            light: '#2563eb',
            'light-red': '#2145d9',
        },
    },
    xbox: {
        color: 'var(--chart-5)',
        label: 'Xbox',
    },
} satisfies ChartConfig;

const meta = {
    component: ChartContainer,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'More Examples': 'https://ui.shadcn.com/charts',
                        'Recharts Docs': 'https://recharts.org/en-US',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/chart',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        ChartLegend,
        ChartLegendContent,
        ChartStyle,
        ChartTooltip,
        ChartTooltipContent,
    },
    title: 'Components/Chart',
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                <Bar dataKey="nintendoDs" fill="var(--color-nintendoDs)" radius={4} />
                <Bar dataKey="playstation" fill="var(--color-playstation)" radius={4} />
                <Bar dataKey="smartFridge" fill="var(--color-smartFridge)" radius={4} />
                <Bar dataKey="xbox" fill="var(--color-xbox)" radius={4} />
            </BarChart>
        ),
        className: 'min-h-[200px] w-full',
        config: chartConfig,
    },
};
