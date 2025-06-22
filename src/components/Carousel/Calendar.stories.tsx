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
import { useEffect, useState } from 'react';

const meta = {
    component: Carousel,
    title: 'Components/Carousel',
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Carousel className="w-full max-w-xs">
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
        </Carousel>
    ),
};

export const Size: Story = {
    render: () => (
        <Carousel
            className="w-full max-w-sm"
            opts={{
                align: 'start',
            }}
        >
            <CarouselContent>
                {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={`size-item-${item}`}>
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
        </Carousel>
    ),
};

export const Spacing: Story = {
    render: () => (
        <Carousel className="w-full max-w-sm">
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
        </Carousel>
    ),
};

export const Orientation: Story = {
    render: () => (
        <Carousel
            className="w-full max-w-xs"
            opts={{
                align: 'start',
            }}
            orientation="vertical"
        >
            <CarouselContent className="-mt-1 h-[200px]">
                {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                    <CarouselItem className="pt-1 md:basis-1/2" key={`orientation-item-${item}`}>
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
        </Carousel>
    ),
};

export const Api: Story = {
    render: () => {
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
                <Carousel className="w-full max-w-xs" setApi={setApi}>
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
    },
};
