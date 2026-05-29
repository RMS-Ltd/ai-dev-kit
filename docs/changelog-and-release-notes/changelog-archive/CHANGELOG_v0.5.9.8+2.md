# Changelog v0.5.9.8+2

**Release Date:** 2026-04-01 14:20:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 8  
**Task doc:** [T08-docusaurus-strict-broken-links-post-fr067.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)  
**FR:** [FR-067](../../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (**FU-1** strict links)

## Summary

**E5:S09:T08:** Docusaurus **`onBrokenLinks` / `onBrokenMarkdownLinks` → `'throw'`** with corpus link remediation so **`npm run build`** succeeds under strict checks. Portal README, FR-067, and maintenance triage updated; **FR-067 S2** tests assert **throw**.

## Changes

### Attempted / implemented (verify in CI)

- **`portal/docusaurus.config.js`** — strict link mode (already strict; comments aligned with T08).
- **`docs/**`** — Relative and directory links repaired (GitHub URLs for out-of-tree targets where needed); KB, architecture, kanban, FR/BR samples.
- **`portal/README.md`** — Documents strict policy; points to triage and **FR-058** for ongoing hygiene.
- **`tests/test_portal_fr067_build_triage.py`** — S2 expects **`throw`** for both link settings.
- **Traceability:** `docusaurus-corpus-triage-fr-067.md` **FU-1** row; **FR-067** follow-up table; Story 009 + Epic 5 + T08 task status.

## Verification

- `cd portal && npm run build` → **0**
- `PORTAL_BUILD_STRICT=1 pytest tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build tests/test_portal_fr067_build_triage.py`
