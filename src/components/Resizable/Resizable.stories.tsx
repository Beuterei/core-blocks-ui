import { StoryPage } from '../../../storybook/preview';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './Resizable';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
    component: ResizablePanelGroup,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference':
                            'https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels',
                        'react-resizable-panels Docs':
                            'https://github.com/bvaughn/react-resizable-panels',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/resizable',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        ResizableHandle,
        ResizablePanel,
    },
    title: 'Components/Resizable',
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Two</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Three</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </>
        ),
        className: 'max-w-md rounded-lg border md:min-w-[450px]',
        direction: 'horizontal',
    },
};
