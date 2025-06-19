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
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    For all native elements the normal DOM api is supported, this documentation
                    focuses on the customized DOM api.
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
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
