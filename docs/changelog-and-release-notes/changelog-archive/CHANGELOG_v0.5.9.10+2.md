# Changelog v0.5.9.10+2

**Release Date:** 2026-04-01 15:17:58 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 10  
**Task doc:** [T10-docusaurus-strict-broken-anchors-post-t08.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)  
**FR:** [FR-067](../../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (**FU-3** strict anchors)

## Summary

**E5:S09:T10:** Docusaurus **`onBrokenAnchors: 'throw'`** with corpus remediation (explicit heading IDs and section stubs) so **`npm run build`** succeeds under strict link + anchor checks. **FR-067 FU-3** closed; portal README and **`test_fr067_s5_anchor_policy_strict`** added.

## Changes

### Change implemented

- **`portal/docusaurus.config.js`** — `onBrokenAnchors: 'throw'` (with T08 link strictness).
- **`docs/**`** — Anchor/heading alignment (workflow flaws, framework user-docs, building-persistent-knowledge, Story-001 T06, implementation-review story tasks, T10 task link fix).
- **`portal/README.md`** — Strict anchor policy; **T10** / **FU-3** pointers.
- **`tests/test_portal_fr067_build_triage.py`** — S5 asserts `onBrokenAnchors` + README anchor wording.
- **Traceability:** FR-067 FU-3, maintenance triage, Story 009, Epic 5, kanban board/completed, T10 task doc.

## Verification

- `cd portal && npm run build` → **0**
- `PORTAL_BUILD_STRICT=1 pytest tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build tests/test_portal_fr067_build_triage.py`
