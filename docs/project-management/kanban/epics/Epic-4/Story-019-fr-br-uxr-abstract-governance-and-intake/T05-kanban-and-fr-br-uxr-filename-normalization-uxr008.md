---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 5: Kanban and FR/BR/UXR filename normalization (UXR-008)

**Task ID:** E4:S19:T05  
**Status:** SUPERSEDED  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-25  
**Last updated:** 2026-04-26 (superseded by E4:S19:T06 meta-task; historical task retained)  
**Code:** E4S19T05

**Upstream:** [UXR-008 – Canonical Kanban filename normalization](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)

**Coordinates:** [E6:S07:T114](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md), [E4:S19:T02](T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md), [E4:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)

**Superseded by:** [E4:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) · [IPP-E4S19T06](../../../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)

---

## Input

- Reopened UXR scope to normalize filename patterns beyond board files.
- Existing canonical board defaults already migrated (`kboard.md`, `fbuboard.md`) under `E6:S07:T114`.
- Remaining supporting kanban + FR/BR/UXR docs under `docs/project-management/kanban/` still use mixed naming styles.

---

## Problem statement

Partial normalization (boards only) leaves the broader kanban surface with inconsistent naming semantics, reducing discoverability and increasing path/link drift risk across RW/UKW/intake workflows and maintenance docs.

---

## Deliverable

- Canonical filename policy for kanban + FR/BR/UXR related docs in `docs/project-management/kanban/`.
- Deterministic migration of targeted filenames to canonical pattern.
- Link/script/reference compatibility updates with backward-safe transition handling.

---

## Scope

1. Define canonical filename pattern rules (abbreviation vocabulary, separators, casing, singular/plural conventions).
2. Inventory target files and produce old-name -> new-name mapping.
3. Rename targeted files and update all internal references.
4. Update scripts/config/docs that rely on renamed paths.
5. Add compatibility guidance (alias handling or migration notes) for adopters.

---

## Acceptance Criteria

- [ ] **AC1:** Canonical filename rules are documented and cross-linked from UXR-008.
- [ ] **AC2:** A complete migration mapping exists for all renamed kanban + FR/BR/UXR related files in scope.
- [ ] **AC3:** All internal markdown links resolve after migration.
- [ ] **AC4:** RW/UKW/intake script path assumptions are updated and validated against canonical names.
- [ ] **AC5:** Backward compatibility/migration guidance is documented for legacy references.
- [ ] **AC6:** UXR-008, task doc, story checklist, and boards remain cross-wired and status-consistent.

---

## References

- [UXR-008](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [T114](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
- [FR-086](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [IPP-E4S19T05](../../../../../implementation-cycles/IPP-E4S19T05-kanban-fr-br-uxr-filename-normalization.md)
- [ICW-E4S19T05-specification](../../../../../implementation-cycles/ICW-E4S19T05-specification.md)
- [ICW-E4S19T05-test-design](../../../../../implementation-cycles/ICW-E4S19T05-test-design.md)
- [ICW-E4S19T05-implementation-plan](../../../../../implementation-cycles/ICW-E4S19T05-implementation-plan.md)
