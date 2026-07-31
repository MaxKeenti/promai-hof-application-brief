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
	<meta name="description" content="A focused planning brief for Max’s IPN ProMAI application, with Hof University of Applied Sciences as the preferred destination." />
	<meta property="og:title" content="ProMAI 2027 | Hof Application Brief" />
	<meta property="og:description" content="Hof is a strong first choice. A focused plan for what is aligned, what needs confirmation, and what to do next." />
	<meta property="og:image" content="/og.png" />
	<meta property="og:image:alt" content="ProMAI 2027 — Hof is a strong first choice." />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to the application brief</a>

<article class="page">
	<header class="hero">
		<div class="hero-main">
			<div class="hero-kicker">
				<span class="brand-mark" aria-hidden="true">P</span>
				<p>IPN international mobility <span aria-hidden="true">·</span> January–July 2027</p>
			</div>
			<p class="eyebrow">Application brief <span lang="es">/ plan de movilidad</span></p>
			<h1>Hof is a strong<br />first choice.</h1>
			<p class="lede">A focused working plan for Max’s ProMAI application — what looks aligned, what still needs confirmation, and what to do next.</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#actions">See priority actions <span aria-hidden="true">↓</span></a>
				<a class="button button-quiet" href="#sources">Review sources</a>
			</div>
		</div>
		<aside class="route-card" aria-label="Recommended application route">
			<p class="route-label">Recommended route</p>
			<div class="route-title"><span class="route-count">01</span><strong>Hof University<br />of Applied Sciences</strong></div>
			<div class="route-detail"><span class="signal signal-warn" aria-hidden="true"></span>English-taught coursework · B2 evidence to confirm</div>
			<div class="route-meta">
				<span>Preferred destination</span>
				<span>Germany</span>
			</div>
		</aside>
	</header>

	<div class="brief-layout">
		<aside class="rail" aria-label="Application brief navigation">
			<div class="rail-card rail-status">
				<p class="rail-label">Current status</p>
				<h2>Planning is on track.</h2>
				<p>The main open question is which language proof Hof and UPIICSA will accept for an English-only route.</p>
				<a class="rail-action" href="#actions">Start with the next move <span aria-hidden="true">→</span></a>
			</div>

			<nav class="contents" aria-label="Table of contents">
				<p class="rail-label">In this brief</p>
				<ol>
					{#each toc as item, index (item.id)}
						<li><a href={'#' + item.id}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</a></li>
					{/each}
				</ol>
			</nav>

			<p class="prepared">Prepared 30 Jul 2026<br />Personal planning record</p>
		</aside>

		<main id="main-content">
			<section class="snapshot" aria-labelledby="snapshot-title">
				<div class="snapshot-heading">
					<p class="section-label">At a glance</p>
					<h2 id="snapshot-title">A credible application, with one urgent confirmation.</h2>
				</div>
				<div class="quick-grid" aria-label="Application snapshot">
					<div class="stat"><span class="stat-label">Overall average</span><strong>8.49</strong><span>Above the 8.0 Engineering minimum</span></div>
					<div class="stat"><span class="stat-label">Credits covered</span><strong>70.44%</strong><span>Within the reported 50–80% range</span></div>
					<div class="stat stat-action"><span class="stat-label">Immediate focus</span><strong>Confirm B2</strong><span>Accepted language route and local deadline</span></div>
				</div>
			</section>

			<Callout tone="alert" title="Planning brief — not an official determination">
				<p>This record organizes conclusions from the referenced conversation. Requirements, deadlines, course availability, equivalencies, and accepted certificates need written confirmation from UPIICSA/IPN and Hof before relying on them.</p>
			</Callout>

			<section id="summary">
				<SectionHeading english="Current conclusion" spanish="Conclusión actual" number="01" />
				<p>Hof University of Applied Sciences appears to be a realistic and well-aligned first choice for an Informatics Engineering student. The immediate issue is not learning German from zero; it is documenting the language level that the destination and IPN will accept, and preparing a complete nomination file on the applicable internal timeline.</p>
				<div class="decision-grid">
					<Callout tone="good" title="Best current route">
						<p>Apply to Hof for English-taught coursework and support the application with an accepted English B2 certificate. The conversation’s reading of the Hof entry was that German A2 would not be required for this English-only route.</p>
					</Callout>
					<Callout tone="warn" title="What must be confirmed">
						<p>The initial information received mentioned an A2 German certificate in the first week of August. The later interpretation of the ProMAI annex indicated an English B2 route for Hof. Confirm the applicable certificate and the real deadline in writing.</p>
					</Callout>
				</div>
			</section>

			<section id="eligibility">
				<SectionHeading english="Eligibility and selection" spanish="Elegibilidad y selección" number="02" />
				<h3>General ProMAI conditions cited in the conversation</h3>
				<InfoTable {...eligibilityTable} />
				<div class="prose-grid">
					<div>
						<h3>How selection was described</h3>
						<ol class="rank-list">
							<li>Overall academic average.</li>
							<li>Level of certified language proficiency.</li>
							<li>Number of certified languages.</li>
							<li>Credit percentage closest to the 80% upper limit.</li>
						</ol>
					</div>
					<Callout tone="info" title="Credit percentage: favorable">
						<p>At 70.44%, Max is within the stated eligibility range and closer to 80% than many applicants. The risk is only if the official calculation exceeds 80% at the relevant review point.</p>
					</Callout>
				</div>
			</section>

			<section id="language">
				<SectionHeading english="Language requirement" spanish="Requisito de idioma" number="03" />
				<h3>Working interpretation for Hof</h3>
				<p>The conversation interpreted Hof’s ProMAI listing as requiring at least B2 in <strong>English or German</strong>, with programmes offered in both languages. For a plan consisting exclusively of English-taught courses, the practical recommendation was to use an accepted B2 English certificate rather than seek an urgent German A2 certificate.</p>
				<InfoTable {...certificateTable} />
				<Callout tone="warn" title="Certificate scope needs written confirmation">
					<p>The general call was described as accepting a wider range of English proofs, but Hof’s own entry may list only the certificates above. Do not assume a CENLEX certificate alone is sufficient for Hof unless the coordinator confirms it in writing.</p>
				</Callout>
				<h3>Timeline cited in the conversation <span class="tag">confirm dates</span></h3>
				<InfoTable {...timelineTable} />
			</section>

			<section id="profile">
				<SectionHeading english="Academic profile" spanish="Perfil académico" number="04" />
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
				<SectionHeading english="Proposed destinations" spanish="Opciones de destino" number="05" />
				<p>The following combination balances Max’s genuine goal of Germany with a strong Spanish alternative. Final selections should depend on language evidence, course compatibility, and places available in the official annex.</p>
				<InfoTable {...choicesTable} />
				<Callout tone="info" title="Alternative: University of Stuttgart">
					<p>Stuttgart remains an attractive, more ambitious second German choice. It was reported to have one place, limited English-taught undergraduate coursework, and a mandatory intensive German course. Choose it if personal preference and prestige outweigh the additional uncertainty.</p>
				</Callout>
			</section>

			<section id="equivalencies">
				<SectionHeading english="Preliminary Hof course equivalencies" spanish="Posibles equivalencias" number="06" />
				<p>These are <strong>academic hypotheses</strong>, not approved equivalencies. They were matched against a Hof English-course catalogue cited as a May 2026 edition. For mobility in the March–July 2027 summer semester, both Hof’s 2027 offer and the UPIICSA equivalency decision may differ.</p>
				<InfoTable {...equivalenciesTable} />
				<h3>Provisional semester package</h3>
				<InfoTable {...workloadTable} />
				<div class="decision-grid">
					<Callout tone="warn" title="Modules not to assume available">
						<p>Internet of Things, Applied Cloud Computing, Information System Security, Data Engineering and Analysis, Industry 4.0 and Data Management, and Data Science and AI Fundamentals were described as Master-level. Do not include them in the undergraduate plan unless Hof expressly permits it.</p>
					</Callout>
					<Callout tone="info" title="Safer academic approach">
						<p>Keep <em>Proyecto de titulación</em> out of the primary equivalency plan unless UPIICSA specifically approves an external project arrangement. Collect the official <span lang="es">programa sintético</span> for each proposed UPIICSA subject next.</p>
					</Callout>
				</div>
			</section>

			<section id="english">
				<SectionHeading english="English-level assessment" spanish="Evaluación de inglés" number="07" />
				<p>This is an informal assessment drawn only from Max’s written English in conversations. It is useful for planning but cannot replace an official language test.</p>
				<InfoTable {...englishTable} />
				<p>Examples of recurring polish points: <em>“by any chance”</em> rather than <em>“by any chances”</em>; <em>“look into Hof’s course offerings”</em> rather than <em>“investigate against Hof’s education”</em>; and <em>“improve my chances”</em> rather than <em>“improve my changes.”</em></p>
				<Callout tone="good" title="Practical interpretation">
					<p>Max appears capable of studying in English. The remaining challenge is exam-specific: listening conditions, timing, speaking format, and standardized-writing technique may affect a TOEFL, IELTS, or Cambridge score even when everyday academic English is already strong.</p>
				</Callout>
			</section>

			<section id="actions">
				<SectionHeading english="Priority actions" spanish="Próximos pasos" number="08" />
				<p class="section-intro">Handle these in order to remove uncertainty from the application while there is still time to act.</p>
				<ol class="checklist">
					{#each actionItems as [title, detail] (title)}
						<li><span class="step-number" aria-hidden="true"></span><div><strong>{title}</strong><p>{detail}</p></div></li>
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
				<SectionHeading english="Source documents" spanish="Documentos fuente" number="09" />
				<p>The following documents were supplied in the original conversation. Review the latest official version before submitting any application.</p>
				<ul class="source-list">
					<li><a href="https://www.ipn.mx/assets/files/dri/docs/Convocatoria/2026/convocatoria-promai-ene-jul-2027f.pdf" target="_blank" rel="noreferrer">IPN ProMAI call, January–July 2027 <span aria-hidden="true">↗</span></a></li>
					<li><a href="https://www.ipn.mx/assets/files/dri/docs/Formatos/2026/PROMAI-26/JULIO/anexo-int1.pdf" target="_blank" rel="noreferrer">Anexo INT 1 — participating institutions and requirements <span aria-hidden="true">↗</span></a></li>
					<li><a href="https://www.ipn.mx/assets/files/dri/docs/Formatos/2026/PROMAI-26/JULIO/anexo-int3.pdf" target="_blank" rel="noreferrer">Anexo INT 3 — calendar and related information <span aria-hidden="true">↗</span></a></li>
					<li><a href="https://www.upiicsa.ipn.mx/assets/files/ofertaEducativa/mapa-curricular/superior/escolarizado/mapa-curricular-upiicsa-ing-inf.pdf" target="_blank" rel="noreferrer">UPIICSA Informatics Engineering curricular map <span aria-hidden="true">↗</span></a></li>
				</ul>
				<p class="small">The referenced conversation also cited a Hof English-course catalogue described as a May 2026 edition, but did not preserve the direct catalogue link. Add the official Summer Semester 2027 catalogue and module handbooks to the file once Hof publishes them.</p>
			</section>
		</main>
	</div>

	<footer><span>Prepared from the referenced conversation for personal planning.</span><span>It deliberately distinguishes reported conclusions from matters requiring institutional confirmation.</span></footer>
</article>

<style>
	.page { width: min(1420px, calc(100% - 48px)); margin: 24px auto 48px; overflow: hidden; background: var(--paper); border: 1px solid rgb(200 214 220 / 88%); border-radius: 22px; box-shadow: var(--shadow); }
	.hero { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(310px, 0.5fr); gap: clamp(36px, 7vw, 116px); padding: clamp(38px, 6vw, 78px); overflow: hidden; color: white; background: linear-gradient(120deg, #063852 0%, #07577a 56%, #11879d 100%); }
	.hero::before { position: absolute; width: 38rem; height: 38rem; top: -28rem; right: -10rem; border: 1px solid rgb(216 248 249 / 24%); border-radius: 50%; box-shadow: 0 0 0 4.8rem rgb(216 248 249 / 6%), 0 0 0 11rem rgb(216 248 249 / 4%); content: ''; }
	.hero::after { position: absolute; right: 3%; bottom: -1.7rem; color: rgb(255 255 255 / 9%); font-family: Newsreader, Georgia, serif; font-size: clamp(9rem, 19vw, 17rem); font-weight: 600; line-height: 0.7; content: 'H'; }
	.hero-main, .route-card { position: relative; z-index: 1; }
	.hero-kicker { display: flex; align-items: center; gap: 10px; margin-bottom: 26px; }
	.brand-mark { display: grid; width: 27px; height: 27px; place-items: center; color: #0c5575; background: #d0f2f0; border-radius: 8px; font-family: 'DM Mono', monospace; font-size: 0.77rem; font-weight: 500; }
	.hero-kicker p, .eyebrow, .route-label, .rail-label, .section-label, .stat-label { margin: 0; font-family: 'DM Mono', monospace; font-size: 0.69rem; font-weight: 500; letter-spacing: 0.095em; text-transform: uppercase; }
	.hero-kicker p { color: #cef1f5; }
	.eyebrow { color: #97d9e7; }
	h1 { max-width: 700px; margin: 12px 0 0; font-family: Newsreader, Georgia, serif; font-size: clamp(3.1rem, 6.1vw, 6.25rem); font-weight: 600; letter-spacing: -0.065em; line-height: 0.88; }
	.lede { max-width: 635px; margin: 28px 0 0; color: #d7f2f4; font-size: clamp(1rem, 1.6vw, 1.17rem); line-height: 1.6; }
	.hero-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 30px; }
	.button { display: inline-flex; align-items: center; gap: 9px; min-height: 43px; padding: 10px 15px; border-radius: 10px; font-size: 0.86rem; font-weight: 700; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
	.button:hover { transform: translateY(-1px); }
	.button-primary { color: #0b4560; background: #e4f7f5; }
	.button-primary:hover { color: #063851; background: #fff; }
	.button-quiet { color: #d9f3f5; border: 1px solid rgb(214 244 247 / 34%); }
	.button-quiet:hover { color: white; background: rgb(255 255 255 / 10%); }
	.route-card { align-self: end; padding: 26px; border: 1px solid rgb(222 251 248 / 28%); border-radius: 18px; background: linear-gradient(135deg, rgb(226 252 250 / 18%), rgb(255 255 255 / 5%)); box-shadow: inset 0 1px rgb(255 255 255 / 14%); backdrop-filter: blur(10px); }
	.route-label { color: #9bdde5; }
	.route-title { display: flex; gap: 13px; align-items: flex-start; margin-top: 22px; font-family: Newsreader, Georgia, serif; font-size: clamp(1.45rem, 2.6vw, 2.15rem); letter-spacing: -0.037em; line-height: 1.04; }
	.route-count { color: #c6f3ef; font-family: 'DM Mono', monospace; font-size: 0.74rem; letter-spacing: 0; }
	.route-detail { display: flex; align-items: flex-start; gap: 8px; margin-top: 23px; padding-top: 14px; border-top: 1px solid rgb(221 248 249 / 19%); color: #d0edf2; font-size: 0.82rem; line-height: 1.45; }
	.signal { flex: 0 0 auto; width: 8px; height: 8px; margin-top: 0.27rem; border-radius: 50%; }
	.signal-warn { background: #ffce6d; box-shadow: 0 0 0 4px rgb(255 206 109 / 13%); }
	.route-meta { display: flex; justify-content: space-between; gap: 10px; margin-top: 19px; color: #bce3e8; font-family: 'DM Mono', monospace; font-size: 0.64rem; letter-spacing: 0.04em; text-transform: uppercase; }

	.brief-layout { display: grid; grid-template-columns: minmax(235px, 270px) minmax(0, 1fr); gap: clamp(34px, 6vw, 92px); padding: clamp(28px, 5vw, 68px); }
	.rail { align-self: start; position: sticky; top: 20px; }
	.rail-card { padding: 21px; border: 1px solid var(--line); border-radius: 16px; background: linear-gradient(155deg, #f9fcfc, #f1f7f7); }
	.rail-label, .section-label, .stat-label { color: var(--blue); }
	.rail-status h2 { margin: 9px 0 10px; font-family: Newsreader, Georgia, serif; font-size: 1.55rem; letter-spacing: -0.04em; line-height: 1.02; }
	.rail-status p:not(.rail-label) { margin-bottom: 17px; color: var(--muted); font-size: 0.86rem; line-height: 1.55; }
	.rail-action { display: inline-flex; align-items: center; gap: 7px; font-size: 0.81rem; font-weight: 700; text-decoration: none; }
	.contents { margin-top: 31px; }
	.contents ol { margin: 11px 0 0; padding: 0; list-style: none; }
	.contents li { margin: 0; border-bottom: 1px solid var(--line); }
	.contents a { display: flex; gap: 11px; padding: 10px 0; color: #405766; font-size: 0.84rem; font-weight: 600; line-height: 1.35; text-decoration: none; }
	.contents a:hover { color: var(--blue); }
	.contents span { flex: 0 0 auto; color: #8fa3ad; font-family: 'DM Mono', monospace; font-size: 0.65rem; line-height: 1.8; }
	.prepared { margin: 27px 0 0; color: var(--muted); font-family: 'DM Mono', monospace; font-size: 0.66rem; line-height: 1.7; }

	main { min-width: 0; }
	.snapshot { margin-bottom: 44px; }
	.snapshot-heading { display: flex; justify-content: space-between; gap: 28px; align-items: end; margin-bottom: 18px; }
	.snapshot h2 { max-width: 570px; margin: 7px 0 0; font-family: Newsreader, Georgia, serif; font-size: clamp(2rem, 3.5vw, 3.1rem); font-weight: 600; letter-spacing: -0.05em; line-height: 1; }
	.quick-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
	.stat { min-height: 156px; padding: 20px 19px; border: 1px solid var(--line); border-radius: 14px; background: #fff; }
	.stat:nth-child(2) { background: #fbfdfd; }
	.stat-action { border-color: #c5e5eb; background: #f0fbfc; }
	.stat strong { display: block; margin-top: 13px; color: #123c53; font-family: Newsreader, Georgia, serif; font-size: clamp(1.8rem, 2.7vw, 2.55rem); font-weight: 600; letter-spacing: -0.05em; line-height: 1; }
	.stat-action strong { color: var(--blue); font-size: clamp(1.56rem, 2.2vw, 2rem); }
	.stat > span:last-child { display: block; margin-top: 11px; color: var(--muted); font-size: 0.78rem; line-height: 1.45; }

	section { scroll-margin-top: 25px; }
	section + section { margin-top: 67px; padding-top: 4px; }
	section > p { max-width: 880px; color: #354855; }
	h3 { margin: 27px 0 10px; color: #213d4d; font-size: 0.98rem; font-weight: 700; line-height: 1.3; }
	.tag { display: inline-block; margin-left: 7px; padding: 3px 7px; border-radius: 99px; color: var(--amber); background: var(--amber-soft); font-family: 'DM Mono', monospace; font-size: 0.61rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; vertical-align: middle; }
	.decision-grid, .prose-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
	.decision-grid :global(aside), .prose-grid :global(aside) { height: calc(100% - 24px); }
	.rank-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 0; list-style: none; counter-reset: selection; }
	.rank-list li { position: relative; min-height: 51px; margin: 0; padding: 11px 12px 8px 38px; border: 1px solid var(--line); border-radius: 10px; color: #405562; font-size: 0.79rem; line-height: 1.4; counter-increment: selection; }
	.rank-list li::before { position: absolute; top: 10px; left: 12px; color: var(--blue); font-family: 'DM Mono', monospace; font-size: 0.63rem; content: '0' counter(selection); }
	.key-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin: 22px 0 26px; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; }
	.key-list div { min-height: 100px; padding: 17px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fbfcfc; }
	.key-list div:nth-child(3n) { border-right: 0; }
	.key-list div:nth-last-child(-n + 3) { border-bottom: 0; }
	dt { color: var(--muted); font-family: 'DM Mono', monospace; font-size: 0.63rem; font-weight: 500; letter-spacing: 0.045em; line-height: 1.4; text-transform: uppercase; }
	dd { margin: 8px 0 0; color: #254153; font-family: Newsreader, Georgia, serif; font-size: 1.05rem; font-weight: 600; line-height: 1.2; }
	.section-intro { margin-bottom: 19px; }
	.checklist { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px; padding: 0; list-style: none; counter-reset: actions; }
	.checklist li { display: flex; gap: 13px; min-height: 119px; margin: 0; padding: 17px; border: 1px solid var(--line); border-radius: 14px; background: #fff; counter-increment: actions; }
	.step-number { display: grid; flex: 0 0 auto; width: 27px; height: 27px; place-items: center; color: var(--blue); background: var(--blue-soft); border-radius: 8px; font-family: 'DM Mono', monospace; font-size: 0.66rem; font-weight: 500; }
	.step-number::before { content: counter(actions, decimal-leading-zero); }
	.checklist strong { display: block; color: #214051; font-size: 0.87rem; line-height: 1.35; }
	.checklist p { margin: 5px 0 0; color: var(--muted); font-size: 0.77rem; line-height: 1.48; }
	.source-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; margin: 19px 0 22px; padding: 0; list-style: none; }
	.source-list li { margin: 0; }
	.source-list a { display: flex; justify-content: space-between; gap: 12px; min-height: 68px; padding: 14px; border: 1px solid var(--line); border-radius: 12px; color: #31566b; font-size: 0.81rem; font-weight: 700; line-height: 1.35; text-decoration: none; }
	.source-list a:hover { border-color: #a5d2df; background: #f5fbfc; color: var(--blue); }
	.small { color: var(--muted); font-size: 0.83rem; }
	footer { display: flex; justify-content: space-between; gap: 28px; padding: 22px clamp(28px, 5vw, 68px); color: #677984; background: #f2f7f7; border-top: 1px solid var(--line); font-size: 0.75rem; line-height: 1.5; }
	footer span:last-child { max-width: 570px; text-align: right; }

	@media (max-width: 1050px) {
		.brief-layout { grid-template-columns: 1fr; }
		.rail { position: static; display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr); gap: 28px; }
		.contents { margin-top: 0; }
		.prepared { display: none; }
		.contents ol { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 16px; }
		.contents a { min-height: 53px; }
	}

	@media (max-width: 760px) {
		.page { width: 100%; margin: 0; border: 0; border-radius: 0; }
		.hero { grid-template-columns: 1fr; gap: 30px; padding: 33px 23px 30px; }
		.hero::after { right: -12px; bottom: -17px; font-size: 12rem; }
		h1 { font-size: clamp(3.1rem, 15vw, 4.7rem); }
		.lede { margin-top: 22px; font-size: 1rem; }
		.route-card { max-width: 500px; padding: 21px; }
		.brief-layout { gap: 33px; padding: 31px 20px 45px; }
		.rail { display: block; }
		.contents { margin-top: 27px; }
		.contents ol { grid-template-columns: repeat(2, minmax(0, 1fr)); }
		.snapshot { margin-bottom: 36px; }
		.snapshot-heading { display: block; }
		.snapshot h2 { margin-top: 8px; font-size: 2.2rem; }
		.quick-grid { grid-template-columns: 1fr; gap: 9px; }
		.stat { display: grid; grid-template-columns: 1.05fr 0.85fr; align-items: center; min-height: 0; padding: 17px; }
		.stat-label { grid-row: 1; }
		.stat strong { grid-row: 2; margin-top: 8px; }
		.stat > span:last-child { grid-column: 2; grid-row: 1 / span 2; margin: 0; }
		section + section { margin-top: 51px; }
		.decision-grid, .prose-grid { grid-template-columns: 1fr; gap: 0; }
		.rank-list { grid-template-columns: 1fr; }
		.key-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
		.key-list div:nth-child(3n) { border-right: 1px solid var(--line); }
		.key-list div:nth-child(2n) { border-right: 0; }
		.key-list div:nth-last-child(-n + 3) { border-bottom: 1px solid var(--line); }
		.key-list div:nth-last-child(-n + 2) { border-bottom: 0; }
		.checklist, .source-list { grid-template-columns: 1fr; }
		.checklist li { min-height: 0; }
		footer { display: block; padding: 20px; }
		footer span { display: block; }
		footer span:last-child { margin-top: 7px; text-align: left; }
	}

	@media (max-width: 430px) {
		.hero-kicker p { font-size: 0.58rem; }
		.contents ol { grid-template-columns: 1fr; }
		.key-list { grid-template-columns: 1fr; }
		.key-list div, .key-list div:nth-child(3n) { min-height: 0; border-right: 0; border-bottom: 1px solid var(--line); }
		.key-list div:last-child { border-bottom: 0; }
	}

	@media print {
		.page { width: 100%; margin: 0; border: 0; border-radius: 0; box-shadow: none; }
		.hero { padding: 30px 36px; background: #07577a !important; }
		.hero::before, .hero::after, .route-card, .hero-actions, .rail { display: none; }
		.hero { display: block; }
		h1 { font-size: 36pt; }
		.brief-layout { display: block; padding: 28px 36px; }
		section + section { margin-top: 32px; }
		footer { padding: 18px 36px; }
	}
</style>
