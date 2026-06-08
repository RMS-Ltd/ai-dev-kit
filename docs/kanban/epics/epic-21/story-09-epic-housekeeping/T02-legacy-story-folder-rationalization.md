---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T10:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 9, Task 2: Legacy epic-21 story folder rationalization

**Task ID:** E21:S09:T02  
**Status:** COMPLETE  
**Priority:** LOW  
**Last updated:** 2026-06-08 (RW **v0.21.9.2+2** — bootstrap open-work refresh)  
**Version Anchor:** v0.21.9.2+2  
**Code:** E21S09T02

---

## Input

- [Epic-21.md](../Epic-21.md) canonical story checklist (S01–S08)
- Orphan / mis-numbered paths listed in scope below
- [kanban-structure.md](../../kanban-structure.md) stale Epic 21 section

---

## Scope

Audit and rationalize duplicate / mis-numbered story directories under `epics/epic-21/` from S00→S01 renumber and early filing waves. Canonical paths per [Epic-21.md](../Epic-21.md): `story-01-language-selection-at-setup` through `story-08-accessibility`.

---

## Inventory (2026-06-08)

| Legacy path | Disposition | Canonical target |
| ----------- | ----------- | ---------------- |
| `story-00-language-selection-at-setup.md` | Redirect stub | `story-01-language-selection-at-setup.md` |
| `story-00-language-selection-at-setup/T01-*.md` | Redirect stub | `story-01-language-selection-at-setup/T01-*.md` |
| `story-01-internationalisation-infrastructure.md` | Redirect stub | `story-02-internationalisation-infrastructure.md` |
| `story-02-translation-and-localisation.md` | Redirect stub | `story-03-translation-and-localisation.md` |
| `story-03-cultural-adaptation/` (orphan dir) | `REDIRECT.md` | `story-04-cultural-adaptation.md` |
| `story-04-european-languages-localization/` | `REDIRECT.md` | `story-05-european-languages-localization.md` |
| `story-05-cjk-languages-localization/` | `REDIRECT.md` | `story-06-cjk-languages-localization.md` |
| `story-06-rtl-and-extended-locales/` | `REDIRECT.md` | `story-07-rtl-and-extended-locales.md` |

Physical task folders for S01–S08 already canonical on branch; no file moves required.

---

## Deliverable

- Redirect stubs for legacy story paths; `kanban-structure.md` Epic 21 section defers to `Epic-21.md`.
- Inventory table in this task doc.
- Changelog archive / KB-INDEX historical links may still cite S00 paths — redirect stubs preserve resolution.

---

## Acceptance Criteria

- [x] Single canonical directory per story number (S01–S08)
- [x] Grep for stale paths returns only redirects or zero hits (under `epics/epic-21/`)
- [x] Epic-21 story checklist links resolve
