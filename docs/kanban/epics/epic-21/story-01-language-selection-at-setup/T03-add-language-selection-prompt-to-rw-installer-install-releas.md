---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 3: Add language selection prompt to RW Installer (`install_release_workflow.py`)

**Task ID:** E21:S01:T03  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.3+0 — RW -k kanban-init doc filing)
**Version:** v0.21.1.3+0
**Code:** E21S01T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T03`

---

## Scope

[To be filled during migration]

---

## Input

- RW Installer (`install_release_workflow.py`)
- Language selection requirements

---

## Deliverable

- Language selection prompt in RW Installer
- Prompt appears as first step in installer
- Selection stored in project configuration

---

## Acceptance Criteria

- [ ] Language selection prompt appears first in RW Installer
- [ ] Options: UK English, US English
- [ ] Selection persists in configuration
- [ ] Installer documentation updated

---

---

## Kanban-init intake

**Released:** `v0.21.1.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T03 --art --dpz
```

**Target version anchor:** `v0.21.1.3+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

