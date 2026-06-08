---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 3, Task 6: Implement translation completeness tracking

**Task ID:** E21:S03:T06  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.3.6+1 — translation completeness tracking)
**Version:** v0.21.3.6+1
**Code:** E21S03T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S03:T06`

---

## Scope

Implement translation completeness tracking per locale.

---

## Input

- Translation files
- Translation keys
- **IPP:** [IPP-E21S03T06-translation-completeness-tracking.md](../../../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md) (IPW planning package)
- [translatable-content-registry.yaml](../../../../governance/standards/translatable-content-registry.yaml) — machine-readable locale + tier config (T06 SoT)
- [IPP-E21S03T05](../../../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md) — structural validate/sync tools (T05)
- [locale-rollout-matrix.md](../../../../governance/standards/locale-rollout-matrix.md) — P0–P3 tier definitions

---

## Deliverable

- Translation completeness tracking
- Completeness reports
- Missing translation alerts

---

## Acceptance Criteria

- [x] Completeness tracking works — ✅ COMPLETE (v0.21.3.6+1)
- [x] Completeness reports generated — ✅ COMPLETE (v0.21.3.6+1)
- [x] Missing translation alerts work — ✅ COMPLETE (v0.21.3.6+1)
- [x] Completeness tracking tested — ✅ COMPLETE (v0.21.3.6+1)

---

---

## Kanban-init intake

**Released:** `v0.21.3.6+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S03:T06 --art --dpz
```

**Target version anchor:** `v0.21.3.6+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation.md`

---

## References

- [IPP-E21S03T06-translation-completeness-tracking.md](../../../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md) — specification, tests, implementation plan (IPW)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) — Phase 3 completeness tracking requirement
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) — T06 integration plan row
- [translation-management-tools.md](../../../../documentation/user-docs/translation-management-tools.md) — maintainer tool suite (extended in T06)
- [translation-workflow-and-review.md](../../../../governance/standards/translation-workflow-and-review.md) — completeness states policy
