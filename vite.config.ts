import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

/**
 * `SINGLE_FILE=1 vite build` emits `build/index.html` as one self-contained file
 * (JS, CSS and fonts inlined) that can be emailed and opened from disk.
 * Without it, the normal multi-file static build is produced.
 */
const singleFile = !!process.env.SINGLE_FILE;

export default defineConfig({
	define: { __SINGLE_FILE__: JSON.stringify(singleFile) },
	build: singleFile
		? {
				// Inline every asset (fonts, images) as a data URI rather than
				// emitting it alongside the HTML.
				assetsInlineLimit: Number.MAX_SAFE_INTEGER,
				chunkSizeWarningLimit: Infinity
			}
		: {},
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			// The single file is opened over file://, where absolute asset paths
			// and a fetched route manifest would both fail.
			paths: { relative: true },
			output: singleFile ? { bundleStrategy: 'inline' } : {},
			// Only `/` goes into the document; other routes are deliberately skipped.
			prerender: singleFile ? { entries: ['/'], handleUnseenRoutes: 'ignore' } : {},
			router: singleFile ? { resolution: 'client' } : {}
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
