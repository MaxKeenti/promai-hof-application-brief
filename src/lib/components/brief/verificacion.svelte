<script lang="ts">
	import { conflictosHorarios, verificacionPostulacion } from '$lib/data/validacion.js';
	import EstadoIcono from './estado-icono.svelte';

	const sinResolver = conflictosHorarios.filter((c) => !c.evitable);
</script>

<div class="border border-border bg-card">
	<div class="border-b border-border px-4 py-3">
		<h3 class="font-heading text-base font-semibold">Verificación para postulación</h3>
		<p class="mt-0.5 text-xs text-muted-foreground">
			Contrastado con las fichas oficiales del curso académico 2026/27.
		</p>
	</div>

	<dl class="divide-y divide-border">
		{#each verificacionPostulacion as item, i (i)}
			<div class="grid gap-x-4 gap-y-1 px-4 py-2.5 text-sm sm:grid-cols-[11rem_1fr]">
				<dt class="flex items-center gap-2 font-medium">
					<EstadoIcono estado={item.estado} />
					{item.etiqueta}
				</dt>
				<dd class="pl-6 leading-relaxed text-muted-foreground sm:pl-0">{item.texto}</dd>
			</div>
		{/each}
	</dl>

	<div class="border-t border-border px-4 py-3">
		<h4 class="font-heading text-sm font-semibold">Compatibilidad horaria publicada</h4>
		<p class="mt-1 text-xs text-muted-foreground">
			Solapamientos entre los grupos en castellano de las cinco asignaturas. {sinResolver.length}
			de {conflictosHorarios.length} no se resuelven cambiando de grupo.
		</p>
		<div class="mt-3 overflow-x-auto border border-border">
			<table class="w-full border-collapse text-sm">
				<thead>
					<tr class="bg-muted/60 text-left">
						<th class="px-3 py-2 font-medium">Asignaturas</th>
						<th class="px-3 py-2 font-medium">Día</th>
						<th class="px-3 py-2 font-medium">Solape</th>
						<th class="px-3 py-2 font-medium">Situación</th>
					</tr>
				</thead>
				<tbody>
					{#each conflictosHorarios as conflicto, i (i)}
						<tr class="border-t border-border align-top">
							<td class="px-3 py-2 font-mono text-xs whitespace-nowrap tabular-nums">
								{conflicto.asignaturas[0]} ↔ {conflicto.asignaturas[1]}
							</td>
							<td class="px-3 py-2 whitespace-nowrap">{conflicto.dia}</td>
							<td class="px-3 py-2 whitespace-nowrap tabular-nums">{conflicto.solape}</td>
							<td class="px-3 py-2">
								<span
									class={`font-medium ${conflicto.evitable ? 'text-foreground' : 'text-warning'}`}
								>
									{conflicto.evitable ? 'Evitable cambiando de grupo' : 'Sin resolver'}
								</span>
								<p class="mt-1 text-xs leading-relaxed text-muted-foreground">
									{conflicto.detalle}
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-xs leading-relaxed text-muted-foreground">
			Ninguna asignatura se sustituye ni se elige grupo de laboratorio por adelantado: la decisión
			queda abierta hasta resolverlo con la coordinación de la EHU.
		</p>
	</div>
</div>
