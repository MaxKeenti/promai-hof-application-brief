<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { materiasAlternativas, materiasPropuestas } from '$lib/data/materias.js';
	import { fichasAbiertas } from '$lib/state/fichas.svelte.js';
	import Ficha from './ficha.svelte';
	import Section from './section.svelte';

	const todas = [...materiasPropuestas, ...materiasAlternativas];
	const codigos = todas.map((m) => m.codigo);
	const todasAbiertas = $derived(fichasAbiertas.cuantas === codigos.length);
</script>

<Section
	id="guias"
	index="03 — Guías docentes"
	title="Contenido de cada asignatura"
	lead="La guía docente completa de las once asignaturas, transcrita de las fichas oficiales de la UPV/EHU para el curso 2026/27: carga horaria, competencias, temario, metodología, evaluación y bibliografía. No hace falta salir del documento."
>
	<div class="mb-4 flex items-center justify-between gap-4">
		<p class="text-xs text-muted-foreground">
			{materiasPropuestas.length} de la propuesta principal · {materiasAlternativas.length} alternativas
		</p>
		<Button
			variant="outline"
			size="sm"
			onclick={() =>
				todasAbiertas ? fichasAbiertas.cerrarTodas() : fichasAbiertas.abrirTodas(codigos)}
		>
			{todasAbiertas ? 'Cerrar todas' : 'Abrir todas'}
		</Button>
	</div>

	<div class="flex flex-col gap-3">
		{#each materiasPropuestas as materia (materia.codigo)}
			<Ficha {materia} />
		{/each}
	</div>

	<h3 class="mt-8 mb-3 font-heading text-lg font-semibold">Alternativas</h3>
	<div class="flex flex-col gap-3">
		{#each materiasAlternativas as materia (materia.codigo)}
			<Ficha {materia} alternativa />
		{/each}
	</div>
</Section>
