import {
    Range as SliderPrimitiveRange,
    Root as SliderPrimitiveRoot,
    Thumb as SliderPrimitiveThumb,
    Track as SliderPrimitiveTrack,
} from '@radix-ui/react-slider';
import { cx } from '@twind/core';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

const Slider = forwardRef<
    ElementRef<typeof SliderPrimitiveRoot>,
    ComponentPropsWithoutRef<typeof SliderPrimitiveRoot>
>(({ className, ...props }, ref) => (
    <SliderPrimitiveRoot
        className={cx('relative flex w-full touch-none select-none items-center', className)}
        ref={ref}
        {...props}
    >
        <SliderPrimitiveTrack className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary cursor-pointer">
            <SliderPrimitiveRange className="absolute h-full bg-primary" />
        </SliderPrimitiveTrack>
        <SliderPrimitiveThumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer" />
    </SliderPrimitiveRoot>
));

Slider.displayName = SliderPrimitiveRoot.displayName;

export { Slider };
