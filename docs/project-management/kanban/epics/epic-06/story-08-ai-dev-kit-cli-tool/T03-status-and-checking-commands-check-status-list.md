---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:57:54Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 8, Task 3: Status and checking commands (check, status, list)

**Task ID:** E06:S08:T03  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.6.8.3+1 – migrated from embedded Story section)  
**Version:** v0.6.8.3+1  
**Code:** E06S08T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E06:S08:T03`

---

## Scope

[To be filled during migration]

---

## Input

- Core commands implementation
- Framework version management
- Backend abstraction layer

---

## Deliverable

- `check` command - Check for available framework updates
- `status` command - Show installed framework versions
- `list` command - List available frameworks and versions

---

## Acceptance Criteria

- [x] `ai-dev-kit check` reports available updates (command structure complete, backend integration pending T05-T07)
- [x] `ai-dev-kit status` shows installed framework versions and backends
- [x] `ai-dev-kit list` shows available frameworks and versions (static listing, full registry pending)
- [x] Commands support `--json` output option (status and list implemented, check pending backend)
- [x] Output is clear and readable

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md`

