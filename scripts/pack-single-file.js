// Post-step for `bun run build:single`. SvelteKit inlines all JS, CSS and assets
// into build/index.html, but still writes the individual chunks alongside it.
// Keep only the one file, under a name that reads well as an email attachment.
import { readdirSync, renameSync, rmSync, statSync } from 'node:fs';

const OUT = 'build';
const NAME = 'promai-hof-application-brief.html';

for (const entry of readdirSync(OUT)) {
	if (entry !== 'index.html') rmSync(`${OUT}/${entry}`, { recursive: true, force: true });
}

renameSync(`${OUT}/index.html`, `${OUT}/${NAME}`);

const kb = Math.round(statSync(`${OUT}/${NAME}`).size / 1024);
console.log(`\n  Single file: ${OUT}/${NAME} (${kb} KB)\n`);
