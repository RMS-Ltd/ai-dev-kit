---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Canonical Docs Path and Publish Scope

**Type:** Feature Request (FR)  
**ID:** FR-066  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** IMPLEMENTED (pending RW forensic close — config + scope **2026-03-30**)  
**Assigned Task:** E5:S09:T02 — [`T02-docusaurus-canonical-docs-path-fr-066.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T02-docusaurus-canonical-docs-path-fr-066.md)

---

## Summary

Configure the Docusaurus **docs plugin** to load markdown from the repository **`docs/`** tree (not only `portal/docs/`), with an **explicit, documented publish scope**: include/exclude patterns (e.g. heavy `changelog-archive`), `routeBasePath` if needed, and a **written policy** (in `portal/README.md` or `docs/architecture/…`) stating what is published vs intentionally excluded.

---

## Problem Statement

The canonical KB and documentation live under repo root `docs/`. The portal currently serves template pages from `portal/docs/`, so the static site is not the KB. We need a **deterministic wiring** and **scope contract** before IA and CI can treat the site as authoritative.

---

## Scope (Atomic)

**In scope**

- `portal/docusaurus.config.js` (and only other files required for path resolution): set `docs.path` to `../docs` or equivalent; add `exclude`, `include` (if supported/needed via plugins), or documented follow-up for glob exclusions per Docusaurus version.
- **Publish scope document:** one markdown section (prefer `portal/README.md` + optional short ADR) listing:
  - What is included (e.g. architecture, guides, knowledge, documentation).
  - What is excluded (e.g. full changelog archive, transient paths) and why.
- Remove or relocate **tutorial-only** `portal/docs/` content **only if** required to avoid duplicate routes; if kept, document dual-root strategy (prefer single source of truth).

**Out of scope**

- Achieving a green build on the full tree (FR-067).
- Sidebar structure (FR-068).
- Branding fixes (FR-065) may precede or merge in same sprint but this FR does not require them.

---

## Functional Requirements

- [x] **FR-066:R01** – Docs plugin reads from repo **`docs/`** (`path: '../docs'` in `portal/docusaurus.config.js`, **2026-03-30**).
- [x] **FR-066:R02** – `exclude` globs for `changelog-and-release-notes/changelog-archive/**` and mirror under `knowledge/`.
- [x] **FR-066:R03** – Publish scope in **`portal/README.md`** (committed).
- [x] **FR-066:R04** – Docs **`editUrl`** → `https://github.com/earlution/ai-dev-kit/tree/main/docs/`.

---

## Non-Functional Requirements

- [x] **FR-066:NF01** – `portal/README.md` links **`ultimate-canonical-kb-structure.md`**; entry doc `docs/documentation/docusaurus-portal-index.md`.
- [x] **FR-066:NF02** – `npm run build` fails on **MDX** in corpus (e.g. `fr-br/FR-009`, `FR-014`, `FR-059`); **FR-067** owns green build.

---

## Acceptance Criteria

- [x] AC1: Config points Docusaurus docs at repository `docs/` tree; `portal/docs` scaffold removed.
- [x] AC2: Publish scope (include/exclude + rationale) in `portal/README.md`.
- [x] AC3: `npm run build` yields **actionable** MDX errors (sample paths documented on **E5:S09:T02**).

---

## Dependencies / Ordering

- **FR-065** (recommended first): correct `url` / `baseUrl` / GitHub metadata for accurate `editUrl`.

## Related FRs

- **FR-067** – Production build + corpus triage.
- **FR-058** – Markdown maintenance (validator / lint alignment).

---

## References

- [Docusaurus docs plugin options](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md`
- `portal/sidebars.js` (may need stub until FR-068)
