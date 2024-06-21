import packageJson from './package.json';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
        dts({
            tsconfigPath: './tsconfig.build.json',
        }),
    ],
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
            formats: ['es'],
        },
        rollupOptions: {
            external: Object.keys(packageJson.peerDependencies || {}),
        },
    },
});
