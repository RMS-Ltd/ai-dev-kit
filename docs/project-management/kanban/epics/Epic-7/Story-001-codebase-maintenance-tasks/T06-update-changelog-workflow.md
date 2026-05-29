# Task: Implement Update Changelog Workflow (UCW)

**Epic:** E7 – Codebase Maintenance and Review  
**Story:** S01 – Codebase Maintenance Tasks  
**Task ID:** T06  
**Related FR:** FR-057 Update Changelog Workflow  
**Priority:** HIGH

---

## Summary

Design and implement the missing Update Changelog Workflow (UCW) that keeps `CHANGELOG.md` trimmed to the latest N releases, automatically archives older entries, enforces ordering/formatting requirements, and integrates with Release Workflow validation.

---

## Objectives

1. Build a deterministic UCW workflow (README + YAML + config) under `packages/frameworks/workflow mgt/workflows/`.  
2. Create a Python entry point (e.g., `scripts/update_changelog_docs.py`) handling retention and archival.  
3. Enforce retention threshold (default 20 entries) and ensure trimmed sections are archived with backlinks.  
4. Ensure UCW runs as part of RW (post detailed changelog, pre-validation) and as a standalone CLI (`UCW`).  
5. Provide regression tests for retention logic, ordering enforcement, archive integrity, and dry-run safety.  
6. Update release documentation/runbooks describing UCW responsibilities and invocation pattern.

---

## Deliverables

- UCW workflow specification + checklist template (`docs/implementation-cycles/ICW-E7S01T06-specification.md`).  
- UCW test design + implementation plan (`ICW-E7S01T06-test-design.md`, `ICW-E7S01T06-implementation-plan.md`).  
- Manual UCW checklist log folder (`docs/maintenance/logs/ucw/`).  
- Release runbook section describing UCW responsibilities + CI hook (`docs/maintenance/release-runbook.md`).  
- Read-only CI verification job definition + RW log instructions.  
- Archived changelog entries demonstrating workflow output.

---

## Acceptance Criteria

- Running UCW on current tree trims `CHANGELOG.md` to last N releases and places older entries in archive files without errors.  
- UCW supports `--retention`, `--dry-run`, `--auto` flags and produces human-readable + machine-readable summaries.  
- RW validator passes immediately after UCW execution (no ordering/format failures).  
- Documentation clearly distinguishes UCW vs UKW responsibilities to avoid future confusion.  
- Tests pass in CI and cover edge cases (less than N entries, duplicates, missing archive path, permission errors).  
- Task is wired to FR-057 and recorded in kanban board/story doc with version markers.
