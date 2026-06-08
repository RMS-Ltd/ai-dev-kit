---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T10:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 9, Task 2: Legacy epic-21 story folder rationalization

**Task ID:** E21:S09:T02  
**Status:** TODO  
**Priority:** LOW  
**Last updated:** 2026-06-08 (UKW — filed for kboard visibility)  
**Version:** v0.21.9.2+0  
**Code:** E21S09T02

---

## Scope

Audit and rationalize duplicate / mis-numbered story directories under `epics/epic-21/` from S00→S01 renumber and early filing waves. Canonical paths per [Epic-21.md](../Epic-21.md): `story-01-language-selection-at-setup` through `story-08-accessibility`.

---

## Input

- Orphan dirs: `story-00-language-selection-at-setup/`, `story-01-internationalisation-infrastructure/`, `story-02-translation-and-localisation/`, `story-03-cultural-adaptation/` (duplicate of S04)
- Mis-numbered: `story-04-european-languages-localization/` (canonical = S05), `story-05-cjk-languages-localization/` (canonical = S06), `story-06-rtl-and-extended-locales/` (canonical = S07)

---

## Deliverable

- Redirect stubs or archive moves per kanban governance; no broken links from Epic/Story checklists or `kboard.md`.
- Document inventory in task doc or epic housekeeping note.

---

## Acceptance Criteria

- [ ] Single canonical directory per story number (S01–S08)
- [ ] Grep for stale paths returns only redirects or zero hits
- [ ] Epic-21 story checklist links resolve
