<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<!-- Links the prerender crawler follows to reach the localized routes. The
     single-file build has no localized routes to reach. -->
{#if !__SINGLE_FILE__}
	<div style="display:none">
		{#each locales as locale (locale)}
			<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
		{/each}
	</div>
{/if}
