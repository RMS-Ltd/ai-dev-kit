---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E9:S05:T04 — Kanban Naming Hygiene and Directory Systematic Cleanup (UXR-011)

**Status:** COMPLETE
**Priority:** HIGH
**Last updated:** 2026-05-18 (regression validator green; all 10 ACs satisfied)
**Version:** v0.9.5.4+1
**Code:** E9S05T04

**Forensic Marker:** ✅ COMPLETE (v0.9.5.4+1)

---

## Task ID

**Task ID:** E9:S05:T04

---

## Scope

Systematically clean up naming and structural hygiene issues across the entire `docs/project-management/kanban/` directory tree. This task implements the findings documented in UXR-011, which identified:

1. **51 stale Txxx (3-digit) task files** mixed among 185 Txx (2-digit) files
2. **Duplicate story files** under the same epic with the same story number but different names
3. **Duplicate task files** with identical content but different names
4. **Orphaned directories** with no matching `.md` file
5. **Missing zero-padding** (Story-04 instead of Story-004)

---

## Input

- [IPP-E9S05T04 Implementation Plan](../../../../../implementation-cycles/IPP-E9S05T04-kanban-naming-hygiene.md) — Formal implementation plan for this task (FR-042, IPW)
- [UXR-011](../../fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) — User Experience Research with full audit findings
- [E2:S02:T007](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md) — Original task naming change (TODO, informs approach)
- [E2:S02:T008](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md) — Original kanban docs standardization (TODO, informs approach)
- [kanban-governance-policy](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — Naming policy source of truth

---

## Deliverable

- All Txxx files renamed to Txx with zero-padding
- All duplicate story files reconciled (single canonical file per story number per epic)
- All duplicate task files removed
- All orphaned directories resolved
- `Epic-7/Story-04` renamed to `Story-004`
- All internal markdown links updated and validated
- `kboard.md` and `fbuboard.md` updated with correct references
- Kanban governance policy updated to prevent recurrence
- Regression script confirming zero defects post-cleanup

---

## Acceptance Criteria

- [x] Inventory list of all affected files with before/after names
- [x] All Txxx files renamed to Txx; zero Txxx files remain in kanban tree
- [x] All duplicate story files per epic reconciled (single file per story number)
- [x] All duplicate task files removed (single file per task number per story)
- [x] All orphaned directories resolved
- [x] `Story-04` in Epic-7 renamed to `Story-004`
- [x] All internal markdown links validated (0 dangling links)
- [x] Board docs updated with correct references
- [x] Governance policy updated with explicit naming convention
- [x] Regression test confirms 0 Txxx files, 0 duplicate story numbers per epic, 0 orphaned directories

---

## Dependencies

**Depends On:**
- UXR-011 findings (provided)
- Epic-owner input for Epics 5, 6, 7 to determine canonical story files where duplicates exist

**Blocks:**
- Automated tooling that depends on predictable filenames

**Blocked By:**
- None (can start immediately)

**Parallel Development Candidacy:** Safe to parallelize across epics once canonical files are identified.

---

## Cross-Wiring

**Related Tasks:**
- **[E2:S02:T007](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md)** — Relationship Type: Informs — Context: Original Txxx→Txx migration task that was never completed.
- **[E2:S02:T008](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md)** — Relationship Type: Informs — Context: Original kanban docs standardization task that was never completed.

**Related UXR Documents:**
- **[UXR-011](../../fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)** — Relationship Type: Informs — Context: UXR-011 is the originating research with full forensic analysis.

---

## Related Work

**Related UXR Links:**
- [UXR-011: Kanban naming hygiene and directory systematic cleanup](../../fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) — Bidirectional: UXR-011 links back to this task in its Implementing Task section.

**Related Tasks:**
- [E2:S02:T007: Implement task naming change](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md) — Bidirectional: T007's task doc references the naming standard that this cleanup enforces.
- [E2:S02:T008: Update kanban docs to Txx standard](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md) — Bidirectional: T008's task doc references the docs standardization that this cleanup completes.

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Target Version:** `v0.9.5.4+X` (where X = BUILD on this task)

---

## Notes

- The Txxx→Txx migration was originally planned in E2:S02:T007/T008 (December 2025) but was never executed. This task absorbs and completes that scope.
- Duplicate story files in Epics 5, 6, 7 likely resulted from merges between "registry" stories (fr-repo, br-repo) and functional stories. Careful content review is needed before deleting.
- Cross-epic story name collisions (Epic-9 vs Epic-24 book stories) are semantically acceptable since they belong to different epics, but link resolution should be verified.
- Recommended approach: create an inventory script first, then execute renames in git mv batches per epic to preserve history.

---

## References

- [IPP-E9S05T04 Implementation Plan](../../../../../implementation-cycles/IPP-E9S05T04-kanban-naming-hygiene.md) — Formal implementation plan for this task (FR-042, IPW)
- [UXR-011](../../fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
- [E2:S02:T007](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md)
- [E2:S02:T008](../../Epic-2/Story-002-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md)
- [kanban-governance-policy](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [Epic-9](../Epic-9.md)
