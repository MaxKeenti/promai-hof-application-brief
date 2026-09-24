<script lang="ts">
	import MateriasDisponibles from '$lib/components/brief/materias-disponibles.svelte';
	import MateriasPropuestas from '$lib/components/brief/materias-propuestas.svelte';
</script>

<svelte:head>
	<title>Brief de intercambio — UPIICSA · UPV/EHU</title>
	<meta
		name="description"
		content="Materias disponibles en UPIICSA (7.º y 8.º semestre) y asignaturas propuestas en la UPV/EHU, con equivalencias."
	/>
</svelte:head>

<div class="min-h-svh bg-background text-foreground">
	<div class="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
		<header class="mb-12 border-b border-border pb-10">
			<p class="font-mono text-xs tracking-[0.2em] text-primary uppercase">
				Movilidad académica · 2026
			</p>
			<h1 class="mt-3 font-heading text-4xl leading-tight font-semibold text-balance sm:text-5xl">
				Propuesta de equivalencias UPIICSA&nbsp;→&nbsp;UPV/EHU
			</h1>
			<p class="mt-4 max-w-prose leading-relaxed text-muted-foreground">
				Documento de apoyo a la solicitud de intercambio. Reúne, en un solo lugar, el catálogo de
				materias que tengo disponibles en UPIICSA para 7.º y 8.º semestre y la selección de
				asignaturas que propongo cursar en la Escuela de Ingeniería de Bilbao, con la equivalencia
				de cada una.
			</p>
		</header>

		<main class="flex flex-col gap-12">
			<MateriasDisponibles />
			<MateriasPropuestas />
		</main>

		<footer class="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
			<p>
				Datos transcritos de <span class="font-mono">materias_disponibles_7mo_8vo.xlsx</span> y
				<span class="font-mono">materias_propuestas_EHU.xlsx</span>. Los enlaces apuntan a las
				fichas oficiales de la UPV/EHU para el curso académico 2026.
			</p>
		</footer>
	</div>
</div>
