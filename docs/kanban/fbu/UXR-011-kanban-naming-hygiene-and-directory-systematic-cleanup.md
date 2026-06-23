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
**Implementing Task:** [E09:S05:T04](../epics/epic-09/story-05-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md)

---

## Summary

A comprehensive audit of `docs/kanban/` reveals systematic naming inconsistencies and structural hygiene issues across the kanban directory tree. These issues — stale 3-digit task names (Txxx) mixed with 2-digit (Txx), duplicate story files under the same epic, orphaned directories, and cross-epic story name collisions — undermine the canonical E/S/T model and complicate automated tooling, cross-referencing, and board reconciliation. This UXR defines the cleanup scope, severity, and remediation criteria.

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

The Txxx → Txx migration (E02:S02:T07, E02:S02:T08) was filed 2025-12-03 but remains TODO. New work continues using both conventions, producing a mixed-state tree where tooling must parse both patterns.

**Affected locations:**
- epic-01/story-002 (T001–T004)
- epic-01/story-003 (T001–T006)
- epic-01/story-006 (T01)
- epic-02/story-002 (T001–T008)
- epic-04/story-006 (T001)
- epic-04/story-008 (T08)
- epic-05/story-01-fr-repo (T01, T06, T33, T35, T42, T48, T56)
- epic-05/story-08-knowledge-base (T001)
- epic-06/story-00-br-repo (T001)
- epic-06/story-01-br-repo (T001)
- epic-06/story-06-adk-implementation-analysis-and-package-management (T001–T006, T008, T009, T010, T013, T017, T018, T024, T033, T115)
- epic-06/story-09-ai-dev-kit-installation-and-adopter-integration (T001)
- epic-07/story-01-codebase-maintenance-tasks (T001, T002, T003, T005, T06)
- epic-08/story-01-code-generators (T001)

### Finding 2: Duplicate Story Files (Same Epic + Same Number, Different Names)

**epic-05:** Stories 001–007 each have 2 files:
- story-001: `story-01-documentation-maintenance-framework.md` + `story-01-fr-repo.md`
- story-002: `story-02-documentation-maintenance-framework.md` + `story-02-documentation-quality-assurance.md`
- story-003: `story-03-documentation-automation.md` + `story-03-documentation-quality-assurance.md`
- story-004: `story-04-documentation-automation.md` + `story-04-framework-documentation-management.md`
- story-005: `story-05-framework-documentation-management.md` + `story-05-legacy-repository-incorporation.md`
- story-006: `story-06-legacy-repository-incorporation.md` + `story-06-policy-documentation-structure.md`
- story-007: `story-07-persistent-knowledge-base-investigation.md` + `story-07-policy-documentation-structure.md`

**epic-06:** Stories 001–006 each have 2 files:
- story-001: `story-01-br-repo.md` + `story-02-versioning-cookbook-and-examples.md`
- story-002: `story-09-ai-dev-kit-installation-and-adopter-integration.md` + `story-02-framework-version-management.md`
- story-003: `story-07-adk-implementation-analysis-and-package-management.md` + `story-03-framework-update-and-migration.md`
- story-004: `story-04-bug-reports.md` + `story-04-framework-health-monitoring.md`
- story-005: `story-05-bug-reports.md` + `story-05-feature-requests.md`
- story-006: `story-06-adk-implementation-analysis-and-package-management.md` + `story-06-feature-requests.md`

**epic-07:** Stories 001–003 each have 2 files.

**epic-09:** Stories 001–004 each have 2 files (book content stories vs RC-readiness stories).

**Root cause:** Historical merges, epic reorganization, and the coexistence of "registry" stories (e.g., `fr-repo`, `br-repo`) with functional stories under the same epic.

### Finding 3: Duplicate Task Files (Identical Content, Different Names)

**epic-02/story-002:**
- `T07-implement-task-naming-change.md` = `T07-implement-task-naming-change.md`
- `T08-update-kanban-docs-to-txx-standard.md` = `T08-update-kanban-docs-to-txx-standard.md`
- Plus `T08-update-kanban-docs-to-txx-standard.md`

These duplicates were likely created during the Txxx→Txx migration attempt and never reconciled.

### Finding 4: Orphaned Directories

`epic-05/story-002/` — directory exists with files inside but no `story-002.md` at the epic root.

### Finding 5: Missing Zero-Padding

`epic-07/story-04-readme-template-based-on-best-readme-template.md` — violates the Story-NNN convention.

### Finding 6: Cross-Epic Story Name Collisions

epic-09 and epic-24 both have book-content stories with identical names (001–004). This is semantically acceptable (different epics) but complicates global search and linking.

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
4. Update board rows (`kboard.md`) to reference new task IDs.

### Phase B: Duplicate Story Reconciliation
1. For each epic with duplicate story numbers, determine which file is canonical.
2. Merge content where appropriate; archive/delete the duplicate.
3. Renumber non-canonical stories to avoid gaps.
4. Update all epic story checklists and cross-references.

### Phase C: Duplicate Task Removal
1. For epic-02/story-002: delete `T007`, `T008`, and `T08-deliverable` variants, keeping only `T07` and `T08` (or vice versa, depending on canonical choice).
2. Update story checklist to reference the surviving filenames.

### Phase D: Orphaned Directory Cleanup
1. Investigate `epic-05/story-002/` — determine if it represents a real story or merge artifact.
2. Create `story-002.md` or remove directory as appropriate.

### Phase E: Zero-Padding Fix
1. Rename `epic-07/story-04-*` to `epic-07/story-04-*`.

---

## Acceptance Criteria

- [x] Inventory spreadsheet/list of all affected files with before/after names.
- [x] All Txxx files renamed to Txx; zero Txxx files remain in kanban tree.
- [x] All duplicate story files per epic reconciled (single file per story number).
- [x] All duplicate task files removed (single file per task number per story).
- [x] All orphaned directories resolved.
- [x] `story-004` in epic-07 renamed to `story-004`.
- [x] All internal markdown links validated (0 dangling links post-cleanup).
- [x] All board docs (`kboard.md`) updated with correct references.
- [x] Kanban governance policy updated with explicit naming convention and prohibition on duplicate story numbers within an epic.
- [x] Regression test: automated scan confirms 0 Txxx files, 0 duplicate story numbers per epic, 0 orphaned directories.

---

## Dependencies

**Blocks:**
- Automated tooling that depends on predictable filenames (validators, UKW scripts, RW scripts).
- Canonical E/S/T review under epic-09.

**Blocked By:**
- None (can start immediately).

**Coordinates With:**
- **epic-05:** Requires epic-owner input to determine canonical story files.
- **epic-06:** Requires epic-owner input to determine canonical story files.
- **epic-07:** Requires epic-owner input for story-004 and duplicate stories.
- **epic-09:** Canonical E/S/T review (E9:S05) — this UXR feeds into that work.

---

## References

- [E09:S05:T04](../epics/epic-09/story-05-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md) — Implementing task
- [E02:S02:T07](../epics/epic-02/story-02-pdca-integration-into-release-workflow/T07-implement-task-naming-change.md) — Original task naming change (TODO)
- [E02:S02:T08](../epics/epic-02/story-02-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard.md) — Original kanban docs standardization (TODO)
- [kanban-governance-policy](../../governance/kanban/kanban-governance-policy.md) — Naming policy source of truth
- [epic-09](../epics/epic-09/epic-09.md) — Release Candidate Readiness epic (canonical for E/S/T review)
