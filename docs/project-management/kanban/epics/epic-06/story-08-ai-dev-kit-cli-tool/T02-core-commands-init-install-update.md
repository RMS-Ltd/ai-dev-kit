---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:57:54Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 8, Task 2: Core commands (init, install, update)

**Task ID:** E06:S08:T02  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.6.8.2+1 – migrated from embedded Story section)  
**Version:** v0.6.8.2+1  
**Code:** E06S08T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E06:S08:T02`

---

## Scope

[To be filled during migration]

---

## Input

- CLI tool base structure
- Framework dependency architecture
- Update procedures

---

## Deliverable

- `init` command - Initialize ai-dev-kit in project
- `install` command - Install frameworks as dependencies
- `update` command - Update frameworks to latest versions

---

## Acceptance Criteria

- [x] `ai-dev-kit init` creates `.ai-dev-kit.yaml` configuration file
- [x] `ai-dev-kit install <framework>[@version]` installs framework (command structure complete, backend integration pending T05-T07)
- [x] `ai-dev-kit update <framework>` updates framework (command structure complete, backend integration pending T05-T07)
- [x] Commands support `--backend`, `--path`, `--dry-run` options
- [x] Version pinning works correctly (`@version` syntax)
- [x] Commands provide clear error messages

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-06/story-08-ai-dev-kit-cli-tool.md`

