# Changelog: v0.4.14.1+1

**Release Date:** 2026-02-22 12:33:50 UTC  
**Epic:** Epic 4 (Kanban Framework)  
**Story:** Story 14 (Kanban Framework Maintenance)  
**Task:** Task 1 (Update Packaged RW to Handle UKW Context and Perpetual Tasks)  
**Build:** 1

---

## Summary

E4:S14:T01: Update packaged Release Workflow (RW) to handle UKW context and perpetual tasks. Added perpetual task support to `validate_version_bump.py`: `is_perpetual_task()`, `extract_task_id_canonical()`, relaxed field validation for perpetual tasks, and Task ID extraction from canonical section. Validator now passes for E2:S16:T03 (UKW) and other perpetual tasks.

---

## Changes

### validate_version_bump.py

- **is_perpetual_task(task_number, task_content):** Detect perpetual tasks via T101+ or `perpetual_task` / `Task Type: Perpetual Maintenance` flag
- **extract_task_id_canonical(content):** Prefer `**Value:**`, `**Full Task ID:**`, or `## Task ID` section over first E#:S#:T# match (fixes wrong extraction when Progress references other tasks)
- **validate_task_doc_alignment():** Uses canonical extraction first
- **validate_task_doc_fields():** New `relax_for_perpetual` – Input/Deliverable optional, Version Anchor skipped for IN PROGRESS
- **get_completed_task():** Returns version_task for perpetual tasks when no completed tasks in Story

### Tests

- **test_validate_version_bump.py:** 6 unit tests for perpetual task detection, Task ID extraction, and validator behavior

### Documentation

- Task doc T01: E6:S06:T08 → E2:S16:T03, added validate_version_bump note
- release-workflow-agent-execution.md: Step 10 note on perpetual task support
- cursorrules-rw-trigger-section.md: Same note

---

## Impact

- RW Step 9 `validate_version_bump.py` now passes for UKW releases (E2:S16:T03) and CMW (T102)
- Perpetual tasks no longer fail validation for Task ID mismatch or missing Input/Deliverable

---

## Related

- **Task:** [E4:S14:T01](../../project-management/kanban/epics/Epic-4/Story-014-kanban-framework-maintenance/T01-update-packaged-rw-ukw-perpetual-tasks.md)
- **UKW Task:** [E2:S16:T03](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
