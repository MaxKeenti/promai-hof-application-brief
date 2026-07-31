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
						<td data-label={headers[cellIndex]} class:good={cell.tone === 'good'} class:warn={cell.tone === 'warn'} class:alert={cell.tone === 'alert'}>{cell.text}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-wrap { position: relative; overflow-x: auto; margin: 18px 0 28px; border: 1px solid var(--line); border-radius: 14px; background: white; }
	table { width: 100%; min-width: 630px; border-collapse: collapse; font-size: 0.89rem; }
	caption { padding: 0 0 10px; color: var(--muted); text-align: left; font-size: 0.86rem; }
	caption { position: absolute; top: -29px; left: 0; width: 100%; }
	caption + thead { border-top: 0; }
	th, td { padding: 13px 14px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
	th { color: #315063; background: #f3f7f8; font-size: 0.69rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
	tbody tr:last-child td { border-bottom: 0; }
	tr:nth-child(even) td { background: #fbfcfd; }
	td.good, td.warn, td.alert { font-weight: 700; }
	td.good { color: var(--green); }
	td.warn { color: var(--amber); }
	td.alert { color: var(--red); }

	@media (max-width: 700px) {
		.table-wrap { margin-inline: -2px; }
		.table-wrap::after { position: sticky; right: 0; display: block; width: 42px; height: 100%; background: linear-gradient(90deg, transparent, rgb(255 255 255 / 78%)); content: ''; pointer-events: none; }
	}
</style>
