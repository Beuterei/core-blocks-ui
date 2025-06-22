import {
    defaultTheme,
    supportedThemes,
    ThemeProvider,
} from '../src/components/ThemeProvider/ThemeProvider';
// eslint-disable-next-line import/no-unassigned-import
import '../src/index.css';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import { type Preview } from '@storybook/react';
import { ExternalLink } from 'lucide-react';

export const StoryPage = ({
    externalLinks,
}: {
    readonly externalLinks?: {
        [key: string]: string;
    };
}) => {
    return (
        <>
            <Title />
            <Subtitle />
            <Description />
            For all native elements the normal DOM api is supported, this documentation focuses on
            the customized DOM api.
            {externalLinks && (
                <div
                    style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginTop: '16px' }}
                >
                    {Object.entries(externalLinks).map(([name, url]) => (
                        <a
                            href={url}
                            key={name}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.backgroundColor = 'hsl(222.2 84% 4.9%)';
                                event.currentTarget.style.opacity = '0.8';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.backgroundColor = 'hsl(222.2 84% 4.9%)';
                                event.currentTarget.style.opacity = '1';
                            }}
                            rel="noreferrer"
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'hsl(222.2 84% 4.9%)',
                                border: '1px solid hsl(217.2 32.6% 17.5%)',
                                borderRadius: '6px',
                                color: 'hsl(210 40% 98%)',
                                display: 'inline-flex',
                                fontSize: '14px',
                                fontWeight: '500',
                                gap: '4px',
                                justifyContent: 'center',
                                lineHeight: '1',
                                padding: '4px 8px',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease-in-out',
                                whiteSpace: 'nowrap',
                            }}
                            target="_blank"
                        >
                            {/* eslint-disable-next-line react/forbid-component-props */}
                            <ExternalLink style={{ height: '14px', width: '14px' }} />
                            {name}
                        </a>
                    ))}
                </div>
            )}
            <Primary />
            <Controls />
            <Stories />
        </>
    );
};

const preview: Preview = {
    decorators: [
        (StoryFunction, context) => {
            const theme = context.globals.theme ?? defaultTheme;

            localStorage.setItem('app-theme', theme); // TODO: Handle changes in non docs mode

            const containerClass = context.viewMode === 'docs' ? 'min-h-52' : 'h-screen';

            return (
                <ThemeProvider
                    localStorageKey={
                        // Use a different localStorage key for the ThemeProvider stories
                        // to avoid conflicts with the theme selector of storybook
                        context.id.startsWith('components-themeprovider')
                            ? 'theme-provider-story'
                            : undefined
                    }
                >
                    <div
                        className={
                            'flex items-center justify-center bg-background p-10 ' + containerClass
                        }
                    >
                        <StoryFunction />
                    </div>
                </ThemeProvider>
            );
        },
    ],
    globalTypes: {
        theme: {
            defaultValue: defaultTheme,
            description: 'Global theme for components',
            name: 'Theme',
            toolbar: {
                dynamicTitle: true,
                icon: 'circlehollow',
                items: supportedThemes.map((theme) => ({
                    title: theme,
                    value: theme,
                })),
            },
        },
    },
    parameters: {
        backgrounds: { disable: true },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/iu,
                date: /date$/iu,
            },
        },
        layout: 'fullscreen',
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...MINIMAL_VIEWPORTS,
            },
        },
    },
    tags: ['autodocs'],
};

export default preview;
