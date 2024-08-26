import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
            shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
            propFilter: property => {
                if (property.parent) {
                    return !property.parent.fileName.includes('node_modules');
                }

                return true;
            },
        },
    },
};
export default config;
