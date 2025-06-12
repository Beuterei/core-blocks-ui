// @ts-check
import { auto, vitest } from '@beuluis/eslint-config';
import { config } from 'typescript-eslint';

export default config(
    auto,
    {
        extends: vitest,
        files: [
            '**/*.?(component-){spec,test}.{js,mjs,cjs,jsx}',
            '**/{__mocks__,__tests__}/**/*.{js,mjs,cjs,jsx}',
            '**/vite.config.{js,mjs,cjs}',
        ],
    },
    {
        rules: {
            'react/forbid-component-props': [
                'error',
                {
                    forbid: [
                        'style', // only forbid style, allowing className
                    ],
                },
            ],
        },
    },
    {
        files: ['**/*.stories.tsx', '**/*.stories.ts'],
        rules: {
            'canonical/filename-match-exported': 'off',
        },
    },
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
    },
);
