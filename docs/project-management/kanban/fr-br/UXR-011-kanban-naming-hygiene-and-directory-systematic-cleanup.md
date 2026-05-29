---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban Naming Hygiene and Directory Systematic Cleanup

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-05-17  
**Submitted By:** AI Agent (ai-dev-kit)  
**Priority:** HIGH  
**Status:** COMPLETE  
**Code:** UXR-011  
**Last updated:** 2026-05-18
**Resolution:** v0.9.5.4+2 — All findings remediated; regression validator green; 105 file changes committed  
**Implementing Task:** [E9:S05:T04](../epics/Epic-9/Story-005-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md)

---

## Summary

A comprehensive audit of `docs/project-management/kanban/` reveals systematic naming inconsistencies and structural hygiene issues across the kanban directory tree. These issues — stale 3-digit task names (Txxx) mixed with 2-digit (Txx), duplicate story files under the same epic, orphaned directories, and cross-epic story name collisions — undermine the canonical E/S/T model and complicate automated tooling, cross-referencing, and board reconciliation. This UXR defines the cleanup scope, severity, and remediation criteria.

---

## Research Question

What is the full inventory of naming and structural hygiene defects in the kanban directory, what is their root cause, and what systematic remediation is required to bring the directory into compliance with the current canonical naming policy?

---

## Findings (Audit Conducted 2026-05-17)

### Finding 1: Mixed Task Naming (Txxx vs Txx)

- **Txx (2-digit, current standard):** 185 files
- **Txxx (3-digit, deprecated):** 51 files
- **Total task files:** 236
- **Deprecated ratio:** ~22%

The Txxx → Txx migration (E2:S02:T007, E2:S02:T008) was filed 2025-12-03 but remains TODO. New work continues using both conventions, producing a mixed-state tree where tooling must parse both patterns.

**Affected locations:**
- Epic-1/Story-002 (T001–T004)
- Epic-1/Story-003 (T001–T006)
- Epic-1/Story-006 (T01)
- Epic-2/Story-002 (T001–T008)
- Epic-4/Story-006 (T001)
- Epic-4/Story-008 (T08)
- Epic-5/Story-001-fr-repo (T01, T06, T33, T35, T42, T48, T56)
- Epic-5/Story-008-knowledge-base (T001)
- Epic-6/Story-000-br-repo (T001)
- Epic-6/Story-001-br-repo (T001)
- Epic-6/Story-006-adk-implementation-analysis-and-package-management (T001–T006, T008, T009, T010, T013, T017, T018, T024, T033, T115)
- Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration (T001)
- Epic-7/Story-001-codebase-maintenance-tasks (T001, T002, T003, T005, T06)
- Epic-8/Story-001-code-generators (T001)

### Finding 2: Duplicate Story Files (Same Epic + Same Number, Different Names)

**Epic-5:** Stories 001–007 each have 2 files:
- Story-001: `Story-001-documentation-maintenance-framework.md` + `Story-001-fr-repo.md`
- Story-002: `Story-002-documentation-maintenance-framework.md` + `Story-002-documentation-quality-assurance.md`
- Story-003: `Story-003-documentation-automation.md` + `Story-003-documentation-quality-assurance.md`
- Story-004: `Story-004-documentation-automation.md` + `Story-004-framework-documentation-management.md`
- Story-005: `Story-005-framework-documentation-management.md` + `Story-005-legacy-repository-incorporation.md`
- Story-006: `Story-006-legacy-repository-incorporation.md` + `Story-006-policy-documentation-structure.md`
- Story-007: `Story-007-persistent-knowledge-base-investigation.md` + `Story-007-policy-documentation-structure.md`

**Epic-6:** Stories 001–006 each have 2 files:
- Story-001: `Story-001-br-repo.md` + `Story-001-framework-version-management.md`
- Story-002: `Story-002-framework-update-and-migration.md` + `Story-002-framework-version-management.md`
- Story-003: `Story-003-framework-health-monitoring.md` + `Story-003-framework-update-and-migration.md`
- Story-004: `Story-004-bug-reports.md` + `Story-004-framework-health-monitoring.md`
- Story-005: `Story-005-bug-reports.md` + `Story-005-feature-requests.md`
- Story-006: `Story-006-adk-implementation-analysis-and-package-management.md` + `Story-006-feature-requests.md`

**Epic-7:** Stories 001–003 each have 2 files.

**Epic-9:** Stories 001–004 each have 2 files (book content stories vs RC-readiness stories).

**Root cause:** Historical merges, epic reorganization, and the coexistence of "registry" stories (e.g., `fr-repo`, `br-repo`) with functional stories under the same epic.

### Finding 3: Duplicate Task Files (Identical Content, Different Names)

**Epic-2/Story-002:**
- `T07-implement-task-naming-change.md` = `T07-implement-task-naming-change.md`
- `T08-update-kanban-docs-to-txx-standard.md` = `T08-update-kanban-docs-to-txx-standard.md`
- Plus `T08-update-kanban-docs-to-txx-standard.md`

These duplicates were likely created during the Txxx→Txx migration attempt and never reconciled.

### Finding 4: Orphaned Directories

`Epic-5/Story-002/` — directory exists with files inside but no `Story-002.md` at the epic root.

### Finding 5: Missing Zero-Padding

`Epic-7/Story-04-readme-template-based-on-best-readme-template.md` — violates the Story-NNN convention.

### Finding 6: Cross-Epic Story Name Collisions

Epic-9 and Epic-24 both have book-content stories with identical names (001–004). This is semantically acceptable (different epics) but complicates global search and linking.

---

## Scope

1. **Inventory:** Final, authoritative list of all naming/structural defects across the kanban tree.
2. **Remediation plan:** Task-level plan for renaming files, merging duplicates, deleting orphaned directories, and updating all internal references.
3. **Tooling impact:** Identify all scripts/validators that parse task/story filenames and ensure they handle both old and new conventions during transition.
4. **Governance alignment:** Update kanban governance policy to prevent recurrence.
5. **Backfill verification:** After remediation, validate that all internal links resolve and board docs reference correct filenames.

---

## Proposed Remediation (Analysis)

### Phase A: Task Naming Standardization
1. Rename all Txxx files to Txx (zero-pad single digits: T1 → T01).
2. Update all internal markdown links referencing the old filenames.
3. Update story checklists to reference new filenames.
4. Update board rows (`kboard.md`, `fbuboard.md`) to reference new task IDs.

### Phase B: Duplicate Story Reconciliation
1. For each epic with duplicate story numbers, determine which file is canonical.
2. Merge content where appropriate; archive/delete the duplicate.
3. Renumber non-canonical stories to avoid gaps.
4. Update all epic story checklists and cross-references.

### Phase C: Duplicate Task Removal
1. For Epic-2/Story-002: delete `T007`, `T008`, and `T08-deliverable` variants, keeping only `T07` and `T08` (or vice versa, depending on canonical choice).
2. Update story checklist to reference the surviving filenames.

### Phase D: Orphaned Directory Cleanup
1. Investigate `Epic-5/Story-002/` — determine if it represents a real story or merge artifact.
2. Create `Story-002.md` or remove directory as appropriate.

### Phase E: Zero-Padding Fix
1. Rename `Epic-7/Story-04-*` to `Epic-7/Story-004-*`.

---

## Acceptance Criteria

- [x] Inventory spreadsheet/list of all affected files with before/after names.
- [x] All Txxx files renamed to Txx; zero Txxx files remain in kanban tree.
- [x] All duplicate story files per epic reconciled (single file per story number).
- [x] All duplicate task files removed (single file per task number per story).
- [x] All orphaned directories resolved.
- [x] `Story-04` in Epic-7 renamed to `Story-004`.
- [x] All internal markdown links validated (0 dangling links post-cleanup).
- [x] All board docs (`kboard.md`, `fbuboard.md`) updated with correct references.
- [x] Kanban governance policy updated with explicit naming convention and prohibition on duplicate story numbers within an epic.
- [x] Regression test: automated scan confirms 0 Txxx files, 0 duplicate story numbers per epic, 0 orphaned directories.

---

## Dependencies

**Blocks:**
- Automated tooling that depends on predictable filenames (validators, UKW scripts, RW scripts).
- Canonical E/S/T review under Epic-9.

**Blocked By:**
- None (can start immediately).

**Coordinates With:**
- **Epic-5:** Requires epic-owner input to determine canonical story files.
- **Epic-6:** Requires epic-owner input to determine canonical story files.
- **Epic-7:** Requires epic-owner input for Story-04 and duplicate stories.
- **Epic-9:** Canonical E/S/T review (E9:S05) — this UXR feeds into that work.

---

## References

- [E9:S05:T04](../epics/Epic-9/Story-005-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md) — Implementing task
- [E2:S02:T007](../epics/Epic-2/Story-002-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md) — Original task naming change (TODO)
- [E2:S02:T008](../epics/Epic-2/Story-002-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md) — Original kanban docs standardization (TODO)
- [kanban-governance-policy](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — Naming policy source of truth
- [Epic-9](../epics/Epic-9/Epic-9.md) — Release Candidate Readiness epic (canonical for E/S/T review)
