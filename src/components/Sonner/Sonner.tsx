import { useTheme } from '../ThemeProvider/ThemeProvider';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

export const Toaster = ({ ...props }: ToasterProps) => {
    const { currentTheme } = useTheme();

    // TODO: add full theme override
    return (
        <Sonner
            // eslint-disable-next-line react/forbid-component-props
            style={
                {
                    '--normal-bg': 'var(--popover)',
                    '--normal-border': 'var(--border)',
                    '--normal-text': 'var(--popover-foreground)',
                } as React.CSSProperties
            }
            theme={currentTheme as ToasterProps['theme']}
            {...props}
        />
    );
};
