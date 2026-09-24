<script lang="ts">
	import { Check, TriangleAlert } from '@lucide/svelte';
	import type { Estado } from '$lib/data/validacion.js';

	let { estado, class: className = '' }: { estado: Estado; class?: string } = $props();
</script>

{#if estado === 'ok'}
	<Check class={`size-4 shrink-0 text-primary ${className}`} aria-label="Correcto" />
{:else}
	<TriangleAlert
		class={`size-4 shrink-0 text-warning ${className}`}
		aria-label="Requiere atención"
	/>
{/if}
