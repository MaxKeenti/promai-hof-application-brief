<script lang="ts">
	/* The provenance link is an absolute ehu.eus URL from the data module, so
	   there is no app route for resolve() to take. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { ChevronRight, ExternalLink } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { MateriaEhu } from '$lib/data/materias.js';
	import { guiasDocentes } from '$lib/data/guias.js';
	import { fichasAbiertas } from '$lib/state/fichas.svelte.js';

	let { materia, alternativa = false }: { materia: MateriaEhu; alternativa?: boolean } = $props();

	const guia = $derived(guiasDocentes[materia.codigo]);
	const totalPresencial = $derived(guia.horas.reduce((t, h) => t + Number(h.presencial), 0));
	const totalNoPresencial = $derived(guia.horas.reduce((t, h) => t + Number(h.noPresencial), 0));
</script>

<details
	id={`ficha-${materia.codigo}`}
	class="scroll-mt-20 border border-border bg-card"
	open={fichasAbiertas.esta(materia.codigo)}
	ontoggle={(event) => fichasAbiertas.set(materia.codigo, event.currentTarget.open)}
>
	<summary
		class="flex cursor-pointer list-none items-start gap-3 p-4 hover:bg-muted/50 [&::-webkit-details-marker]:hidden"
	>
		<ChevronRight class="mt-1 size-4 shrink-0 text-muted-foreground transition-transform" />
		<div class="flex-1">
			<div class="flex flex-wrap items-center gap-2">
				<span class="font-mono text-xs text-muted-foreground tabular-nums">{materia.codigo}</span>
				<h3 class="font-heading text-lg font-semibold">{materia.asignatura}</h3>
				{#if alternativa}
					<Badge variant="outline">Alternativa</Badge>
				{/if}
			</div>
			<p class="mt-1 text-sm text-muted-foreground">
				{materia.ects} ECTS · {materia.idioma} · equivale a {materia.equivaleA}
			</p>
		</div>
	</summary>

	<div class="flex flex-col gap-6 border-t border-border p-4 sm:p-6">
		<dl class="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
			<div>
				<dt class="text-xs tracking-wide text-muted-foreground uppercase">Titulación</dt>
				<dd>{guia.titulacion}</dd>
			</div>
			<div>
				<dt class="text-xs tracking-wide text-muted-foreground uppercase">Centro</dt>
				<dd>{materia.centro} · {materia.campus}</dd>
			</div>
			<div>
				<dt class="text-xs tracking-wide text-muted-foreground uppercase">Curso</dt>
				<dd>{guia.curso}.º · curso académico {guia.cursoAcademico}</dd>
			</div>
			<div>
				<dt class="text-xs tracking-wide text-muted-foreground uppercase">Profesorado</dt>
				<dd>{guia.profesorado.join(' · ')}</dd>
			</div>
		</dl>

		<div>
			<h4 class="mb-2 font-heading text-sm font-semibold">
				Distribución de horas por tipo de enseñanza
			</h4>
			<div class="overflow-x-auto border border-border">
				<table class="w-full border-collapse text-sm">
					<thead>
						<tr class="bg-muted/60 text-left">
							<th class="px-3 py-2 font-medium">Tipo de docencia</th>
							<th class="px-3 py-2 text-right font-medium">Presencial</th>
							<th class="px-3 py-2 text-right font-medium">No presencial</th>
						</tr>
					</thead>
					<tbody>
						{#each guia.horas as hora, i (i)}
							<tr class="border-t border-border">
								<td class="px-3 py-2">{hora.tipo}</td>
								<td class="px-3 py-2 text-right tabular-nums">{hora.presencial}</td>
								<td class="px-3 py-2 text-right tabular-nums">{hora.noPresencial}</td>
							</tr>
						{/each}
						<tr class="border-t border-border bg-muted/40 font-medium">
							<td class="px-3 py-2">Total</td>
							<td class="px-3 py-2 text-right tabular-nums">{totalPresencial}</td>
							<td class="px-3 py-2 text-right tabular-nums">{totalNoPresencial}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div>
			<h4 class="mb-2 font-heading text-sm font-semibold">Descripción y contextualización</h4>
			<div class="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
				{#each guia.descripcion as parrafo, i (i)}
					<p>{parrafo}</p>
				{/each}
			</div>
		</div>

		<div class="grid gap-6 lg:grid-cols-2">
			<div>
				<h4 class="mb-2 font-heading text-sm font-semibold">Competencias</h4>
				<ul class="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
					{#each guia.competencias as competencia, i (i)}
						<li>{competencia}</li>
					{/each}
				</ul>
			</div>
			{#if guia.resultados.length}
				<div>
					<h4 class="mb-2 font-heading text-sm font-semibold">Resultados de aprendizaje</h4>
					<ul class="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
						{#each guia.resultados as resultado, i (i)}
							<li>{resultado}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>

		<div>
			<h4 class="mb-2 font-heading text-sm font-semibold">Contenidos teórico-prácticos</h4>
			<div class="flex flex-col gap-3 text-sm">
				{#each guia.contenidos as bloque, i (i)}
					{#if bloque.titulo}
						<div>
							<p class="font-medium">{bloque.titulo}</p>
							{#each bloque.texto as parrafo, j (j)}
								<p class="mt-1 leading-relaxed text-muted-foreground">{parrafo}</p>
							{/each}
						</div>
					{:else}
						<ul class="flex list-disc flex-col gap-1.5 pl-5 text-muted-foreground">
							{#each bloque.texto as tema, j (j)}
								<li>{tema}</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		</div>

		<div>
			<h4 class="mb-2 font-heading text-sm font-semibold">Metodología</h4>
			<div class="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
				{#each guia.metodologia as parrafo, i (i)}
					<p>{parrafo}</p>
				{/each}
			</div>
		</div>

		<div>
			<h4 class="mb-2 font-heading text-sm font-semibold">Sistemas de evaluación</h4>
			{#if guia.evaluacion.sistemas.length}
				<div class="mb-3 flex flex-wrap gap-2">
					{#each guia.evaluacion.sistemas as sistema, i (i)}
						<Badge variant="secondary">{sistema}</Badge>
					{/each}
				</div>
			{/if}
			<div class="overflow-x-auto border border-border">
				<table class="w-full border-collapse text-sm">
					<thead>
						<tr class="bg-muted/60 text-left">
							<th class="px-3 py-2 font-medium">Herramienta de calificación</th>
							<th class="px-3 py-2 text-right font-medium">%</th>
						</tr>
					</thead>
					<tbody>
						{#each guia.evaluacion.pesos as peso, i (i)}
							<tr class="border-t border-border">
								<td class="px-3 py-2">{peso.concepto}</td>
								<td class="px-3 py-2 text-right tabular-nums">{peso.porcentaje}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		{#if guia.bibliografiaBasica.length}
			<div>
				<h4 class="mb-2 font-heading text-sm font-semibold">Bibliografía básica</h4>
				<ul class="flex flex-col gap-1.5 text-sm text-muted-foreground">
					{#each guia.bibliografiaBasica as referencia, i (i)}
						<li>{referencia}</li>
					{/each}
				</ul>
			</div>
		{/if}

		<p class="text-xs text-muted-foreground">
			Transcrito de la ficha oficial de la UPV/EHU ·
			<a
				class="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
				href={materia.link}
				target="_blank"
				rel="noreferrer"
			>
				fuente <ExternalLink class="size-3" />
			</a>
		</p>
	</div>
</details>

<style>
	details[open] summary :global(svg:first-child) {
		transform: rotate(90deg);
	}

	/* Closed <details> stay collapsed when printing unless the content is forced
	   visible; a printed brief should carry every ficha. */
	@media print {
		details > div {
			display: block !important;
		}

		details::details-content {
			content-visibility: visible !important;
			block-size: auto !important;
		}
	}
</style>
