<script lang="ts">
	import type { Snippet } from 'svelte';
	import { TriangleAlert } from '@lucide/svelte';

	let { titulo, children }: { titulo: string; children: Snippet } = $props();
</script>

<div class="border border-warning/40 bg-warning-muted/40 p-3">
	<p class="flex items-center gap-2 text-sm font-medium">
		<TriangleAlert class="size-4 shrink-0 text-warning" />
		{titulo}
	</p>
	<div class="mt-1.5 flex flex-col gap-1.5 pl-6 text-sm leading-relaxed text-muted-foreground">
		{@render children()}
	</div>
</div>
