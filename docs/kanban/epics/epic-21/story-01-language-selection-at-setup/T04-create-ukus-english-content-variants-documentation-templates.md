---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 4: Create UK/US English content variants (documentation, templates)

**Task ID:** E21:S01:T04  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.4+0 — RW -k kanban-init doc filing)
**Version:** v0.21.1.4+0
**Code:** E21S01T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T04`

---

## Scope

[To be filled during migration]

---

## Input

- Existing US English content
- Language selection requirements

---

## Deliverable

- UK English variants of all documentation
- UK English variants of all templates
- Content structure: `locales/en-GB/` and `locales/en-US/`

---

## Acceptance Criteria

- [ ] UK English variants created for all documentation
- [ ] UK English variants created for all templates
- [ ] Content organised in locale directories
- [ ] Content generation uses selected variant

**Key Differences (UK vs US English):**
- Spelling: colour/color, organise/organize, realise/realize, centre/center
- Terminology: programme/program, licence/license (noun), practise/practice (verb)
- Date format: DD/MM/YYYY vs MM/DD/YYYY (if applicable)

---

---

## Kanban-init intake

**Released:** `v0.21.1.4+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T04 --art --dpz
```

**Target version anchor:** `v0.21.1.4+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

