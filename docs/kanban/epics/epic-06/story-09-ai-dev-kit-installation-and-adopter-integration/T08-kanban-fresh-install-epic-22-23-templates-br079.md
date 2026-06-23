---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 8: Kanban fresh install — Epic 22/23 templates (BR-079)

**Task ID:** E06:S09:T08  
**Status:** COMPLETE (pending user verification on book replay)  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Code:** E06S09T08

**Upstream:** [BR-079](../../../fbu/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) · [GitHub #11](https://github.com/RMS-Ltd/ai-dev-kit/issues/11)

## Version Anchor

**Version:** v0.6.9.8+2 (RW --art)

---

## Scope

Provide canonical templates for Epic 22 and 23 (or explicit skip) during fresh kanban install — no silent placeholders.

---

## Input

- [BR-079](../../../fbu/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md)
- Epic 22/23 template sources under kanban package
- **IPW:** [IPP-E6S9T8-br079-epic-22-23-install-templates.md](../../../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md) — **Publication Status: PUBLISHED**

---

## Deliverable

- Epic 22/23 templates in package or documented omission path
- Clear installer messaging when templates are skipped

---

## Acceptance Criteria

- [x] Epic 22/23 templates in package (`templates/epic-22/`, `templates/epic-23/`).
- [x] Installer resolves directory-layout templates; logs install vs placeholder.

## Implementation notes (2026-06-03)

- `_get_epic_template_file()` search order: `templates/epics/` then `templates/Epic-\{n\}/Epic-\{n\}.md`.
- Tests: `tests/kanban/test_install_epic_22_23_templates.py`.

---

## Links

- [BR-079](../../../fbu/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md)
- [IPP-E6S9T8](../../../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
