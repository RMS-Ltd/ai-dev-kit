---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 7: Kanban fresh install — structure template missing (BR-078)

**Task ID:** E06:S09:T07  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (RW -k **v0.6.9.7+1** — kanban init / intake)  
**Version:** v0.6.9.7+1  
**Code:** E06S09T07

**Upstream:** [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) · [GitHub #10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)

## Version Anchor

**Version:** v0.6.9.7+1 (RW -k kanban init — intake)

---

## Scope

Fix missing `KANBAN_STRUCTURE_TEMPLATE.md` resolution in `install_kanban_framework.py` so fresh installs are not **PARTIAL** when only the structure doc is absent.

---

## Input

- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) reproduction (book dry-run / greenfield clone)
- `packages/frameworks/kanban/` installer sources and template paths

---

## Deliverable

- Installer resolves and copies `kanban-structure.md` (or canonical structure template) on fresh install
- Updated install messaging and adopter docs

---

## Acceptance Criteria

- [ ] Template ships or installer uses correct canonical path.
- [ ] Install status reflects actual deliverables (board + epics).
- [ ] Adopter docs updated.

---

## Links

- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [Story 009](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)
