import { mkdir, writeFile } from 'node:fs/promises';

const target = new URL('../dist/server/index.js', import.meta.url);

await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true });
await writeFile(
	target,
	`export default {
	async fetch(request, env) {
		return env.ASSETS.fetch(request);
	}
};
`
);
