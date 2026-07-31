<script lang="ts">
	import type { BriefTable } from '$lib/data/brief';

	let { caption, headers, rows }: BriefTable = $props();
</script>

<div class="table-wrap">
	<table>
		{#if caption}
			<caption>{caption}</caption>
		{/if}
		<thead>
			<tr>
				{#each headers as header (header)}
					<th scope="col">{header}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, rowIndex (rowIndex)}
				<tr>
					{#each row as cell, cellIndex (`${rowIndex}-${cellIndex}`)}
						<td class:good={cell.tone === 'good'} class:warn={cell.tone === 'warn'} class:alert={cell.tone === 'alert'}>{cell.text}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-wrap { overflow-x: auto; margin: 18px 0 24px; }
	table { width: 100%; min-width: 630px; border-collapse: collapse; font-size: 0.93rem; }
	caption { padding: 0 0 10px; color: var(--muted); text-align: left; font-size: 0.86rem; }
	th, td { padding: 12px 13px; border: 1px solid var(--line); text-align: left; vertical-align: top; }
	th { color: #183447; background: #eaf2f6; font-size: 0.83rem; letter-spacing: 0.025em; text-transform: uppercase; }
	tr:nth-child(even) td { background: #fcfdfe; }
	td.good { color: var(--green); font-weight: 750; }
	td.warn { color: var(--amber); font-weight: 750; }
	td.alert { color: var(--red); font-weight: 750; }
</style>
