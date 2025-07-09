import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import typography from '@tailwindcss/typography';

export default defineConfig({
	plugins: [tailwindcss({
		content: [
			'./src/**/*.{html,js,svelte,ts}',
		],
		theme: {
			extend: {
			fontFamily: {
				sans: ['"JetBrains Mono"', 'sans-serif'],
				hebrew: ['"Noto Sans Hebrew"', 'sans-serif'],
			},
		},
		},
		plugins: [typography],
	}), sveltekit()],
	base: process.env.BASE_PATH
});
