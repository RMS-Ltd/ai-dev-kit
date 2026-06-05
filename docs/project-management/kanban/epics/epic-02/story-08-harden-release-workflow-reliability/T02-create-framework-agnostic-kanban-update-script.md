---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 8, Task 2: Create framework-agnostic Kanban update script

**Task ID:** E02:S08:T02  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E02S08T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S08:T02`

---

## Scope

Create a framework-agnostic Python script implementing the deterministic pipeline from T01 analysis. The script must support config-driven path resolution, parse canonical Story/Epic structures, apply structured text transforms, and validate updates. It should work across all projects using the framework.

---

## Input

- Analysis from T01 (deterministic vs agentic classification)
- Kanban documentation structure
- Framework requirements (must work across all projects)

---

## Deliverable

- Framework-agnostic Kanban update script/handler
- Hybrid implementation:
  - Deterministic functions for high-confidence steps
  - Agentic intelligence for complex steps

- Support for:
  - Story document updates (version marker, task status, completion status)
  - Epic document updates (story status, last updated version, completion status)
  - Kanban board updates (epic/story status, version markers)

- Auto-detection of which docs need updating

---

## Acceptance Criteria

- [x] ✅ Script/handler is framework-agnostic (not project-specific)
- [x] ✅ Deterministic steps implemented with high reliability
- [x] ✅ Agentic intelligence integrated for complex steps (hooks provided)
- [x] ✅ All three doc types supported (Story, Epic, Board)
- [x] ✅ Auto-detection works correctly
- [x] ✅ Works across all projects using the framework

**Completion Summary:**

Created framework-agnostic Kanban update script (`packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`) implementing the deterministic pipeline from T01 analysis:

**Implemented Deterministic Steps:**
- **Steps 1-3:** Version component extraction, config-driven path resolution, doc loading
- **Steps 4-6:** Parse Story Task Checklist, parse Story header, compute completion state
- **Step 7:** Derive target state for Story/Epic docs
- **Steps 9-10:** Apply structured text transforms to Story and Epic docs (canonical patterns)
- **Steps 12-14:** Post-update validation and consistency checks

**Key Features:**
- Config-driven path resolution using `rw-config.yaml` with fallback to canonical defaults
- Robust regex parsing for canonical Story/Epic structures
- Template-driven updates for header metadata, checklists, and version markers
- Validation of internal consistency (version alignment, status consistency)
- Dry-run mode for testing
- Framework-agnostic design (no project-specific hardcoding)

**Agentic Hooks Provided:**
- Non-canonical section handler (for ad-hoc prose references)
- Kanban board update handler (mostly agentic due to free-form layout)
- Error recovery guidance generation (structured error detection + agentic guidance)

**Testing:**
- Script tested with `--dry-run` mode
- Successfully updates Story and Epic docs for canonical structures
- Handles missing files gracefully
- Validates version consistency

**Next Steps:**
- T03: Wire script into RW Step 7 as mandatory and blocking
- T04: Add formal validation step
- T05: Implement comprehensive error handling

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-02/story-08-harden-release-workflow-reliability.md`

