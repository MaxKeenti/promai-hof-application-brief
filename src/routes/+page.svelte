<script lang="ts">
	import Callout from '$lib/components/Callout.svelte';
	import InfoTable from '$lib/components/InfoTable.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import {
		actionItems,
		certificateTable,
		choicesTable,
		eligibilityTable,
		englishTable,
		equivalenciesTable,
		profile,
		timelineTable,
		toc,
		workloadTable
	} from '$lib/data/brief';
</script>

<svelte:head>
	<title>ProMAI 2027 | Hof Application Brief</title>
	<meta name="description" content="Organized planning brief for Max’s IPN ProMAI application, with Hof University of Applied Sciences as the preferred destination." />
</svelte:head>

<article class="page">
	<header class="hero">
		<p class="eyebrow">IPN International Mobility · January–July 2027</p>
		<h1>ProMAI Application Brief<br /><span lang="es">Plan de movilidad: Hof como primera opción</span></h1>
		<p class="lede">A structured working record for Max’s application: eligibility, language evidence, proposed destinations, academic profile, preliminary course compatibility, and English-level assessment.</p>
		<div class="meta">
			<span>Prepared: 30 July 2026</span>
			<span>Preferred destination: Hof University of Applied Sciences</span>
			<span>Working status: pending official confirmation</span>
		</div>
	</header>

	<main>
		<div class="quick-grid" aria-label="Application snapshot">
			<div class="stat"><strong>8.49</strong><span>Current overall average (<span lang="es">promedio global</span>)</span></div>
			<div class="stat"><strong>70.44%</strong><span>Completed programme credits (<span lang="es">créditos cubiertos</span>)</span></div>
			<div class="stat"><strong>Hof #1</strong><span>Preferred first-choice destination in Germany</span></div>
		</div>

		<Callout tone="alert" title="Important: this is an organized working brief, not an official determination">
			<p>This document records the conclusions and recommendations from the referenced conversation. Requirements, deadlines, course availability, equivalencies, and accepted certificates must be confirmed in writing with UPIICSA/IPN and Hof before relying on them.</p>
		</Callout>

		<nav aria-label="Table of contents">
			<h2>Contents / <span lang="es">Índice</span></h2>
			<ol>
				{#each toc as item (item.id)}
					<li><a href={'#' + item.id}>{item.label}</a></li>
				{/each}
			</ol>
		</nav>

		<section id="summary">
			<SectionHeading english="1. Current conclusion" spanish="Conclusión actual" />
			<p>Hof University of Applied Sciences appears to be a realistic and well-aligned first choice for an Informatics Engineering student. The main immediate issue is not learning German from zero; it is documenting the language level that the destination and IPN will accept, and preparing a complete nomination file on the applicable internal timeline.</p>
			<Callout tone="good" title="Best current route">
				<p>Apply to Hof for English-taught coursework and support the application with an accepted English B2 certificate. The conversation’s reading of the Hof entry was that German A2 would not be required for this English-only route.</p>
			</Callout>
			<Callout tone="warn" title="Do not treat the A2 issue as resolved until it is confirmed">
				<p>The initial information received mentioned an A2 German certificate in the first week of August. The later interpretation of the ProMAI annex indicated an English B2 route for Hof. Both the applicable certificate and the real deadline require written confirmation from the mobility coordinator.</p>
			</Callout>
		</section>

		<section id="eligibility">
			<SectionHeading english="2. Eligibility and selection" spanish="Elegibilidad y selección" />
			<h3>General ProMAI conditions cited in the conversation</h3>
			<InfoTable {...eligibilityTable} />
			<h3>How selection was described</h3>
			<ol>
				<li>Overall academic average.</li>
				<li>Level of certified language proficiency.</li>
				<li>Number of certified languages.</li>
				<li>Credit percentage closest to the 80% upper limit.</li>
			</ol>
			<Callout tone="info" title="Credit percentage: favorable, not a disadvantage">
				<p>At 70.44%, Max is within the stated eligibility range and closer to 80% than many applicants. The risk is only if the official calculation exceeds 80% at the relevant review point; this needs confirmation from the Academic Unit.</p>
			</Callout>
		</section>

		<section id="language">
			<SectionHeading english="3. Language requirement" spanish="Requisito de idioma" />
			<h3>Working interpretation for Hof</h3>
			<p>The conversation interpreted Hof’s ProMAI listing as requiring at least B2 in <strong>English or German</strong>, with programmes offered in both languages. For a plan consisting exclusively of English-taught courses, the practical recommendation was to use an accepted B2 English certificate rather than seek an urgent German A2 certificate.</p>
			<InfoTable {...certificateTable} />
			<Callout tone="warn" title="Certificate scope needs written confirmation">
				<p>The general call was described as accepting a wider range of English proofs, but the conversation cautioned that Hof’s own entry may list only the certificates above. Do not assume a CENLEX certificate alone is sufficient for Hof unless the coordinator confirms it in writing.</p>
			</Callout>
			<h3>Timeline cited in the conversation <span class="tag">confirm dates</span></h3>
			<InfoTable {...timelineTable} />
		</section>

		<section id="profile">
			<SectionHeading english="4. Academic profile" spanish="Perfil académico" />
			<dl class="key-list">
				{#each profile as [label, value] (label)}
					<div><dt>{label}</dt><dd>{value}</dd></div>
				{/each}
			</dl>
			<p>The discussion calculated that a grade of 10 in one additional subject would change the simple average from 382 ÷ 45 = 8.4889 to 392 ÷ 46 = <strong>8.5217</strong> (likely displayed as 8.52). This is a modest positive change, but it will matter only if the grade appears on the official record before the application file is assessed.</p>
			<Callout tone="info" title="Strategic priority">
				<p>A higher average helps, but obtaining an accepted language certificate and a complete, internally approved file are likely more urgent controllable factors for this application cycle.</p>
			</Callout>
		</section>

		<section id="choices">
			<SectionHeading english="5. Proposed destinations" spanish="Opciones de destino" />
			<p>The following combination balances Max’s genuine goal of Germany with a strong Spanish alternative. Final selections should depend on language evidence, course compatibility, and places available in the official annex.</p>
			<InfoTable {...choicesTable} />
			<h3>Alternative: University of Stuttgart</h3>
			<p>Stuttgart remains an attractive, more ambitious second German choice. The conversation flagged it as higher risk because it was reported to have one place, limited English-taught undergraduate coursework, and a mandatory intensive German course. Choose it if personal preference and prestige outweigh the additional uncertainty.</p>
		</section>

		<section id="equivalencies">
			<SectionHeading english="6. Preliminary Hof course equivalencies" spanish="Posibles equivalencias" />
			<p>These are <strong>academic hypotheses</strong>, not approved equivalencies. They were matched against a Hof English-course catalogue cited as a May 2026 edition. For mobility in the March–July 2027 summer semester, both Hof’s 2027 offer and the UPIICSA equivalency decision may differ.</p>
			<InfoTable {...equivalenciesTable} />
			<h3>Provisional semester package</h3>
			<InfoTable {...workloadTable} />
			<Callout tone="warn" title="Modules to avoid assuming are available">
				<p>Internet of Things, Applied Cloud Computing, Information System Security, Data Engineering and Analysis, Industry 4.0 and Data Management, and Data Science and AI Fundamentals were described as Master-level in the cited catalogue. Do not include them in the undergraduate plan unless Hof expressly permits it.</p>
			</Callout>
			<Callout tone="info" title="Safer academic approach">
				<p>Keep <em>Proyecto de titulación</em> out of the primary equivalency plan unless UPIICSA specifically approves an external project arrangement. The next document to collect is the official syllabus (<span lang="es">programa sintético</span>) for each proposed UPIICSA subject.</p>
			</Callout>
		</section>

		<section id="english">
			<SectionHeading english="7. English-level assessment" spanish="Evaluación de inglés" />
			<p>This is an informal assessment drawn only from Max’s written English in conversations. It is useful for planning but cannot replace an official language test.</p>
			<InfoTable {...englishTable} />
			<p>Examples of recurring polish points: <em>“by any chance”</em> rather than <em>“by any chances”</em>; <em>“look into Hof’s course offerings”</em> rather than <em>“investigate against Hof’s education”</em>; and <em>“improve my chances”</em> rather than <em>“improve my changes.”</em></p>
			<Callout tone="good" title="Practical interpretation">
				<p>Max appears capable of studying in English. The remaining challenge is exam-specific: listening conditions, timing, speaking format, and standardized-writing technique may affect a TOEFL, IELTS, or Cambridge score even when everyday academic English is already strong.</p>
			</Callout>
		</section>

		<section id="actions">
			<SectionHeading english="8. Priority actions" spanish="Próximos pasos" />
			<ol class="checklist">
				{#each actionItems as [title, detail] (title)}
					<li><strong>{title}</strong> {detail}</li>
				{/each}
			</ol>
			<Callout tone="info" title="Questions ready to send to the mobility coordinator">
				<ul>
					<li>For Hof and English-taught subjects, is an A2 German certificate unnecessary if I submit an accepted B2 English certificate?</li>
					<li>Which English certificates and minimum scores will you accept for the 2027 Hof nomination?</li>
					<li>Is the first week of August an internal UPIICSA deadline? What exact documents must I submit then?</li>
					<li>Can you review the proposed course correspondences before the final Hof 2027 catalogue is published?</li>
				</ul>
			</Callout>
		</section>

		<section id="sources">
			<SectionHeading english="9. Source documents" spanish="Documentos fuente" />
			<p>The following documents were supplied in the original conversation. Review the latest official version before submitting any application.</p>
			<ul class="source-list">
				<li><a href="https://www.ipn.mx/assets/files/dri/docs/Convocatoria/2026/convocatoria-promai-ene-jul-2027f.pdf" target="_blank" rel="noreferrer">IPN ProMAI call, January–July 2027</a></li>
				<li><a href="https://www.ipn.mx/assets/files/dri/docs/Formatos/2026/PROMAI-26/JULIO/anexo-int1.pdf" target="_blank" rel="noreferrer">Anexo INT 1 — participating institutions and requirements</a></li>
				<li><a href="https://www.ipn.mx/assets/files/dri/docs/Formatos/2026/PROMAI-26/JULIO/anexo-int3.pdf" target="_blank" rel="noreferrer">Anexo INT 3 — calendar and related information</a></li>
				<li><a href="https://www.upiicsa.ipn.mx/assets/files/ofertaEducativa/mapa-curricular/superior/escolarizado/mapa-curricular-upiicsa-ing-inf.pdf" target="_blank" rel="noreferrer">UPIICSA Informatics Engineering curricular map</a></li>
			</ul>
			<p class="small">The referenced conversation also cited a Hof English-course catalogue described as a May 2026 edition, but did not preserve the direct catalogue link. Add the official Summer Semester 2027 catalogue and module handbooks to the file once Hof publishes them.</p>
		</section>
	</main>

	<footer>Prepared from the referenced conversation for personal planning. It deliberately distinguishes reported conclusions from matters requiring institutional confirmation.</footer>
</article>

<style>
	.page { width: min(1120px, calc(100% - 32px)); margin: 32px auto 48px; overflow: hidden; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--shadow); }
	.hero { padding: clamp(32px, 6vw, 68px); color: white; background: linear-gradient(135deg, #06344f, #0871a4 58%, #2893a1); }
	.eyebrow { margin: 0 0 12px; color: #c6f1f4; font-size: 0.78rem; font-weight: 750; letter-spacing: 0.13em; text-transform: uppercase; }
	h1, h2, h3 { line-height: 1.18; }
	h1 { max-width: 850px; margin: 0; font-size: clamp(2.05rem, 6vw, 4rem); letter-spacing: -0.045em; }
	.lede { max-width: 790px; margin: 20px 0 0; color: #e5f6fb; font-size: clamp(1rem, 2vw, 1.18rem); }
	.meta { display: flex; flex-wrap: wrap; gap: 8px 22px; margin: 30px 0 0; color: #ccedf5; font-size: 0.9rem; }
	main { padding: clamp(26px, 5vw, 58px); }
	.quick-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin: 0 0 38px; }
	.stat { min-height: 128px; padding: 20px; border: 1px solid var(--line); border-radius: 12px; background: #fbfcfd; }
	.stat strong { display: block; color: var(--blue); font-size: 1.8rem; line-height: 1.1; }
	.stat span { display: block; margin-top: 9px; color: var(--muted); font-size: 0.92rem; }
	nav { margin: 30px 0 44px; padding: 22px 24px; border: 1px solid var(--line); border-radius: 12px; background: #fbfcfd; }
	nav h2 { margin: 0 0 12px; font-size: 1rem; }
	nav h2 span { color: var(--muted); }
	nav ol { columns: 2; gap: 32px; margin: 0; padding-left: 22px; }
	nav li { margin: 5px 0; break-inside: avoid; }
	section { scroll-margin-top: 22px; }
	section + section { margin-top: 54px; }
	h3 { margin: 28px 0 10px; font-size: 1.12rem; }
	.tag { display: inline-block; margin-left: 7px; padding: 2px 7px; border-radius: 999px; background: var(--amber-soft); color: #704a00; font-size: 0.7rem; font-weight: 750; letter-spacing: 0.04em; text-transform: uppercase; vertical-align: middle; }
	.key-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 30px; margin: 20px 0; }
	.key-list div { padding: 0 0 12px; border-bottom: 1px solid var(--line); }
	dt { color: var(--muted); font-size: 0.8rem; font-weight: 720; letter-spacing: 0.06em; text-transform: uppercase; }
	dd { margin: 4px 0 0; font-weight: 650; }
	.checklist { list-style: none; padding-left: 0; counter-reset: actions; }
	.checklist li { position: relative; min-height: 43px; padding: 8px 0 8px 52px; counter-increment: actions; }
	.checklist li::before { position: absolute; top: 4px; left: 0; display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; color: white; background: var(--blue); font-weight: 750; content: counter(actions); }
	.source-list li { margin: 10px 0; }
	.small { color: var(--muted); font-size: 0.88rem; }
	footer { padding: 25px clamp(26px, 5vw, 58px); border-top: 1px solid var(--line); color: var(--muted); background: #fbfcfd; font-size: 0.86rem; }

	@media (max-width: 720px) {
		.page { width: 100%; margin: 0; border: 0; border-radius: 0; }
		.quick-grid, .key-list { grid-template-columns: 1fr; }
		nav ol { columns: 1; }
		.hero { padding: 36px 24px; }
		main { padding: 32px 22px 46px; }
	}

	@media print {
		.page { width: 100%; margin: 0; border: 0; border-radius: 0; box-shadow: none; }
		.hero { padding: 25px 36px; background: #0b597d !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
		main { padding: 28px 36px; }
		section + section { margin-top: 34px; }
	}
</style>
