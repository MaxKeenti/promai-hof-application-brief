<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		equivalenciasPropuestas,
		materiasDisponibles,
		type Semestre
	} from '$lib/data/materias.js';
	import Section from './section.svelte';
	import Stat from './stat.svelte';

	const semestres: Semestre[] = [7, 8];
	const porSemestre = (s: Semestre) => materiasDisponibles.filter((m) => m.semestre === s);
	const creditos = (s: Semestre) => porSemestre(s).reduce((total, m) => total + m.creditos, 0);

	const totalCreditos = materiasDisponibles.reduce((total, m) => total + m.creditos, 0);
	const academias = new Set(materiasDisponibles.map((m) => m.academia));
</script>

<Section
	id="disponibles"
	index="01 — UPIICSA"
	title="Materias disponibles en 7.º y 8.º semestre"
	lead="Catálogo vigente de asignaturas que puedo cursar en UPIICSA durante el periodo de intercambio. Las marcadas como «cubierta» ya tienen una equivalencia en la propuesta EHU de la sección 02."
>
	<div class="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
		<Stat value={String(materiasDisponibles.length)} label="Materias" hint="7.º y 8.º semestre" />
		<Stat value={String(totalCreditos)} label="Créditos" hint="Suma del catálogo" />
		<Stat
			value={String(porSemestre(7).length)}
			label="7.º semestre"
			hint={`${creditos(7)} créditos`}
		/>
		<Stat
			value={String(porSemestre(8).length)}
			label="8.º semestre"
			hint={`${creditos(8)} créditos`}
		/>
	</div>

	<div class="flex flex-col gap-8">
		{#each semestres as semestre (semestre)}
			<div>
				<div class="mb-3 flex items-baseline justify-between gap-4">
					<h3 class="font-heading text-lg font-semibold">{semestre}.º semestre</h3>
					<span class="text-xs text-muted-foreground tabular-nums">
						{porSemestre(semestre).length} materias · {creditos(semestre)} créditos
					</span>
				</div>

				<div class="overflow-x-auto border border-border">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="bg-muted/60 text-left">
								<th class="px-3 py-2 font-medium">Materia</th>
								<th class="px-3 py-2 font-medium">Academia</th>
								<th class="px-3 py-2 text-right font-medium">Créditos</th>
								<th class="px-3 py-2 font-medium">Propuesta EHU</th>
							</tr>
						</thead>
						<tbody>
							{#each porSemestre(semestre) as materia (materia.nombre)}
								{@const cubierta = equivalenciasPropuestas.has(materia.nombre)}
								<tr class="border-t border-border align-top">
									<td class="px-3 py-2 font-medium">{materia.nombre}</td>
									<td class="px-3 py-2 text-muted-foreground">{materia.academia}</td>
									<td class="px-3 py-2 text-right tabular-nums">{materia.creditos}</td>
									<td class="px-3 py-2">
										{#if cubierta}
											<Badge>Cubierta</Badge>
										{:else}
											<span class="text-xs text-muted-foreground">—</span>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/each}
	</div>

	<p class="mt-4 text-xs text-muted-foreground">
		{academias.size} academias representadas: {[...academias].join(', ')}.
	</p>
</Section>
