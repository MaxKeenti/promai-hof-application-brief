<script lang="ts">
	import { materiasAlternativas, materiasPropuestas } from '$lib/data/materias.js';
	import EhuTable from './ehu-table.svelte';
	import Section from './section.svelte';
	import Stat from './stat.svelte';

	const totalEcts = materiasPropuestas.reduce((total, m) => total + m.ects, 0);
</script>

<Section
	id="propuestas"
	index="02 — UPV/EHU"
	title="Materias propuestas para el intercambio"
	lead="Selección de asignaturas de la Universidad del País Vasco, todas en el campus de Bizkaia y en español, con su equivalencia directa en el plan de UPIICSA. Cada fila enlaza a la ficha oficial del curso 2026."
>
	<div class="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
		<Stat
			value={String(materiasPropuestas.length)}
			label="Asignaturas"
			hint="Propuesta principal"
		/>
		<Stat value={`${totalEcts}`} label="ECTS" hint="Carga total" />
		<Stat value="1" label="Centro" hint="Ing. de Bilbao, Bizkaia" />
		<Stat
			value={String(materiasAlternativas.length)}
			label="Alternativas"
			hint="Reserva disponible"
		/>
	</div>

	<EhuTable materias={materiasPropuestas} />

	<div class="mt-10">
		<div class="mb-3 flex flex-col gap-1">
			<h3 class="font-heading text-lg font-semibold">Alternativas</h3>
			<p class="max-w-prose text-sm text-muted-foreground">
				Opciones de reserva por si se exige una sexta asignatura o alguna de la propuesta principal
				no queda disponible. Todas mantienen equivalencia con materias del catálogo de la sección
				01.
			</p>
		</div>
		<EhuTable materias={materiasAlternativas} />
	</div>
</Section>
