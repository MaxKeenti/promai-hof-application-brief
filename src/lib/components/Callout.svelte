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
</script>

<aside class:info={tone === 'info'} class:good={tone === 'good'} class:warn={tone === 'warn'} class:alert={tone === 'alert'}>
	<h3>{title}</h3>
	{@render children()}
</aside>

<style>
	aside {
		position: relative;
		margin: 24px 0;
		padding: 18px 20px 18px 22px;
		border: 1px solid;
		border-radius: 10px;
	}

	aside::before {
		position: absolute;
		top: 14px;
		bottom: 14px;
		left: 0;
		width: 4px;
		border-radius: 4px;
		content: '';
	}

	h3 {
		margin: 0 0 7px;
		font-size: 1rem;
	}

	:global(p:last-child) { margin-bottom: 0; }
	.info { border-color: #b6ddec; background: var(--blue-soft); }
	.info::before { background: var(--blue); }
	.good { border-color: #b9dec9; background: var(--green-soft); }
	.good::before { background: var(--green); }
	.warn { border-color: #f0d496; background: var(--amber-soft); }
	.warn::before { background: var(--amber); }
	.alert { border-color: #edc1bd; background: var(--red-soft); }
	.alert::before { background: var(--red); }
</style>
