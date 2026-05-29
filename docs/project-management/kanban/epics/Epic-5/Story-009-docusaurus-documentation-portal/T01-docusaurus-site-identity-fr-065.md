---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 01: Docusaurus site identity and config (FR-065)

**Task ID:** E5:S09:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.1+2 — FR-065 portal identity, tests, RW)  
**Code:** E5S09T01

**Feature Request:** [FR-065 – Docusaurus site identity](../../../fr-br/FR-065-docusaurus-site-identity-and-config.md)

---

## Summary

Implement **FR-065**: replace template branding and placeholder deployment metadata in `portal/docusaurus.config.js` and related theme assets with **AI Dev Kit** identity; **do not** change docs content root (remains `portal/docs/` until FR-066).

---

## Input

- [FR-065 – Docusaurus site identity](../../../fr-br/FR-065-docusaurus-site-identity-and-config.md)
- Existing `portal/` scaffold and `docusaurus.config.js`

---

## Deliverable

- Updated site `title`, `tagline`, `url` / `baseUrl` strategy, GitHub fields, `editUrl` policy
- Navbar/footer aligned to this project (not Docusaurus template defaults)
- `portal/README.md` states purpose relative to repo root
- `npm run build` in `portal/` still passes

---

## Acceptance Criteria

- Per FR-065 acceptance criteria (template strings removed, repo identity correct, build green).

---

## Version Anchor

**Forensic marker (when complete):** `✅ COMPLETE (v0.5.9.1+N)` after FR-065 ACs are met.

---

## Evidence

- **RW -k (kanban filing):** v0.5.9.1+1 — Story 009 and tasks T01–T07 filed; FR assignments; template fields for validators.
- **Implementation (2026-03-30):** `portal/docusaurus.config.js` + `portal/README.md` per FR-065; regressions in `tests/test_portal_fr065_identity.py`; `npm run build` green; optional `PORTAL_BUILD=1 pytest tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build`.

---

## Specification (E5:S09:T01 / FR-065)

Testable behaviors **S1–S8** are enforced by [`tests/test_portal_fr065_identity.py`](../../../../../../tests/test_portal_fr065_identity.py). **S9** (green `npm run build`): `PORTAL_BUILD_STRICT=1 pytest -m portal_build` after **FR-067**.

| ID | Behavior | FR map |
|----|----------|--------|
| **S1** | No template placeholders in `portal/docusaurus.config.js`: `My Site`, `Dinosaurs are cool`, `your-docusaurus-site.example.com`, `organizationName: 'facebook'`, `projectName: 'docusaurus'`, create-docusaurus `editUrl` path. | R01, AC1 |
| **S2** | `organizationName` / `projectName` are `earlution` / `ai-dev-kit`. | AC2 |
| **S3** | `url` / `baseUrl` are not example.com; GitHub Pages convention `https://earlution.github.io` + `/ai-dev-kit/` with comment that FR-070 may adjust. | R01 |
| **S4** | `editUrl` for docs/blog targets `github.com/earlution/ai-dev-kit/tree/main/portal/docs/` and `.../portal/blog/`. | R02 |
| **S5** | No Stack Overflow / Discord / Docusaurus X template links; no `github.com/facebook/docusaurus` as primary nav. | R03 |
| **S6** | Navbar `title` / logo `alt` use **AI Dev Kit** (not `My Site`). | R03 |
| **S7** | Footer `copyright` not `My Project, Inc.` | R03 |
| **S8** | `portal/README.md` names **AI Dev Kit** and links to repo root `README.md`. | AC3 |
| **S9** | `npm run build` in `portal/` exits 0. | R04, AC4 |

**Out of scope:** docs plugin path to `../docs/` (FR-066), CI (FR-069), corpus (FR-067), IA (FR-068).

---

## Dependencies

- None (first in Docusaurus chain).
