# Changelog v0.2.16.20+2

**Release Date:** 2026-06-05 19:45:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 20  
**SemVer:** v0.4.979+2

---

## Summary

E02:S16:T20 (UXR-023) — **Change implemented:** Restore UXR-010 IPP segment on all active `kboard.md` MoSCOW rows; extend FR-090 normalizer for live `[Task](url)` row grammar; add strict IPP gate to `validate_active_kanban_board.py`; documentation and intake/UKW skill parity.

---

## Added

- `docs/implementation-cycles/IPP-E02S16T20-restore-kboard-ipp-segment-uxr023.md` — implementation plan (IPW)
- `test_4_21` — kboard live `[Task]` IPP normalization coverage in `test_update_kanban_docs.py`
- IPP segment strict check in `validate_active_kanban_board.py` (UXR-010 / UXR-023 AC4)

## Changed

- `update_kanban_docs.py` — kboard `[Task](url)` path in `_normalize_traceability_segments_for_row`; padded epic token in `resolve_planning_artifact_for_task`; idempotent IPP strip fix
- `kboard.md` — corpus restore: all active MoSCOW rows include `—No IPP—` or linked `[—IPP—](…)`
- `KANBAN_BOARD_TEMPLATE.md`, `kanban-board-guide.md` — IPP segment contract documented
- `.cursor/skills/intake-process/SKILL.md`, `.cursor/skills/ukw-sync/SKILL.md` — IPP required at intake / UKW Step 5
- `ukw-dual-source-parity.md` — validator checklist notes IPP segment
- `greenfield-install/` mirrors — workflow-mgt + kanban template parity

---

## Verification

- `pytest` — `test_update_kanban_docs.py` cat 4 (incl. 4.21) + `test_validate_active_kanban_board.py` green
- `validate_active_kanban_board.py --strict` — PASS on live `kboard.md`
- `sync_greenfield_install.py --check` — PASS

---

## References

- [UXR-023](../../project-management/kanban/fr-br/UXR-023-kboard-ipp-segment-regression.md)
- [IPP-E02S16T20](../../implementation-cycles/IPP-E02S16T20-restore-kboard-ipp-segment-uxr023.md)
