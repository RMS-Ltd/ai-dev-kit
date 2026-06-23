---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 3: Add language selection prompt to RW Installer (`install_release_workflow.py`)

**Task ID:** E21:S01:T03  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.3+1 — RW E21:S01:T03 --art)
**Version:** v0.21.1.3+1
**Code:** E21S01T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T03`

---

## Scope

Add UK/US English selection as the **first interactive step** in `install_release_workflow.py`, persisting to `ai-dev-kit-config.yaml` before RW path/mode questions. Canonical helpers in `packages/frameworks/workflow-mgt/scripts/localisation_config.py` (shared with CLI via `cli/localisation.py`). Installer re-runs skip existing config unless `--force`.

---

## Input

- RW Installer (`install_release_workflow.py`)
- Language selection requirements ([FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md) Phase 1)
- Planning: [IPP-E21S01T03](../../../../implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md)
- Upstream: [IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md) · [IPP-E21S01T02](../../../../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md)

---

## Deliverable

- Language selection prompt in RW Installer
- Prompt appears as first step in installer
- Selection stored in project configuration

---

## Acceptance Criteria

- [x] Language selection prompt appears first in RW Installer — ✅ COMPLETE (v0.21.1.3+1)
- [x] Options: UK English, US English — ✅ COMPLETE (v0.21.1.3+1)
- [x] Selection persists in configuration — ✅ COMPLETE (v0.21.1.3+1)
- [x] Installer documentation updated — ✅ COMPLETE (v0.21.1.3+1)

---

---

## Kanban-init intake

**Released:** `v0.21.1.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T03 --art --dpz
```

**Target version anchor:** `v0.21.1.3+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S01T03 — RW installer language selection](../../../../implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md)
- [localisation_config.py](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [ai-dev-kit-config.example.yaml](../../../../../packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

