import { Root as AspectRatioPrimitiveRoot } from '@radix-ui/react-aspect-ratio';
import { type ComponentProps } from 'react';

export const AspectRatio = ({ ...props }: ComponentProps<typeof AspectRatioPrimitiveRoot>) => {
    return <AspectRatioPrimitiveRoot data-slot="aspect-ratio" {...props} />;
};
