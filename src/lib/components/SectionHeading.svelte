<script lang="ts">
	let { english, spanish }: { english: string; spanish: string } = $props();
</script>

<h2>{english} <span lang="es">/ {spanish}</span></h2>

<style>
	h2 { margin: 0 0 16px; font-size: clamp(1.45rem, 3vw, 2rem); letter-spacing: -0.025em; }
	span { color: var(--muted); font-size: 0.72em; font-weight: 550; }
</style>
