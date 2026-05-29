---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 02: Canonical docs path and publish scope (FR-066)

**Task ID:** E5:S09:T02  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.2+2 — FR-066 RW)  
**Code:** E5S09T02

**Feature Request:** [FR-066 – Canonical docs path](../../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md)

---

## Summary

Implement **FR-066**: point the Docusaurus docs plugin at repository **`docs/`** with explicit **include/exclude** (or documented “include all”) and a committed **publish scope** policy.

---

## Input

- [FR-066](../../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md)
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md`
- Completed or in-progress **FR-065** (site identity)

---

## Deliverable

- `portal/docusaurus.config.js` (and minimal companion changes) wiring `docs.path` to `../docs` or equivalent
- Publish scope documented in `portal/README.md` and/or architecture note
- `editUrl` consistent with FR-065 after merge

---

## Acceptance Criteria

- Per FR-066 ACs (canonical tree wired, scope committed, build may fail pending FR-067).

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.2+N)` after FR-066 ACs are met.

---

## Evidence

- **RW -k:** v0.5.9.2+1 — task T02 version marker (kanban init sequencing per user request).
- **Implementation (2026-03-30):** `portal/docusaurus.config.js` — `path: '../docs'`, `exclude` for changelog archive paths, docs `editUrl` → `tree/main/docs/`; `portal/README.md` **Publish scope**; `docs/documentation/docusaurus-portal-index.md`; scaffold cleared from `portal/docs/`; `tests/test_portal_fr066_docs_path.py`; FR-065 `editUrl` test + `PORTAL_BUILD_STRICT` for green build (**FR-067**).
- **`npm run build` (post–FR-066):** fails on **MDX compilation** in corpus (e.g. `docs/project-management/kanban/fr-br/FR-009-*.md` unexpected character in JSX; `FR-014` acorn parse; `FR-059` similar) — actionable for **FR-067**, not path misconfiguration.

---

## Specification (E5:S09:T02 / FR-066)

Testable behaviors **S1–S7** are enforced by [`tests/test_portal_fr066_docs_path.py`](../../../../../../tests/test_portal_fr066_docs_path.py). **S8** is process: `npm run build` may fail until **FR-067**; failures should reflect corpus/link issues, not missing `docs/` path.

| ID | Behavior | FR map |
|----|----------|--------|
| **S1** | `docs.path` points at repo root `docs/` (e.g. `../docs` from `portal/`). | R01, AC1 |
| **S2** | `portal/README.md` has a **Publish scope** with included pillars and excluded paths + rationale. | R03, AC2 |
| **S3** | Docs plugin `exclude` (or doc) covers mass **changelog-archive** trees under `docs/`. | R02 |
| **S4** | Docs `editUrl` is `https://github.com/earlution/ai-dev-kit/tree/main/docs/`. | R04 |
| **S5** | No duplicate docs root: `portal/docs` scaffold removed or empty; canonical content is `docs/`. | Scope |
| **S6** | `sidebars.js` autogenerates from docs root (bootstrap). | Scope |
| **S7** | Publish scope links [`ultimate-canonical-kb-structure.md`](../../../../../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md). | NF01 |
| **S8** | Build may be red (**NF02**); representative errors documented for **FR-067** (**AC3**). | NF02, AC3 |

---

## Dependencies

- **FR-065** / E5:S09:T01 recommended first.
