import theme from '../src/theme';
import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'theme',
            values: [{ name: 'theme', value: 'hsl(var(--background))' }],
        },
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
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                theme,
            },
            defaultTheme: 'theme',
            Provider: ThemeProvider,
        }),
    ],

    tags: ['autodocs'],
};

export default preview;
