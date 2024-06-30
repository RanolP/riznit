import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import { fileURLToPath } from 'node:url';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: fileURLToPath(new URL('./src', import.meta.url)),
			},
		],
	},
	plugins: [
		biomePlugin(),
		TanStackRouterVite({
			semicolons: true,
			experimental: {
				enableCodeSplitting: true,
			},
		}),
		UnoCSS(),
		react(),
	],
});
