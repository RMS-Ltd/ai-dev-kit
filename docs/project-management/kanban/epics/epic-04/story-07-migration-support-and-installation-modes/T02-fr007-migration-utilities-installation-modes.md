---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 7, Task 2: FR-007 — Migration Utilities and Installation Modes

**Task ID:** E04:S07:T02  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2025-12-10  
**Last updated:** 2026-06-05 (v0.4.7.2+2 — FR-007 verification closure; kboard four-surface reconciliation)  
**Version:** v0.4.7.2+2  
**Code:** E04S07T02

✅ COMPLETE (v0.4.7.2+2)

**Upstream:** [FR-007 — Migration Utilities and Installation Modes](../../../fr-br/FR-007-migration-utilities-and-installation-modes.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E04S07T02 — FR-007 migration utilities verification closure](../../../../../implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md) (IPW planning package)
- [FR-007](../../../fr-br/FR-007-migration-utilities-and-installation-modes.md)
- [BR-006](../../../fr-br/BR-006-missing-migration-support-pre-existing-kanban.md) (detection/analysis — E04:S07:T01)
- [UXR-001](../../../fr-br/UXR-001-migration-user-experience-research.md)
- `packages/frameworks/kanban/scripts/migrate_structure.py`
- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `packages/frameworks/kanban/scripts/README.md`

---

## Deliverable

Migration utility and installation-mode integration for pre-existing Kanban structures:

- `migrate_structure.py` — backups, E/S/T migration, forensic-marker preservation, Fresh/Migration/Update/Hybrid modes
- `install_kanban_framework.py` — interactive mode selection integrating detection, analysis, and migration
- Documented workflow in scripts README and framework README (T03)

---

## Acceptance criteria

- [x] **AC-1:** Detection utility (`detect_existing_structure.py`) scans and detects existing Kanban structures (T01)
- [x] **AC-2:** Analysis utility (`analyze_structure.py`) maps existing work to E/S/T format (T01)
- [x] **AC-3:** Migration utility (`migrate_structure.py`) converts existing items to canonical structure
- [x] **AC-4:** Installation process supports mode selection (Fresh, Migration, Update, Hybrid)
- [x] **AC-5:** Migration preserves existing work items and forensic markers (timestamp backups)
- [x] **AC-6:** Migration utilities documented with examples (`scripts/README.md`)
- [x] **AC-7:** Installation guide updated with migration scenarios (`packages/frameworks/kanban/README.md` — T03)
- [x] **AC-8:** Migration utilities tested — `pytest tests/kanban/ -k "install or migrate"` (20 passed, 2026-06-05)

---

## References

- [IPP-E04S07T02 — FR-007 migration utilities verification closure](../../../../../implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md)
- [FR-007](../../../fr-br/FR-007-migration-utilities-and-installation-modes.md)
- [Story 7 — Migration Support and Installation Modes](../story-07-migration-support-and-installation-modes.md)
- [E04:S07:T01](../story-07-migration-support-and-installation-modes.md) (detection/analysis)
- [E04:S07:T03](../story-07-migration-support-and-installation-modes.md) (documentation)
