---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 4: Add language switching functionality

**Task ID:** E21:S02:T04  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.4+1 — locale switching shipped)
**Version:** v0.21.2.4+1
**Code:** E21S02T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T04`

---

## Scope

Add language switching functionality for user-facing framework surfaces.

---

## Input

- Locale detection ([IPP-E21S02T03](../../../implementation-cycles/IPP-E21S02T03-locale-detection.md))
- Planning package: [IPP-E21S02T04](../../../implementation-cycles/IPP-E21S02T04-locale-switching.md)

---

## Deliverable

- Language switching functionality
- UI for language selection (if applicable)
- Configuration update mechanism

---

## Acceptance Criteria

- [x] Language switching works — ✅ COMPLETE (v0.21.2.4+1) (`switch_locale`, `adk config locale`, `--locale`)
- [x] Configuration updates on switch — ✅ COMPLETE (v0.21.2.4+1) (`write_localisation_config` rewrite)
- [x] Content reloads with new language — ✅ COMPLETE (v0.21.2.4+1) (`resolve_language` / template path tests)
- [x] Language switching tested — ✅ COMPLETE (v0.21.2.4+1) (`tests/test_locale_switching.py`)

---

---

## Kanban-init intake

**Released:** `v0.21.2.4+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T04 --art --dpz
```

**Target version anchor:** `v0.21.2.4+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`

---

## References

- [IPP-E21S02T04 — Locale switching](../../../implementation-cycles/IPP-E21S02T04-locale-switching.md)
- [locale-switching-conventions.md](../../../governance/standards/locale-switching-conventions.md)
- [ADR-024 — i18n framework strategy](../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

