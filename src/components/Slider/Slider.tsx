import { cn } from '../../lib/utils';
import {
    Range as SliderPrimitiveRange,
    Root as SliderPrimitiveRoot,
    Thumb as SliderPrimitiveThumb,
    Track as SliderPrimitiveTrack,
} from '@radix-ui/react-slider';
import { type ComponentProps, useMemo } from 'react';

export const Slider = ({
    className,
    defaultValue,
    max = 100,
    min = 0,
    value,
    ...props
}: ComponentProps<typeof SliderPrimitiveRoot>) => {
    const values = useMemo(
        () =>
            Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
        [defaultValue, max, min, value],
    );

    return (
        <SliderPrimitiveRoot
            className={cn(
                'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
                className,
            )}
            data-slot="slider"
            defaultValue={defaultValue}
            max={max}
            min={min}
            value={value}
            {...props}
        >
            <SliderPrimitiveTrack
                className={cn(
                    'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
                )}
                data-slot="slider-track"
            >
                <SliderPrimitiveRange
                    className={cn(
                        'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
                    )}
                    data-slot="slider-range"
                />
            </SliderPrimitiveTrack>
            {Array.from({ length: values.length }, (_, index) => (
                <SliderPrimitiveThumb
                    className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 cursor-grab"
                    data-slot="slider-thumb"
                    key={index}
                />
            ))}
        </SliderPrimitiveRoot>
    );
};
