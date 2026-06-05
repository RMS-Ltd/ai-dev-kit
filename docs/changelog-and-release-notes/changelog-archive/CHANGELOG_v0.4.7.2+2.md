# Changelog: v0.4.7.2+2

**Release Date:** 2026-06-05 03:39:04 UTC  
**Epic:** 4 | **Story:** 7 | **Task:** 2  
**SemVer:** v0.4.912+2

---

## Summary

E04:S07:T02 — **FR-007 verification closure** (BUILD +2): same deliverables as +1 with SemVer tag collision remediation (`v0.4.911` already tagged).

---

## Changes

### Planning

- Created `IPP-E04S07T02-fr007-migration-utilities-installation-modes.md` (IPW verification/FBU closure wave).
- Created discrete task doc `T02-fr007-migration-utilities-installation-modes.md` with bidirectional IPP wiring.

### Verification

- Re-ran `pytest tests/kanban/ -k "install or migrate"` — 20 passed.
- Confirmed `migrate_structure.py` and `install_kanban_framework.py` satisfy FR-007 AC-1..AC-8.

### Kanban (RW Step 7)

- FR-007 status → **IMPLEMENTED**; acceptance criteria checked.
- Pruned stale `kboard.md` C-band TODO row for E04:S07:T02 (story/checklist already COMPLETE).
- Task doc forensic marker `✅ COMPLETE (v0.4.7.2+2)`.

### BUILD remediation

- SemVer primary tag `v0.4.911` collision → BUILD +1 to `v0.4.7.2+2` / `v0.4.912+2` per BR-097.

---

## References

- [FR-007](../project-management/kanban/fr-br/FR-007-migration-utilities-and-installation-modes.md)
- [IPP-E04S07T02](../implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md)
- [T02 task doc](../project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T02-fr007-migration-utilities-installation-modes.md)
