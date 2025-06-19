import {
    CollapsibleContent as CollapsiblePrimitiveCollapsibleContent,
    CollapsibleTrigger as CollapsiblePrimitiveCollapsibleTrigger,
    Root as CollapsiblePrimitiveRoot,
} from '@radix-ui/react-collapsible';
import { type ComponentProps } from 'react';

export const Collapsible = ({ ...props }: ComponentProps<typeof CollapsiblePrimitiveRoot>) => {
    return <CollapsiblePrimitiveRoot data-slot="collapsible" {...props} />;
};

export const CollapsibleTrigger = ({
    ...props
}: ComponentProps<typeof CollapsiblePrimitiveCollapsibleTrigger>) => {
    return <CollapsiblePrimitiveCollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
};

export const CollapsibleContent = ({
    ...props
}: ComponentProps<typeof CollapsiblePrimitiveCollapsibleContent>) => {
    return <CollapsiblePrimitiveCollapsibleContent data-slot="collapsible-content" {...props} />;
};
