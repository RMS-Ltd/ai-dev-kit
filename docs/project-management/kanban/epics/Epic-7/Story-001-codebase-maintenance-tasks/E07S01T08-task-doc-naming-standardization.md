# Task: Task Doc Naming Standardization

**Epic:** E7 – Codebase Maintenance and Review  
**Story:** S01 – Codebase Maintenance Tasks  
**Task ID:** T08  
**Related FR:** User directive (2026-03-16)  
**Priority:** HIGH

---

## Summary

Implement a repository-wide naming policy for task documents using the format `EddSddTdd-[Task Title].md` (with a permitted Tddd extension for triple-digit tasks). Deliver a migration plan, rename backlog, and guardrails so Release Workflow, Kanban, and documentation tooling remain consistent.

---

## Objectives

1. Update governance docs (Documentation Policy Framework, Kanban board guide, release runbook) to describe the new naming convention and exceptions.  
2. Inventory all existing task files, mapping legacy `Tdd-*` names to the new canonical format.  
3. Execute the rename/migration with automated link updates and audit logging.  
4. Add validation (lint/CI) to prevent regressions.  
5. Communicate the change to workflow agents and ensure RW Step 4 references are updated accordingly.

---

## Deliverables

- Updated policy documentation referencing `EddSddTdd-[Task Title].md`.  
- Rename inventory + execution log in `docs/maintenance/logs/mmw/`.  
- Scripts or documented steps for atomic renames + reference updates.  
- Validator enhancements checking task filenames.  
- Release notes / Kanban updates showing migration completion.

---

## Acceptance Criteria

- All task docs under `docs/project-management/kanban/epics/**` follow the new naming scheme (or are listed in an active migration log).  
- Kanban board, Story/Epic files, and RW documentation link to the renamed files without broken references.  
- Governance docs explicitly call out the naming requirement and exception clause.  
- CI/lint tooling fails if a new task doc violates the naming rule.  
- Migration log captures before/after filenames, timestamps, and responsible agent.
