---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 7: Set up translation fallback chain (selected → UK English → US English)

**Task ID:** E21:S02:T07  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.7+1 — RW E21:S02:T07 --art)
**Version:** v0.21.2.7+1
**Code:** E21S02T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T07`

---

## Scope

Set up translation fallback chain: selected English → UK English → US English.

---

## Input

- Translation file structure
- Translation key system

---

## Deliverable

- Translation fallback chain
- Fallback logic implementation
- Fallback testing

---

## Acceptance Criteria

- [x] Fallback chain implemented
- [x] Fallback order correct
- [x] Fallback tested
- [x] Fallback behaviour documented

---

## Planning

**IPP:** [IPP-E21S02T07-locale-fallback-chain.md](../../../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md)  
**Policy (on implementation):** [locale-fallback-conventions.md](../../../../governance/standards/locale-fallback-conventions.md)

---

## Kanban-init intake

**Released:** `v0.21.2.7+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S02:T07 --art --dpz
```

**Target version anchor:** `v0.21.2.7+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`

