---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:19:46Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.5.9.14+1

**Release Date:** 2026-06-05 00:19:46 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 14  
**SemVer:** v0.4.892+1

## Summary

**RW -d** with **`--art`** on **E05:S09:T14**: Recovered and persisted the IPW planning package for **BR-093** (Docusaurus CI build/deploy deduplication) — consolidated IPP, bidirectional task wiring, task status **IN PROGRESS** for planning readiness. Implementation remains gated per FR-083.

## Added

- [`docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md`](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md) — IPW planning package (§1–§7; ADR-017 draft in Appendix A)

## Changed

- [`T14-docusaurus-ci-workflow-deduplication-br093.md`](../../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) — IPP links in Input/References; status **IN PROGRESS**; version anchor **v0.5.9.14+1**
- Story checklist, `kboard.md`, `fbuboard.md` — T14 / BR-093 IPP traceability

## References

- [BR-093](../../project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [IPP-E05S09T14](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md)
