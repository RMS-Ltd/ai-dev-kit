---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 7: Kanban fresh install — structure template missing (BR-078)

**Task ID:** E06:S09:T07  
**Status:** COMPLETE (pending user verification on book replay)  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (RW -k **v0.6.9.7+1** — kanban init / intake)  
**Version:** v0.6.9.7+1  
**Code:** E06S09T07

**Upstream:** [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) · [GitHub #10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)

## Version Anchor

**Version:** v0.6.9.7+2 (RW --art)

---

## Scope

Fix missing `KANBAN_STRUCTURE_TEMPLATE.md` resolution in `install_kanban_framework.py` so fresh installs are not **PARTIAL** when only the structure doc is absent.

---

## Input

- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) reproduction (book dry-run / greenfield clone)
- `packages/frameworks/kanban/` installer sources and template paths
- **IPW planning artifact:** [IPP-E06S09T07-br078-kanban-structure-template-missing.md](../../../../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md) — **Publication Status: PUBLISHED**

---

## Deliverable

- Installer resolves and copies `kanban-structure.md` (or canonical structure template) on fresh install
- Updated install messaging and adopter docs

---

## Acceptance Criteria

- [x] Template ships or installer uses correct canonical path (`KANBAN_STRUCTURE_TEMPLATE.md`).
- [x] Install status reflects actual deliverables (`SUCCESS` when kboard + epics; no false PARTIAL from pre-install).
- [x] Adopter docs updated (`INSTALL_IN_YOUR_PROJECT.md`, kanban README).

## Implementation notes (2026-06-03)

- Shipped `packages/frameworks/kanban/templates/KANBAN_STRUCTURE_TEMPLATE.md`.
- `resolve_structure_template()`, `assess_fresh_install_outcome()`, fresh-mode status fix in `install_kanban_framework.py`.
- Tests: `tests/kanban/test_install_structure_template.py`.

---

## Links

- [BR-078](../../../fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [IPP-E06S09T07](../../../../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md)
- [Story 009](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)
