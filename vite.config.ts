import packageJson from './package.json';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps'


export default defineConfig(({ command }) => ({
    build: {
        lib: {
            entry: {
                index: 'src/index.ts',
                styles: 'src/index.css'
            },
            fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
            formats: ['es', 'cjs'],
        },
        outDir: 'dist',
        sourcemap: true,
        cssCodeSplit: true,
    },
    define: command === 'build' ? { 'process.env.NODE_ENV': "'production'" } : undefined,
    plugins: [
        react(),
        externalizeDeps(),
        dts({
            tsconfigPath: './tsconfig.build.json',
        }),
        tailwindcss(),
    ],
}));
