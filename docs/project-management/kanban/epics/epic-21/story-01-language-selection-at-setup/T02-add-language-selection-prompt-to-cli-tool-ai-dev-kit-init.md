---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 2: Add language selection prompt to CLI tool (`ai-dev-kit init`)

**Task ID:** E21:S01:T02  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E21S01T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T02`

---

## Scope

[To be filled during migration]

---

## Input

- CLI tool (`ai-dev-kit init`)
- Language selection requirements

---

## Deliverable

- Language selection prompt in CLI tool
- Prompt appears as first step in `ai-dev-kit init`
- Selection stored in project configuration

---

## Acceptance Criteria

- [ ] Language selection prompt appears first in CLI tool
- [ ] Options: UK English, US English
- [ ] Selection persists in configuration
- [ ] CLI documentation updated

---

---

## Kanban-init intake

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T02 --art --dpz
```

**Target version anchor:** `v0.21.1.2+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

