# Changelog v0.8.3.23+1

**Release Date:** 2026-06-16 12:03:16 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 23  
**SemVer:** v0.4.1186+1

---

## Summary

Kanban documentation setup (RW `-k`) for **BR-109** — greenfield dual-tree sync drift on CodeQL/Copilot autofix PRs. Atomic intake: bug report, task **E08:S03:T23**, story checklist, kboard row, FR-110 cross-link.

---

## Change implemented

### Intake / Kanban

- Added [BR-109](../../../kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md) documenting Mode A (source-only) and Mode B (mirror-only) autofix failures (#60–#62, #68).
- Created [E08:S03:T23](../../../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md) for CI/workflow hardening deliverables.
- Wired story checklist, kboard Could Have row, and FR-110 related-work link.

### Release notes

- `--art` adopted **E08:S03:T23** as version anchor (`0.8.3.23+1`).
- `--dpz` not applied: resolver rejected (HEAD `VERSION_BUILD=16`; BR-097 requires BUILD=0 path for doc-policy-zero). First build on new anchor used instead.

---

## Related

- [BR-109](../../../kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md)
- [FR-110](../../../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [E08:S03:T23](../../../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md)
