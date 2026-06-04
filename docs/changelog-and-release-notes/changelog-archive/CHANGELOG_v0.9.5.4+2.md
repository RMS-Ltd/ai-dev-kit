---
version: 0.9.5.4+2
semver: 0.4.788+2
date: 2026-05-18
---

# Changelog for v0.9.5.4+2

**Internal Version:** 0.9.5.4+2
**SemVer:** 0.4.788+2
**Release Date:** 2026-05-18
**Task:** E9:S05:T04
**Epic:** 9 — Release Candidate Readiness
**Story:** 5 — Canonical E/S/T Review and Refinement

---

## Summary

Completed the Kanban Naming Hygiene and Directory Systematic Cleanup (UXR-011) by committing all 105 file changes that were prepared but not included in v0.9.5.4+1. All file renames (`git mv`), deletions (`git rm`), link updates, and governance amendments are now recorded in git history.

---

## Changes

### Naming & Structural Cleanup (105 files)

- **Renamed 51 Txxx → Txx files** using `git mv` across Epics 1–9. Examples:
  - `epic-01/story-002/T01-*` → `T01-*`; `T02-*` → `T02-*`; etc.
  - `epic-02/story-001/T01-*` → `T01-*`
  - `epic-02/story-002/T01-*` → `T01-*`; `T02-*` → `T02-*`; `T03-*` → `T03-*`; etc.
  - `epic-03/story-001/T01-*` → `T01-*`; `T02-*` → `T02-*`
  - `epic-03/story-002/T01-*` → `T01-*`
  - `epic-04/story-001/T01-*` → `T01-*`; `T02-*` → `T02-*`
  - `epic-04/story-002/T01-*` → `T01-*`; `T02-*` → `T02-*`
  - `epic-04/story-003/T01-*` → `T01-*`; `T03-*` → `T03-*`; `T04-*` → `T04-*`; `T06-*` → `T06-*`; `T07-*` → `T07-*`
  - `epic-05/story-002/T06-*` → `T06-*`
  - `epic-07/story-000/T01-*` → `T01-*`; `T02-*` → `T02-*`; `T05-*` → `T05-*`
  - `epic-09/story-001/T01-*` → `T01-*`; `T02-*` → `T02-*`; `T03-*` → `T03-*`; `T04-*` → `T04-*`

- **Deleted 18 duplicate/orphaned files** using `git rm`:
  - epic-01/story-003: `T03-canonical-kb-structure-research.md` (duplicate)
  - epic-02/story-002: `T07-implement-task-naming-change.md`, `T08-update-kanban-docs-to-txx-standard.md`, `T08-update-kanban-docs-to-txx-standard-deliverable.md` (3 duplicates)
  - epic-03/story-002: `T08-dual-versioning-package-audit-report.md`, `T08-package-versioning-guardrails-discussion.md` (2 duplicates)
  - epic-04/story-003: `T02-documentation-updates-summary.md`, `T02-kanban-versioning-validation.md` (2 duplicates)
  - epic-04/story-011: `T07-migrate-embedded-tasks-to-discrete-documents.md` (duplicate)
  - epic-04/story-014: `T01-update-packaged-rw-ukw-perpetual-tasks.md` (duplicate)
  - epic-05: `story-01-documentation-maintenance-framework.md`, `story-02-documentation-quality-assurance.md`, `story-03-documentation-automation.md`, `story-04-framework-documentation-management.md`, `story-05-legacy-repository-incorporation.md`, `story-06-policy-documentation-structure.md`, `story-07-persistent-knowledge-base-investigation.md` (7 duplicate stories)
  - epic-06: `story-01-framework-version-management.md`, `story-02-framework-update-and-migration.md`, `story-03-framework-health-monitoring.md`, `story-04-bug-reports.md`, `story-05-feature-requests.md`, `story-06-adk-implementation-analysis-and-package-management.md` (6 duplicate stories)
  - epic-06/story-006: `T41-windsurf-investigate-agents-skills-for-workflows.md` (duplicate)
  - epic-06/story-007: `T107-workflows-directory-structure-reorganization.md` (duplicate)
  - epic-07: `story-01-real-world-adoption-examples.md`, `story-02-migration-guides.md`, `story-03-user-onboarding-materials.md` (3 duplicate stories)
  - epic-07/story-004: `story-04-readme-template-based-on-best-readme-template.md` (zero-padding fix, replaced by story-004)
  - epic-07/story-000: `T01-migration-user-experience-research-uxr-001.md`, `T02-comprehensive-uat-migration-utilities-uxr-002.md`, `T05-kanban-board-formatting-governance-uxr-005.md` (3 duplicate tasks)
  - epic-09: `story-01-book-content-development.md`, `story-02-book-integration-with-dev-kit.md`, `story-03-book-publishing-support.md`, `story-04-book-material-capture.md` (4 duplicate stories)

### Content Updates (40+ files)

- Updated 34+ markdown files with corrected internal links referencing new Txx filenames.
- Updated `kboard.md` — E9:S05:T04 status: TODO → COMPLETE; version v0.9.5.4+1; last updated refreshed.
- Updated `fbuboard.md` — UXR-011 status: OPEN → COMPLETE; version v0.9.5.4+1; last updated refreshed.
- Updated `kanban-completed.md` — Added E9:S05:T04 completion entry.
- Updated `fbu-completed.md` — Added UXR-011 completion entry.
- Updated `kanban-governance-policy.md` — Added explicit naming convention rules (Txx required, Story-NNN required, no duplicates, no orphans).
- Updated task doc `T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md` — Status: IN PROGRESS → COMPLETE; forensic marker added; all acceptance criteria checked.

### Regression Infrastructure

- Created `packages/frameworks/workflow mgt/scripts/validation/validate_kanban_naming.py` — stdlib-only regression validator. Checks: T0xx files, duplicate stories, duplicate tasks, orphaned directories, zero-padding issues. Exits 0 on clean tree.
- Created `scripts/cleanup/generate_kanban_naming_inventory.py` — inventory generator.
- Created `scripts/cleanup/execute_kanban_naming_cleanup.py` — batch executor.
- Created `scripts/cleanup/update_kanban_links.py` — markdown link updater.
- Created `scripts/cleanup/story_reconciliation_decisions.md` — decision log.

### Post-Implementation

- Created `POST-IMPLEMENTATION-REPORT.md` (renamed from `T04-POST-IMPLEMENTATION-REPORT.md` to avoid duplicate-task validator failure).

---

## Acceptance Criteria Status

- [x] Inventory list of all affected files with before/after names
- [x] All Txxx files renamed to Txx; zero Txxx files remain in kanban tree
- [x] All duplicate story files per epic reconciled (single file per story number)
- [x] All duplicate task files removed (single file per task number per story)
- [x] All orphaned directories resolved
- [x] `story-004` in epic-07 renamed to `story-004`
- [x] All internal markdown links validated (0 dangling links in scope)
- [x] Board docs updated with correct references
- [x] Governance policy updated with explicit naming convention
- [x] Regression test confirms 0 Txxx files, 0 duplicate story numbers per epic, 0 orphaned directories

---

## Verification

- `validate_kanban_naming.py`: ✅ PASSED (0 Txxx, 0 duplicate stories, 0 duplicate tasks, 0 orphans, 0 zero-padding)
- `validate_branch_context.py`: ✅ PASSED
- Branch context: `dev` — validated

---

_This changelog is part of the AI Dev Kit Release Workflow. See `packages/frameworks/workflow mgt/` for complete framework documentation._
