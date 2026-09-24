# AI_RULES.md

Development standards for this repo. `AGENTS.md` and `CLAUDE.md` both point here.

## What this project is

A single HTML document, sent by email, that presents two things:

1. **Materias disponibles** — the UPIICSA catalogue for 7.º and 8.º semestre.
2. **Materias propuestas** — the UPV/EHU subjects proposed for the exchange, with
   their UPIICSA equivalence.
3. **Guías docentes** — the full official course guide for each of those
   subjects, transcribed into the document so the reader never has to open a
   link.

It is a _document_, not an app: no server, no data fetching, no persistence. The
deliverable is one file that opens from disk over `file://`.

## Tooling

**bun** is the package manager and script runner. Use `bun run <script>`, not npm.

| script                 | purpose                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `bun run dev`          | dev server                                                      |
| `bun run check`        | `svelte-check` — must be clean before finishing                 |
| `bun run lint`         | prettier + eslint                                               |
| `bun run format`       | prettier write                                                  |
| `bun run build:single` | the real deliverable: `build/promai-hof-application-brief.html` |

`build:single` sets `SINGLE_FILE=1`, which makes Vite inline every asset as a
data URI and SvelteKit emit one inline bundle; `scripts/pack-single-file.js` then
deletes the leftover chunks and renames the file. Anything that breaks under
`file://` (absolute asset paths, fetched manifests, server routes) breaks the
deliverable — guard such code behind `__SINGLE_FILE__`.

Fonts are imported through `src/routes/fonts.css` as latin-only subsets, not the
`@fontsource-variable` index files, because the whole font gets base64-inlined.
Do not add font weights or subsets without checking the output size.

## Structure

- `src/lib/data/` — the source data as typed plain objects. All content lives
  here; components stay presentational. `materias.ts` comes from the two
  spreadsheets; `guias.ts` is the literal text of the UPV/EHU guías docentes
  (2026/27). Treat `guias.ts` as a transcription: to update it, re-copy from the
  official ficha rather than rewriting the university's wording. `validacion.ts`
  holds the application-readiness facts: level, cuatrimestre, language, formal
  enrolment restrictions, recommended background and timetable conflicts.
- `src/lib/state/` — the little shared UI state the document needs (which ficha
  is unfolded), as `.svelte.ts` rune classes.
- `src/lib/components/brief/` — the document's own sections and primitives
  (`section.svelte`, `stat.svelte`, `ehu-table.svelte`, one component per section).
- `src/lib/components/ui/` — shadcn-svelte. Generated; edit only via the CLI.
- `src/routes/+page.svelte` — composes the sections. Route pages compose, they do
  not hold markup for the sections themselves.

## UI and UX conventions

- **shadcn-svelte**, `luma` style, `taupe` base, `--radius: 0rem`. Corners are
  square; do not reintroduce rounding.
- **Typography**: `font-heading` (Outfit Variable) for headings and stat figures,
  Inter Variable for body. Monospace + `uppercase tracking-[0.2em]` for eyebrows
  and codes. Numeric columns get `tabular-nums`.
- **Colour**: the theme tokens only (`bg-background`, `text-muted-foreground`,
  `border-border`, …). Never hard-code a hex or an oklch value in a component.
  The primary red is an accent for eyebrows, links and badges — not a fill.
  `--warning` / `--warning-muted` carry every unresolved-verification state; a
  warning is amber, never red, because nothing in the brief is a rejection.
- **Layout**: one centred column, `max-w-4xl`. Sections are separated by a top
  border, never by a card. Prose is capped at `max-w-prose`.
- **Tables** are plain semantic `<table>` inside a bordered, `overflow-x-auto`
  wrapper — they print and forward cleanly, which a JS data grid does not.
- Dark mode must keep working: it comes for free from the tokens, so it only
  breaks if you hard-code colours.
- **Navigation**: a sticky navbar at the top links to each section by fragment;
  sections carry `scroll-mt-20` so the bar never covers a heading. It is hidden
  in print.
- **Long content** folds into native `<details>`, not a JS accordion: the text
  stays in the DOM for Ctrl+F and can be forced open for printing (see the print
  rules in `ficha.svelte`). A link into a folded ficha must also unfold it.
- No interactivity that a reader of a static emailed file cannot use. Anything
  stateful must degrade to readable content.

## Factual discipline

The brief backs an application, so nothing in it may be inferred:

- Every claim in `validacion.ts` must be traceable to the official ficha linked
  from `materias.ts`. Timetable conflicts are computed from the published
  Castellano groups, not estimated.
- A **formal enrolment restriction** (the ficha's own «Restricciones» block) and
  **recommended prior knowledge** are different things and must stay visibly
  different. Never write "sin prerrequisitos" — write that no formal restriction
  appears in the ficha.
- Never claim exchange credits satisfy the 60-credit rule, and never claim the
  five primary subjects are timetable-compatible: the published 27705 ↔ 28627
  Thursday overlap is real and unresolved.
- Subjects are never swapped, promoted from the alternatives list, or assigned a
  laboratory group without the user asking. Five primary, six alternatives.

## Language

The document is written in Spanish, its audience's language. Paraglide is wired
up (`en`/`es`), but the brief's copy is authored directly in the components; do
not machine-translate it into message keys without being asked.

## Before finishing

Run `bun run check` and `bun run lint`, then `bun run build:single` and confirm
the emitted file still opens standalone.
