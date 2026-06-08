---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 6: Update content generation to use language preference (RW, templates)

**Task ID:** E21:S01:T06  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.6+1 — RW E21:S01:T06 --art)
**Version:** v0.21.1.6+1
**Code:** E21S01T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T06`

---

## Scope

Wire T05 read/resolve API into RW installer scaffolds (`render_changelog_stub`, decline-help strings) and kanban intake template resolution (`resolve_kanban_intake_template`). MVP surfaces only; board-install templates and E2E → T07.

**Planning:** [IPP-E21S01T06-content-generation-locale-wiring.md](../../../../implementation-cycles/IPP-E21S01T06-content-generation-locale-wiring.md)

---

## Input

- `ai-dev-kit-config.yaml` language preference (T01–T03 write; T05 read)
- T04 locale corpus (`workflow-mgt/locales/`, `kanban/locales/`)

---

## Deliverable

- `render_locale_text` + `resolve_kanban_intake_template` in `localisation_config.py`
- RW installer scaffolds load locale fragments by configured language
- Intake guide documents locale-resolved template paths

---

## Acceptance Criteria

- [x] RW reads language preference from config when generating scaffolds
- [x] RW changelog stub and decline-help use selected locale variant
- [x] Kanban intake templates resolve via manifest + config language
- [x] Canonical `templates/` fallback when locale file absent
- [x] Tests T1–T10 pass (`test_content_generation_locale_wiring.py`)

---

---

## Kanban-init intake

**Released:** `v0.21.1.6+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T06 --art --dpz
```

**Target version anchor:** `v0.21.1.6+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

