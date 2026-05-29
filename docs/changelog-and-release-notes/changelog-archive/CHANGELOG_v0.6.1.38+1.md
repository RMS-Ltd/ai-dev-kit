# Changelog: v0.6.1.38+1

**Release:** v0.6.1.38+1  
**Date:** 2026-05-12  
**Task Anchor:** E6:S01:T38  
**Release Mode:** RW (full)  
**Branch:** dev

---

## Summary

Implements the BR-072 definition fix: UKW Step 6 restructured so completed tasks are removed and archived before MoSCOW classification runs. Adds a write path to `kanban-completed.md` and a cross-section deduplication guard. Three definition files updated consistently.

---

## Changes

### Workflow Definitions — UKW (BR-072 fix)

**`packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md`**
- Step 6 EXECUTE split into Part A and Part B
- Part A (new, mandatory, pre-classification): scan all MoSCOW sections for COMPLETE/DONE tasks; remove from `kboard.md`; write archive entries to `kanban-completed.md`; run deduplication pass (highest-priority section wins)
- Part B: existing MoSCOW classification logic, now explicitly scoped to active tasks only
- VALIDATE extended: `kboard.md` must contain no COMPLETE/DONE entries; no task ID in more than one section; `kanban-completed.md` updated

**`packages/frameworks/workflow mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml`**
- Step 6 config extended: `remove_completed_before_classify`, `completed_statuses`, `write_completed_to_archive`, `completed_archive: kanban-completed.md`, `deduplication_guard`, `dedup_priority_order`

**`packages/frameworks/workflow mgt/agents/ukw/AGENTS.md`**
- Step 6 rewritten with explicit Part A / Part B structure
- Archive entry format documented inline
- Post-execution validation block added

### Planning Artifacts

**`docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md`**
- Consolidated IPP published: specification (3 root causes), test design (5 scenarios, known fixtures), implementation plan (precise diffs for all 3 definition files)

### Kanban

**`docs/project-management/kanban/epics/Epic-6/Story-001-br-repo/T38-...md`**
- Status updated: TODO → IN PROGRESS
- IPP link and Publication Status field added
- Last updated timestamp reflects implementation completion

---

## Acceptance Criteria Status

| AC | Status |
|----|--------|
| AC1 Root cause identified | ✅ IPP Section 1.1 |
| AC2 Removal as discrete step | ✅ All 3 definition files |
| AC3 Deduplication guard | ✅ All 3 definition files |
| AC4 Write to kanban-completed.md | ✅ All 3 definition files |
| AC5 Known fixtures cleared by fixed UKW | ✅ Confirmed v0.2.16.4+1 (2026-05-12) |
| AC6 agents/ukw/AGENTS.md updated | ✅ |
| AC7 Bidirectional wiring | ✅ Filed at intake (v0.6.1.38+0) |

---

## Traceability

- BR-072 → E6:S01:T38 → v0.6.1.38+1
- E6:S01:T38 → BR-072
- v0.6.1.38+1 → E6:S01:T38 → BR-072
