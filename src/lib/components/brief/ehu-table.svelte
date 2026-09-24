<script lang="ts">
	import { ArrowDown } from '@lucide/svelte';
	import type { MateriaEhu } from '$lib/data/materias.js';
	import { validaciones } from '$lib/data/validacion.js';
	import { fichasAbiertas } from '$lib/state/fichas.svelte.js';
	import EstadoIcono from './estado-icono.svelte';

	let { materias }: { materias: MateriaEhu[] } = $props();
</script>

<div class="overflow-x-auto border border-border">
	<table class="w-full border-collapse text-sm">
		<thead>
			<tr class="bg-muted/60 text-left">
				<th class="px-3 py-2 font-medium">Código</th>
				<th class="px-3 py-2 font-medium">Asignatura (EHU)</th>
				<th class="px-3 py-2 text-right font-medium">ECTS</th>
				<th class="px-3 py-2 font-medium">Equivale a (UPIICSA)</th>
				<th class="px-3 py-2 font-medium">Verificación</th>
				<th class="px-3 py-2 font-medium">Guía docente</th>
			</tr>
		</thead>
		<tbody>
			{#each materias as materia (materia.codigo)}
				{@const validacion = validaciones[materia.codigo]}
				<tr class="border-t border-border align-top">
					<td class="px-3 py-2 font-mono text-xs text-muted-foreground tabular-nums">
						{materia.codigo}
					</td>
					<td class="px-3 py-2">
						<div class="font-medium">{materia.asignatura}</div>
						<div class="text-xs text-muted-foreground">{materia.centro} · {materia.idioma}</div>
					</td>
					<td class="px-3 py-2 text-right tabular-nums">{materia.ects}</td>
					<td class="px-3 py-2 text-muted-foreground">{materia.equivaleA}</td>
					<td class="px-3 py-2">
						<span class="flex items-start gap-1.5">
							<EstadoIcono estado={validacion.estado} class="mt-0.5" />
							<span class="text-xs text-muted-foreground">
								{validacion.nivel} · 2.º cuatr.
								{#if validacion.restriccion}<br />60 créditos exigidos{/if}
								{#if validacion.horario.length}<br />aviso de horario{/if}
							</span>
						</span>
					</td>
					<td class="px-3 py-2">
						<a
							class="inline-flex items-center gap-1 whitespace-nowrap text-primary underline-offset-4 hover:underline"
							href={`#ficha-${materia.codigo}`}
							onclick={() => fichasAbiertas.set(materia.codigo, true)}
						>
							Ver ficha <ArrowDown class="size-3" />
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
