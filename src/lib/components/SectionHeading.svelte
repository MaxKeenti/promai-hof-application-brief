<script lang="ts">
	let { english, spanish, number }: { english: string; spanish: string; number: string } = $props();
</script>

<div class="heading">
	<span class="section-number">{number}</span>
	<h2>{english} <span lang="es">/ {spanish}</span></h2>
</div>

<style>
	.heading { display: flex; align-items: baseline; gap: 14px; margin: 0 0 18px; }
	.section-number { flex: 0 0 auto; color: var(--blue); font-family: 'DM Mono', monospace; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.08em; }
	h2 { margin: 0; font-family: Newsreader, Georgia, serif; font-size: clamp(1.75rem, 3vw, 2.35rem); font-weight: 600; letter-spacing: -0.038em; line-height: 1.08; }
	h2 span { color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: 0.47em; font-weight: 600; letter-spacing: 0; white-space: nowrap; }
</style>
