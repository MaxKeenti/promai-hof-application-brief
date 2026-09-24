<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		index,
		title,
		lead,
		children
	}: { id: string; index: string; title: string; lead?: string; children: Snippet } = $props();
</script>

<section {id} class="scroll-mt-20 border-t border-border pt-10 first:border-t-0 first:pt-0">
	<header class="mb-6 flex flex-col gap-2">
		<span class="font-mono text-xs tracking-[0.2em] text-primary uppercase">{index}</span>
		<h2 class="font-heading text-2xl font-semibold text-balance sm:text-3xl">{title}</h2>
		{#if lead}
			<p class="max-w-prose text-sm leading-relaxed text-muted-foreground">{lead}</p>
		{/if}
	</header>
	{@render children()}
</section>
