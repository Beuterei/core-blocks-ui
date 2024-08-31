import { ThemeProvider, useTheme } from '@/main';
import { type SupportedThemes, twindConfig } from '@/twind.config';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { defineConfig } from '@twind/core';
import install from '@twind/with-react';
import { type PropsWithChildren, useEffect } from 'react';

install(defineConfig(twindConfig()));

const ThemeSwitcher = ({ children, theme }: PropsWithChildren<{ theme: SupportedThemes }>) => {
    const { setCurrentTheme } = useTheme();

    useEffect(() => {
        setCurrentTheme(theme);
    });

    return children;
};

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        backgrounds: { disable: true },
        controls: {
            matchers: {
                color: /(background|color)$/iu,
                date: /date$/iu,
            },
            expanded: true,
        },
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...MINIMAL_VIEWPORTS,
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
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'base',
            toolbar: {
                icon: 'circlehollow',
                dynamicTitle: true,
                items: [
                    { value: 'base', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                    { value: 'light-green', title: 'Light Green' },
                    { value: 'dark-green', title: 'Dark Green' },
                ],
            },
        },
    },
    decorators: [
        // eslint-disable-next-line unicorn/prevent-abbreviations
        (StoryFn, context) => {
            const theme = context.globals.theme || 'base';

            const containerClass = context.viewMode === 'docs' ? 'min-h-52' : 'h-screen';

            return (
                <ThemeProvider>
                    <div
                        className={
                            'flex items-center justify-center bg-background p-10 ' + containerClass
                        }
                    >
                        <ThemeSwitcher theme={theme}>
                            <StoryFn />
                        </ThemeSwitcher>
                    </div>
                </ThemeProvider>
            );
        },
    ],
    tags: ['autodocs'],
};

export default preview;
