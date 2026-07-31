# ProMAI Hof Application Brief

A bilingual planning brief for Max’s IPN ProMAI application, with Hof University of Applied Sciences as the preferred destination.

## Stack

- SvelteKit 2 and Svelte 5
- TypeScript
- Bun
- Vercel adapter

## Routing decision

This is a single, substantial planning document, so the app uses SvelteKit’s file-based router with one public route: `src/routes/+page.svelte` (`/`). The table of contents uses semantic in-page anchors. This keeps the current experience focused while leaving a conventional path for later routes, such as `src/routes/documents/[slug]/+page.svelte`, if the brief grows into a document collection.

## Project layout

- `src/lib/data/brief.ts` — factual content, labels, tables, links, and action items
- `src/lib/components/` — small reusable presentation components
- `src/routes/+page.svelte` — composition of the application brief
- `src/routes/layout.css` — global design tokens and responsive styling

## Commands

```sh
bun run dev
bun run check
bun run build
```

## Scope

This is a personal planning document based on the referenced conversation. It deliberately distinguishes working conclusions from requirements, equivalencies, deadlines, and language certificates that still require official confirmation from UPIICSA, IPN, and Hof.
