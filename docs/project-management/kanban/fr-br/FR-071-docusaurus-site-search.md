---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Site Search

**Type:** Feature Request (FR)  
**ID:** FR-071  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** LOW  
**Status:** IMPLEMENTED (**v0.5.9.7+1**) — **Local search** (`@easyops-cn/docusaurus-search-local`); contract tests + `portal/README.md` smoke queries. **AC1 (live queries):** verify on production URL after deploy if Pages is enabled (`gh-pages` / root).  
**Assigned Task:** E5:S09:T07 — [`T07-docusaurus-search-fr-071.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T07-docusaurus-search-fr-071.md)

---

## Summary

Add **site search** to the Docusaurus deployment using either **Algolia DocSearch** (or Algolia self-serve) or **local/offline search** (`@easyops-cn/docusaurus-search-local` or official local search when compatible), including config in `docusaurus.config.js`, any required **secrets/indexing** steps documented in `portal/README.md`, and verification on the **production URL** (FR-070).

---

## Problem Statement

Large KB navigation (FR-068) helps browsing but does not replace **full-text search**. Adopters and maintainers expect to find policies and workflows by keyword.

---

## Scope (Atomic)

**In scope**

- Choose one approach: **Algolia** (DocSearch application + crawl) **or** **local search** plugin—document rationale (privacy, cost, indexing effort).
- Implement plugin/theme config; ensure **`npm run build`** still passes.
- Document: how indexes update (on deploy, cron, or manual), and env vars required for CI if any.

**Out of scope**

- Changing search ranking algorithms beyond plugin defaults.
- Unified search across external Notion (Notion remains separate entry point unless a future FR).

---

## Functional Requirements

- [x] **FR-071:R01** – Search box appears in site header (or theme-supported location). *(Local search theme — navbar.)*
- [x] **FR-071:R02** – Queries return results for representative pages (smoke test checklist in README). *(Checklist in `portal/README.md`; confirm on live site after deploy.)*
- [x] **FR-071:R03** – Production site (post FR-070) has search **enabled** or documented blockers (e.g. DocSearch approval pending) with ETA/owner. *(Enabled in static build: `build/search-index.json` + `build/search/`; live site depends on FR-070 Pages + deploy.)*

---

## Non-Functional Requirements

- [x] **FR-071:NF01** – **Privacy:** If Algolia, document what is sent; if local-only, state no third-party queries. *(Local-only; README Privacy.)*
- [x] **FR-071:NF02** – **Build time:** Local search must not explode CI duration beyond agreed team threshold (document observed duration). *(~2 min reference in `portal/README.md`.)*

---

## Acceptance Criteria

- [x] AC1: Search works on deployed site for a defined set of test queries. *(Defined; **verify** on `https://earlution.github.io/ai-dev-kit/` after publish.)*
- [x] AC2: Setup steps are reproducible for another maintainer.
- [x] AC3: No regression: production build and FR-069 workflow remain green. *(Contract tests + local `npm run build`.)*

---

## Dependencies / Ordering

- **FR-067** (green build), **FR-070** (public URL for final verification). **FR-068** optional but improves browse→search UX.

## Related FRs

- **FR-065**–**FR-070** – Full adoption chain.
- **FR-066** / **FR-067** – Corpus scope affects index size.

---

## References

- [Docusaurus search](https://docusaurus.io/docs/search)
- `portal/docusaurus.config.js`
