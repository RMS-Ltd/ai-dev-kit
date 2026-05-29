# Changelog v0.5.9.3+1

**Release Date:** 2026-03-30 23:59:59 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 3  
**Task doc:** [T03-docusaurus-build-triage-fr-067.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)  
**FR:** [FR-067](../../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)

## Summary

E5:S09:T03 — **FR-067:** Docusaurus **`npm run build`** exit 0 for FR-066 publish scope; explicit **broken-link policy** (`warn` with README follow-up); MDX-safe corpus pass (numeric comparators, placeholders, templates); **`scripts/escape_mdx_placeholders.py`**; **`tests/test_portal_fr067_build_triage.py`**; triage note **`docs/maintenance/docusaurus-corpus-triage-fr-067.md`**.

## Changes

### Documentation / portal

- `portal/docusaurus.config.js` — `onBrokenLinks` / `onBrokenMarkdownLinks` set to `warn` (documented); comment cites FR-067.
- `portal/README.md` — **Broken links and anchors (FR-067)** subsection; link to triage note.
- Wide `docs/**/*.md` edits for MDX (e.g. `&lt;` for `<N` patterns, `{placeholder}` escapes, PIR template entities, Story-011 list formatting, RW-AGENT placeholders, task-template-generator prose).
- `docs/maintenance/docusaurus-corpus-triage-fr-067.md` — triage summary.
- `docs/knowledge/guides/building-persistent-knowledge.md` — YouTube link + figure notes (no missing images).

### Tooling / tests

- `scripts/escape_mdx_placeholders.py` — repeatable brace escape outside fenced code (skips changelog-archive).
- `tests/test_portal_fr067_build_triage.py` — S2–S4.

### Kanban / FR

- T03, Story 009, Epic 5, `kanban-board.md`, `kanban-completed.md`, FR-067 checklist updated.

## Verification

- `cd portal && npm run build` — exit 0.
- `PORTAL_BUILD_STRICT=1 pytest tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build` — pass.
- `pytest tests/test_portal_fr067_build_triage.py` — pass.
