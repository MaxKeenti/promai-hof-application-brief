<script lang="ts">
	let { value, label, hint }: { value: string; label: string; hint?: string } = $props();
</script>

<div class="border border-border bg-card p-4">
	<div class="font-heading text-3xl leading-none font-semibold tabular-nums">{value}</div>
	<div class="mt-2 text-xs font-medium tracking-wide text-foreground uppercase">{label}</div>
	{#if hint}
		<div class="mt-1 text-xs text-muted-foreground">{hint}</div>
	{/if}
</div>
