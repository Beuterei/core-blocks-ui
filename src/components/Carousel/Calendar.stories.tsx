import { StoryPage } from '../../../storybook/preview';
import { Card, CardContent } from '../Card/Card';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './Carousel';
import { type Meta, type StoryObj } from '@storybook/react';
import { type ComponentProps, useEffect, useState } from 'react';

const meta = {
    component: Carousel,
    parameters: {
        docs: {
            page: () => (
                <StoryPage
                    externalLinks={{
                        'API reference': 'https://www.embla-carousel.com/api/',
                        'Shadcn reference': 'https://ui.shadcn.com/docs/components/carousel',
                    }}
                />
            ),
        },
    },
    subcomponents: {
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
    },
    title: 'Components/Carousel',
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CarouselContent>
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                        <CarouselItem key={`default-item-${item}`}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{item}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </>
        ),
        className: 'w-full max-w-xs',
    },
};

export const Size: Story = {
    args: {
        children: (
            <>
                <CarouselContent>
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                        <CarouselItem
                            className="md:basis-1/2 lg:basis-1/3"
                            key={`size-item-${item}`}
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{item}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </>
        ),
        className: 'w-full max-w-sm',
        opts: {
            align: 'start',
        },
    },
};

export const Spacing: Story = {
    args: {
        children: (
            <>
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                        <CarouselItem
                            className="pl-1 md:basis-1/2 lg:basis-1/3"
                            key={`spacing-item-${item}`}
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{item}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </>
        ),
        className: 'w-full max-w-sm',
    },
};

export const Orientation: Story = {
    args: {
        children: (
            <>
                <CarouselContent className="-mt-1 h-[200px]">
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                        <CarouselItem
                            className="pt-1 md:basis-1/2"
                            key={`orientation-item-${item}`}
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{item}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </>
        ),
        className: 'w-full max-w-xs',
        opts: {
            align: 'start',
        },
        orientation: 'vertical',
    },
};

const ApiExample = (args: ComponentProps<typeof Carousel>) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mx-auto max-w-xs">
            <Carousel {...args} className="w-full max-w-xs" setApi={setApi}>
                <CarouselContent>
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                        <CarouselItem key={`api-item-${item}`}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{item}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    );
};

export const Api: Story = {
    render: ApiExample,
};
