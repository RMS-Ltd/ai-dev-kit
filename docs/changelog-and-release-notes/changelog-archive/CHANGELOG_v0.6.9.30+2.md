# CHANGELOG v0.6.9.30+2 — Kanban installer log epic path padding (E06:S09:T30)

**Release Date:** 2026-06-10 19:15:18 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 30  
**SemVer:** v0.4.1140+2  
**Internal:** v0.6.9.30+2

---

## Summary

**IDW delivery:** Attempted fix for BR-107 — Kanban v3.2 fresh-install success and dry-run stdout now show padded epic destination paths (`epics/epic-01/epic-01.md`) matching on-disk writes via `kanban_paths` helpers.

---

## Changed

### Kanban installer (BR-107 / F21)

- **`migrate_structure.py`:** Success log and dry-run destination hints use `kp.epic_dir_name` / `kp.epic_doc_basename` instead of unpadded `epic-{N}` segments.
- On-disk layout unchanged (UXR-017 compliant).

### Tests

- `tests/kanban/test_migrate_structure_log_epic_padding.py`: fresh install, dry-run, and unit capsys assertions for padded paths; negative regex for unpadded single-digit segments.

### Documentation

- BR-107 status updated; triage matrix F21 resolved.
- Greenfield mirror synced (`FR-110`).

---

## Verification

- [x] Pytest — `test_migrate_structure_log_epic_padding.py`, `test_install_epic_22_23_templates.py`, `test_kanban_v32_fresh_install.py` — 10 passed
- [ ] Operator replay on SBL attempt 05 environment — pending confirmation

---

## References

- [BR-107](../../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md)
- [IPP-E06S09T30](../../implementation-cycles/IPP-E06S09T30-kanban-installer-log-epic-path-padding-br107.md)
- [UXR-017](../../kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
