<script lang="ts">
	/* Every href here is an absolute ehu.eus URL coming from the data module, so
	   there is no app route for resolve() to take. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { ExternalLink } from '@lucide/svelte';
	import type { MateriaEhu } from '$lib/data/materias.js';

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
				<th class="px-3 py-2 font-medium">Ficha</th>
			</tr>
		</thead>
		<tbody>
			{#each materias as materia (materia.codigo)}
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
						<a
							class="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
							href={materia.link}
							target="_blank"
							rel="noreferrer"
						>
							Abrir <ExternalLink class="size-3" />
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
