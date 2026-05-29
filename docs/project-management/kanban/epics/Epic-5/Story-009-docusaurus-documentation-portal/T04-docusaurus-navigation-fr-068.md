---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 04: Navigation, sidebar IA, and landing (FR-068)

**Task ID:** E5:S09:T04  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.4+1 — FR-068 released)  
**Code:** E5S09T04

**Feature Request:** [FR-068 – Sidebar and landing](../../../fr-br/FR-068-docusaurus-navigation-sidebar-and-landing.md)

---

## Summary

Implement **FR-068**: sidebar information architecture aligned to **canonical KB pillars** and an **AI Dev Kit** homepage replacing the Docusaurus tutorial CTA.

---

## Input

- [FR-068](../../../fr-br/FR-068-docusaurus-navigation-sidebar-and-landing.md)
- **E5:S09:T03** recommended complete

---

## Deliverable

- `portal/sidebars.js` (or structured autogen) mapped to pillars per `ultimate-canonical-kb-structure.md`
- Updated `portal/src/pages/index.js` (and styles as needed)
- Build remains green

---

## Acceptance Criteria

- Per FR-068 ACs (executable checks: **S1–S7** below + `tests/test_portal_fr068_navigation.py`; **S6** via `PORTAL_BUILD_STRICT=1` + `test_fr065_s9_portal_production_build`).

---

## Specification (executable — FR-068)

| ID | Source | Statement |
|----|--------|------------|
| **S1** | R01 / NF01 | [portal/sidebars.js](https://github.com/earlution/ai-dev-kit/blob/main/portal/sidebars.js) defines **top-level categories** mapping to KB pillars (and extra `docs/` roots); header **comment** states ordering philosophy (canonical pillar order, then extensions) and points to [portal README](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) mapping table. |
| **S2** | R01 | [portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) includes **FR-068** markdown **table**: sidebar label → `docs/` folder (canonical vs extension). |
| **S3** | R02 / AC2 | [portal/src/pages/index.js](https://github.com/earlution/ai-dev-kit/blob/main/portal/src/pages/index.js): **no** “Docusaurus Tutorial” primary CTA; hero/body use **concrete** `/docs/...` links (portal index, versioning policy, framework install guide, Kanban governance). |
| **S4** | R02 / NF02 | Landing: semantic **headings** (`h1` hero, `h2`/`h3` blocks) and **descriptive** link labels (not “click here”). |
| **S5** | R03 | Every `dirName` in `sidebars.js` exists under repo **`docs/`**; `docusaurus.config.js` **navbar** `sidebarId` matches exported sidebar key (`docsSidebar`). |
| **S6** | R04 / AC3 | `npm run build` green with **PORTAL_BUILD_STRICT=1** (`tests/test_portal_fr065_identity.py::test_fr065_s9_portal_production_build`). |
| **S7** | AC1 (surrogate) | Sidebar includes **autogen categories** for each canonical pillar folder used in FR-068 (`architecture`, `changelog-and-release-notes`, `project-management`, `guides`, `documentation`, `knowledge`); homepage links include **≥1** doc under **documentation/** and **≥1** under **architecture/**. Full two-click review remains human AC1. |

**Tests:** [`tests/test_portal_fr068_navigation.py`](../../../../../../tests/test_portal_fr068_navigation.py) (S1–S5, S7); S6 via FR-065 strict build test.

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.4+1)` — **RW E5:S09:T04**.

---

## Evidence

- **`portal/sidebars.js`:** `docsSidebar` — pillar + extension categories with autogen per `docs/` subtree (FR-068).
- **`portal/docusaurus.config.js`:** navbar `sidebarId: 'docsSidebar'`.
- **`portal/src/pages/index.js`**, **`HomepageFeatures`:** ADK wayfinding; no Docusaurus tutorial CTA.
- **`portal/README.md`:** FR-068 mapping table; build note (`--no-minify` workaround for Terser client bundle).
- **`tests/test_portal_fr068_navigation.py`:** S1–S5, S7; S6 via `test_fr065_s9_portal_production_build` + `PORTAL_BUILD_STRICT=1`.
- **`docs/documentation/docusaurus-portal-index.md`:** sidebar wording updated for FR-068.

---

## Dependencies

- **E5:S09:T03** recommended (stable routes).
