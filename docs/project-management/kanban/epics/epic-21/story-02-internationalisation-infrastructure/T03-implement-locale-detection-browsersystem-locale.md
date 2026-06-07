---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 3: Implement locale detection (browser/system locale)

**Task ID:** E21:S02:T03  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.3+1 — locale detection shipped)
**Version:** v0.21.2.3+1
**Code:** E21S02T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T03`

---

## Scope

Implement browser/system locale detection for framework setup and runtime.

---

## Input

- Translation file structure ([IPP-E21S02T02](../../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md))
- Locale detection requirements ([ADR-024](../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T03 row)
- Planning package: [IPP-E21S02T03](../../../implementation-cycles/IPP-E21S02T03-locale-detection.md)

---

## Deliverable

- Locale detection implementation
- Browser/system locale detection
- Fallback to default locale

---

## Acceptance Criteria

- [x] Browser locale detection works — ✅ COMPLETE (v0.21.2.3+1) (`detect_browser_locale` / `parse_accept_language`)
- [x] System locale detection works — ✅ COMPLETE (v0.21.2.3+1) (`detect_system_locale`)
- [x] Fallback to default works — ✅ COMPLETE (v0.21.2.3+1) (`map_to_supported_locale` → `en-GB`)
- [x] Locale detection tested — ✅ COMPLETE (v0.21.2.3+1) (`tests/test_locale_detection.py`)

---

---

## Kanban-init intake

**Released:** `v0.21.2.3+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T03 --art --dpz
```

**Target version anchor:** `v0.21.2.3+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`

---

## References

- [IPP-E21S02T03 — Locale detection](../../../implementation-cycles/IPP-E21S02T03-locale-detection.md)
- [locale-detection-conventions.md](../../../governance/standards/locale-detection-conventions.md)
- [ADR-024 — i18n framework strategy](../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [localisation_config.py](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

