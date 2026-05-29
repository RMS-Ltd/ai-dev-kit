---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T16:26:47Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.5.1.63+1

**Release Date:** 2026-03-25 16:26:47 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 63 - RW Task Argument Requirement (FR-060)  
**Build:** 1

---

## Summary

E5:S01:T63 / FR-060: **Strict mandatory `E…S…T…` token** in the same message as `RW` / `RW -d` / `RW -k`. New **`validate_rw_task_complete.py`** (task doc exists; COMPLETE or perpetual; `--mode rw-k` for kanban-init). **`.cursorrules`** and **`cursorrules-rw-trigger-section.md`** Steps 1b–1d. **Renumbered FR-060** from colliding **T37** (FR-037) to **E5:S01:T63**. Documentation: `release-workflow-agent-execution.md` Steps 1.3–1.5, `release-workflow-reference.md`, workflow **README**. **`validate_rw_task_intent.py`**: `find_story_file` prefers `*fr-repo*.md` when multiple `Story-001*` paths match Epic 5. Tests: `test_validate_rw_task_complete.py`.

---

## Changes

### Added

- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py`
- `packages/frameworks/workflow mgt/scripts/validation/test_validate_rw_task_complete.py`

### Changed

- `.cursorrules` — mandatory RW task token; validator order
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- `release-workflow-agent-execution.md` — Steps 1.3, 1.4, 1.5; Step 2 deps
- `release-workflow-reference.md`, `packages/frameworks/workflow mgt/README.md`
- `validate_rw_task_intent.py` — `find_story_file` disambiguation for FR Repo story
- Kanban: `T63-rw-task-argument-requirement.md`, `FR-060`, `Story-001-fr-repo.md`, `kanban-board.md`, removed duplicate T37 FR-060 file

---

## Related

- **FR-060** — RW Task Argument Requirement  
- **BR-056** — RW Task Intent Guard (unchanged logic; ordering with FR-060)
