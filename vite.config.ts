// eslint-disable-next-line canonical/id-match
import package_ from './package.json';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        sourcemap: true,
        lib: {
            entry: ['src/main.ts'],
            name: 'CoreBlocksUI',
        },
        rollupOptions: {
            // eslint-disable-next-line canonical/id-match
            external: Object.keys(package_.peerDependencies || {}),
        },
    },
});
