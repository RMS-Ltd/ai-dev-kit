# Changelog v0.1.2.14+1

**Release Date:** 2026-06-04 19:57:56 UTC  
**Epic:** Epic 1 — AI Dev Kit Core  
**Story:** Story 2 — Package & Repo Architecture  
**Task:** E01:S02:T14 — Adopter external dependency tracking (FR-003)  
**Version:** 0.1.2.14+1  
**SemVer (task_touch):** v0.4.883+1

---

## Summary

Shipped adopter-facing guidance and copy-paste templates so host projects track external README/doc/style upstreams (Best-README-Template, Keep a Changelog, Shields.io) directly—ai-dev-kit does not act as a middleman. Kanban hygiene on FR-003 stale Epic 7 references.

---

## Change implemented

### Documentation (FR-003 / E01:S02:T14)

- **Guide:** `docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md`
- **Templates:** `docs/documentation/user-docs/examples/adopter-upstream-register.md`, `adopter-upstream-check.yml`, `adopter-upstream-check.sh`
- **IPP:** `docs/implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md`
- **Entry points:** `INSTALL_IN_YOUR_PROJECT.md`, `repo-structure-for-adopters.md`, `framework-dependency-post-template-setup-guide.md`
- **FR-003** updated: implementing task E01:S02:T14, acceptance criteria, removed obsolete E07 README-story tracking narrative

---

## Related work

- [FR-003](../../project-management/kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md)
- [FR-002](../../project-management/kanban/fr-br/FR-002-update-been-there-readme.md) (README template — E01:S02:T13, separate)
- [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
