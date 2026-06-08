---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 0, Task 5: Implement configuration persistence (`ai-dev-kit-config.yaml`)

**Task ID:** E21:S00:T05  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E21S00T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S00:T05`

---

## Scope

[To be filled during migration]

---

## Input

- Language selection from setup processes
- Configuration file structure

---

## Deliverable

- `ai-dev-kit-config.yaml` with language preference
- Configuration reading/writing utilities
- Default to UK English if not specified (en-GB primary; en-US supported)

---

## Acceptance Criteria

- [ ] Configuration file structure defined
- [ ] Language preference stored in config
- [ ] Configuration utilities created
- [ ] Default to UK English if not specified (en-GB primary; en-US supported)

**Configuration Structure:**
```yaml
localisation:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

---

---

## Kanban-init intake

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S00:T05 --art --dpz
```

**Target version anchor:** `v0.21.0.5+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-00-language-selection-at-setup.md`

