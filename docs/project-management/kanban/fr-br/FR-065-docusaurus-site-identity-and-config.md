---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Site Identity and Base Configuration

**Type:** Feature Request (FR)  
**ID:** FR-065  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** IMPLEMENTED (v0.5.9.1+2 / E5:S09:T01)  
**Assigned Task:** E5:S09:T01 — [`T01-docusaurus-site-identity-fr-065.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T01-docusaurus-site-identity-fr-065.md)

---

## Summary

Replace all **create-docusaurus template** branding and placeholder deployment metadata in `portal/docusaurus.config.js` (and related `themeConfig` assets) with **AI Dev Kit–accurate** title, tagline, URLs, GitHub `organizationName` / `projectName`, and **edit links** pointing at this repository—**without** changing the docs content root (still `portal/docs/` for this FR).

---

## Problem Statement

The `portal/` app builds, but presents “My Site,” example.com URLs, and Facebook/Docusaurus edit URLs. External readers and contributors cannot tell the site belongs to ai-dev-kit or land correct “edit this page” targets.

---

## Scope (Atomic)

**In scope**

- `portal/docusaurus.config.js`: `title`, `tagline`, `url`, `baseUrl` (document chosen strategy: e.g. prod hostname + path), `organizationName`, `projectName`, `favicon` if needed, `editUrl` for docs and blog (or disable `editUrl` consistently).
- `themeConfig.navbar`, `footer`, `image` (social card): remove or replace template links with project-appropriate links (e.g. repo, main README, framework docs).
- `portal/README.md`: short paragraph stating this is the **AI Dev Kit documentation site** and linking to root `README.md` for the monorepo.

**Explicitly out of scope**

- Pointing the docs plugin at `../docs/` (FR-066).
- Fixing MDX/link errors from real corpus (FR-067).
- CI, deploy, sidebar IA (FR-068–FR-070).

---

## Functional Requirements

- [x] **FR-065:R01** – No remaining placeholder identities (verified **v0.5.9.1+2** / `tests/test_portal_fr065_identity.py`).
- [x] **FR-065:R02** – `editUrl` targets `portal/docs/` and `portal/blog/` under **earlution/ai-dev-kit** (until FR-066 moves tree).
- [x] **FR-065:R03** – Navbar/footer cleaned; secondary Docusaurus link under “More” only (**v0.5.9.1+2**).
- [x] **FR-065:R04** – `npm run build` in `portal/` exits zero (**v0.5.9.1+2**).

---

## Non-Functional Requirements

- [x] **FR-065:NF01** – Scope limited to `portal/` + pytest marker/tests + kanban/FR touch for release traceability (**v0.5.9.1+2**).

---

## Acceptance Criteria

- [x] AC1: Template placeholders gone (**v0.5.9.1+2**, tests + search).
- [x] AC2: `organizationName` / `projectName` = **earlution** / **ai-dev-kit** (**v0.5.9.1+2**).
- [x] AC3: `portal/README.md` — AI Dev Kit + link to repo root README (**v0.5.9.1+2**).
- [x] AC4: Production build green for current `portal/docs` content (**v0.5.9.1+2**).

---

## Dependencies / Ordering

- **None** (first in Docusaurus adoption chain).

## Related FRs

- **FR-066** – Canonical docs path and publish scope.
- **FR-058** – Markdown Maintenance Workflow (future corpus hygiene).

---

## References

- `portal/docusaurus.config.js`
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` (context only)
