<script lang="ts">
	/* Every href is a fragment pointing at a section of this same document, not
	   an app route for resolve() to take. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	const enlaces = [
		{ href: '#inicio', etiqueta: 'Inicio' },
		{ href: '#disponibles', etiqueta: '01 · Disponibles' },
		{ href: '#propuestas', etiqueta: '02 · Propuestas' },
		{ href: '#guias', etiqueta: '03 · Guías docentes' }
	];
</script>

<nav
	class="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm print:hidden"
	aria-label="Secciones del documento"
>
	<div class="mx-auto flex w-full max-w-4xl items-center gap-4 px-5 py-3 sm:px-8">
		<span class="hidden font-heading text-sm font-semibold whitespace-nowrap sm:block">
			UPIICSA → UPV/EHU
		</span>
		<ul class="-mx-1 flex flex-1 items-center gap-1 overflow-x-auto">
			{#each enlaces as enlace (enlace.href)}
				<li>
					<a
						class="block px-2 py-1 text-xs whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
						href={enlace.href}
					>
						{enlace.etiqueta}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
