# AGENTS.md

**See [AI_RULES.md](./AI_RULES.md) for development standards and conventions.**

This project uses **bun** as the package manager and script runner. Use `bun run <script>` (e.g. `bun run dev`, `bun run check`), not npm. The deliverable is not the dev server but `bun run build:single`, which emits a single self-contained `build/promai-hof-application-brief.html` meant to be emailed and opened from disk — keep everything working over `file://`.
