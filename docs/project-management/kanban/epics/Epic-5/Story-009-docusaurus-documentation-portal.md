---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 009 – Docusaurus Documentation Portal

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-03-30  
**Last updated:** 2026-04-19 (v0.5.9.11+5 — **T11 / BR-068** closed)
**Version:** v0.5.9.11+5
**Code:** E5S09

---

## Task Checklist

- [x] **E5:S09:T01 – Docusaurus site identity and config (FR-065)** - ✅ COMPLETE (v0.5.9.1+2)
- [x] **E5:S09:T02 – Canonical docs path and publish scope (FR-066)** - ✅ COMPLETE (v0.5.9.2+2)
- [x] **E5:S09:T03 – Production build corpus triage (FR-067)** - ✅ COMPLETE (v0.5.9.3+1)
- [x] **E5:S09:T04 – Navigation, sidebar IA, and landing page (FR-068)** - ✅ COMPLETE (v0.5.9.4+1)
- [x] **E5:S09:T05 – CI build gate (FR-069)** - ✅ COMPLETE (v0.5.9.5+1)
- [x] **E5:S09:T06 – Deployment and hosting (FR-070)** - ✅ COMPLETE (v0.5.9.6+1)
- [x] **E5:S09:T07 – Site search (FR-071)** - ✅ COMPLETE (v0.5.9.7+1)
- [x] **E5:S09:T08 – Strict broken-link checking post–FR-067 (warn → throw)** - ✅ COMPLETE (**v0.5.9.8+2** — **RW E5:S09:T08**); **FU-1** on [FR-067](../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — [task file](Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)
- [x] **E5:S09:T09 – GitHub Pages go-live verification (FR-070 follow-up)** - ✅ COMPLETE (v0.5.9.9+2 — **RW E5:S09:T09**) — [task file](Story-009-docusaurus-documentation-portal/T09-github-pages-go-live-verification.md)
- [x] **E5:S09:T10 – Strict broken-anchor checking post–T08** - ✅ COMPLETE (**v0.5.9.10+2** — **RW E5:S09:T10**); **FR-067** [FU-3](../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — [task file](Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)
- [x] **E5:S09:T11 – Monorepo cross-root Markdown link resolution ([BR-068](../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md))** — ✅ COMPLETE (**v0.5.9.11+5** — Wave 4 closes **BR-068**) — [task file](Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)

> **Forensic marker format:** `✅ COMPLETE (vRC.E.S.T+B)` when done.

---

## Overview

Deliver a **complete Docusaurus adoption path** for the AI Dev Kit: the `portal/` site becomes the browsable surface for the repository `docs/` KB (per publish scope), with identity, build triage, navigation, CI, hosting, and search—tracked as **atomic feature requests FR-065 through FR-071**.

---

## Goal

- Replace template-only portal with **AI Dev Kit–branded** configuration.
- Ingest canonical **`docs/`** with an explicit **include/exclude publish policy**.
- Achieve **green production builds**, then **IA**, **CI**, **deploy**, and **search**.

---

## Related FRs

| Task | FR | Document |
| --- | --- | --- |
| T01 | FR-065 | [`FR-065-docusaurus-site-identity-and-config.md`](../../fr-br/FR-065-docusaurus-site-identity-and-config.md) |
| T02 | FR-066 | [`FR-066-docusaurus-canonical-docs-path-and-publish-scope.md`](../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md) |
| T03 | FR-067 | [`FR-067-docusaurus-production-build-corpus-triage.md`](../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) |
| T04 | FR-068 | [`FR-068-docusaurus-navigation-sidebar-and-landing.md`](../../fr-br/FR-068-docusaurus-navigation-sidebar-and-landing.md) |
| T05 | FR-069 | [`FR-069-docusaurus-ci-build-gate.md`](../../fr-br/FR-069-docusaurus-ci-build-gate.md) |
| T06 | FR-070 | [`FR-070-docusaurus-deployment-and-hosting.md`](../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) |
| T07 | FR-071 | [`FR-071-docusaurus-site-search.md`](../../fr-br/FR-071-docusaurus-site-search.md) |
| T08 | FR-067 (FU-1) | [`FR-067-docusaurus-production-build-corpus-triage.md`](../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) |
| T09 | FR-070 (follow-up) | [`FR-070-docusaurus-deployment-and-hosting.md`](../../fr-br/FR-070-docusaurus-deployment-and-hosting.md) |
| T10 | FR-067 (FU-3) | [`FR-067-docusaurus-production-build-corpus-triage.md`](../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) |

### Related BRs (post-FR backlog)

| Task | BR | Document |
| --- | --- | --- |
| T11 | BR-068 | [`BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md`](../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) |

---

## Dependencies

- **Coordinates with:** FR-058 (Markdown Maintenance Workflow) for corpus hygiene during FR-067.
- **Coordinates with:** `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` for pillar alignment (FR-066, FR-068).

---

## References

- `portal/` — Docusaurus app
- Epic 5: [`Epic-5.md`](Epic-5.md)
