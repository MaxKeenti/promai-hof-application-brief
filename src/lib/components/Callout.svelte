<script lang="ts">
	import type { NoticeTone } from '$lib/data/brief';

	let {
		tone = 'info',
		title,
		children
	}: {
		tone?: NoticeTone;
		title: string;
		children: import('svelte').Snippet;
	} = $props();

	const marks: Record<NoticeTone, string> = { info: 'i', good: '✓', warn: '!', alert: '!' };
</script>

<aside class:info={tone === 'info'} class:good={tone === 'good'} class:warn={tone === 'warn'} class:alert={tone === 'alert'}>
	<span class="mark" aria-hidden="true">{marks[tone]}</span>
	<div class="content"><h3>{title}</h3>{@render children()}</div>
</aside>

<style>
	aside { display: flex; gap: 12px; margin: 24px 0; padding: 17px 18px; border: 1px solid; border-radius: 14px; }
	.mark { display: grid; flex: 0 0 auto; width: 23px; height: 23px; place-items: center; border-radius: 50%; font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; line-height: 1; }
	.content { min-width: 0; }
	h3 { margin: 1px 0 5px; font-size: 0.94rem; font-weight: 700; line-height: 1.4; }
	:global(p:last-child), :global(ul:last-child) { margin-bottom: 0; }
	:global(ul) { padding-left: 19px; }
	.info { border-color: #c8e4ef; background: var(--blue-soft); }
	.info .mark { color: var(--blue); background: #d4edf6; }
	.good { border-color: #c9e8d6; background: var(--green-soft); }
	.good .mark { color: var(--green); background: #d6f0df; }
	.warn { border-color: #efdbac; background: var(--amber-soft); }
	.warn .mark { color: var(--amber); background: #ffebbc; }
	.alert { border-color: #f2cdc9; background: var(--red-soft); }
	.alert .mark { color: var(--red); background: #ffe0dc; }
</style>
