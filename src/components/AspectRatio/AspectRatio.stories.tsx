import { StoryPage } from '../../../storybook/preview';
import { AspectRatio } from './AspectRatio';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: AspectRatio,
    title: 'Components/AspectRatio',
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 16 / 9,
    },
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://www.radix-ui.com/primitives/docs/components/aspect-ratio#api-reference',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/aspect-ratio',
                    }}
                />
            ),
        },
    },
    render: (args) => (
        <div className="w-[450px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">🖼️</div>
                        <div className="text-sm font-medium">16:9 Aspect Ratio</div>
                        <div className="text-xs opacity-75">Default Example</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Square: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 1,
    },
    render: (args) => (
        <div className="w-[300px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">⬜</div>
                        <div className="text-sm font-medium">1:1 Square</div>
                        <div className="text-xs opacity-75">Perfect Square</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Portrait: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 3 / 4,
    },
    render: (args) => (
        <div className="w-[300px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-purple-400 to-purple-600 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">📱</div>
                        <div className="text-sm font-medium">3:4 Portrait</div>
                        <div className="text-xs opacity-75">Vertical Layout</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Video: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 16 / 9,
    },
    render: (args) => (
        <div className="w-[600px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">▶</div>
                        <div className="text-sm font-medium">Video Player</div>
                        <div className="text-xs opacity-75">16:9 Aspect Ratio</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const WithContent: Story = {
    args: {
        className: 'bg-muted rounded-lg border',
        ratio: 4 / 3,
    },
    render: (args) => (
        <div className="w-[400px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold">Card Content</h3>
                    <p className="text-sm text-muted-foreground">
                        This demonstrates how AspectRatio can be used with any content, not just
                        images.
                    </p>
                    <div className="mt-4 rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
                        4:3 Ratio
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const UltraWide: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 21 / 9,
    },
    render: (args) => (
        <div className="w-[700px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">🖥️</div>
                        <div className="text-sm font-medium">Ultra Wide</div>
                        <div className="text-xs opacity-75">21:9 Cinema</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Mobile: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 9 / 16,
    },
    render: (args) => (
        <div className="w-[200px]">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-pink-500 to-orange-500 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-2xl">📱</div>
                        <div className="text-xs font-medium">Mobile</div>
                        <div className="text-xs opacity-75">9:16</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Responsive: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 16 / 9,
    },
    render: (args) => (
        <div className="w-full max-w-2xl">
            <AspectRatio {...args}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 text-white">
                    <div className="text-center">
                        <div className="mb-2 text-4xl">📐</div>
                        <div className="text-sm font-medium">Responsive</div>
                        <div className="text-xs opacity-75">Scales with container</div>
                    </div>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const WithImage: Story = {
    args: {
        className: 'bg-muted rounded-lg',
        ratio: 16 / 9,
    },
    render: (args) => (
        <div className="w-[450px]">
            <AspectRatio {...args}>
                <img
                    alt="Gradient landscape with mountain silhouette"
                    className="h-full w-full rounded-lg object-cover"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjQwIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cGF0aCBkPSJNMTAwIDM1MEwyMDAgMjUwTDM1MCAzMDBMNTAwIDIwMEw3MDAgMzUwSDE0MFoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSI4MDAiIHkyPSI0NTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzNCODJGNiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4QjVDRjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                />
            </AspectRatio>
        </div>
    ),
};
