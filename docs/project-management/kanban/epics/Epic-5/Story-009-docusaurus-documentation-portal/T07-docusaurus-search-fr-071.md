---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 07: Docusaurus site search (FR-071)

**Task ID:** E5:S09:T07  
**Status:** COMPLETE  
**Priority:** LOW  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 — **v0.5.9.7+1** (RW E5:S09:T07 — FR-071)  
**Code:** E5S09T07

**Feature Request:** [FR-071 – Site search](../../../fr-br/FR-071-docusaurus-site-search.md)

---

## Summary

Implement **FR-071**: add **Algolia DocSearch** (or self-serve) **or** **local/offline** search plugin; document indexing/setup; verify on **production URL** (FR-070).

---

## Input

- [FR-071](../../../fr-br/FR-071-docusaurus-site-search.md)
- **E5:S09:T06** live URL

---

## Deliverable

- Search plugin/theme configuration in Docusaurus
- Maintainer-facing setup notes in `portal/README.md`
- Smoke-test queries documented

---

## Acceptance Criteria

- Per FR-071 ACs.

---

## Specification (executable — FR-071)

| ID | Source | Statement |
| --- | --- | --- |
| **S1** | R01 | Search UI enabled: `@easyops-cn/docusaurus-search-local` theme registers **navbar** search (config + dependency in repo). |
| **S2** | R02 / AC1 | [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) lists ≥3 **smoke-test queries** with expected hits vs the **deployed** site ([FR-070 canonical URL](https://earlution.github.io/ai-dev-kit/)). |
| **S3** | R03 / AC2 | README documents **local** provider, index updates on each **static build/deploy**, **no CI secrets** for search. |
| **S4** | NF01 | README **Privacy** subsection: offline index only; no third-party search API. |
| **S5** | NF02 | README notes **build time** with local search (observed or CI reference). |
| **S6** | AC3 | `package.json` **build** script remains `docusaurus build --no-minify`; FR-069 workflow unchanged in intent. |

**Tests:** [`tests/test_portal_fr071_search.py`](../../../../../../tests/test_portal_fr071_search.py)

**Provider decision:** **Local / offline** search (`@easyops-cn/docusaurus-search-local`) — no Algolia DocSearch queue, index ships with `build/`, fits GitHub Pages and NF01.

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.7+1)` — **RW E5:S09:T07**.

---

## Evidence

- [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js) — `themes` + `@easyops-cn/docusaurus-search-local`
- [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) — Site search (FR-071)
- [`tests/test_portal_fr071_search.py`](../../../../../../tests/test_portal_fr071_search.py)

---

## Dependencies

- **E5:S09:T06** (FR-070) for production verification.
