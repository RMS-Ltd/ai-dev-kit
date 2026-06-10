# CHANGELOG v0.6.9.28+2 — BR-105 v3.2 sign-off story padding (E06:S09:T28)

**Release Date:** 2026-06-10 19:02:02 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 28  
**SemVer:** v0.4.1138+2  
**Internal:** v0.6.9.28+2

---

## Summary

**MWF delivery:** Contract alignment for BR-086 install sign-off — accepts kanban v3.2 / UXR-014 `story-{story:02d}` and `T{task:02d}` patterns alongside book T03 `story-{story:03d}` / `t{task}` conventions. Resolves SBL attempt 05 F18 false NOT READY.

---

## Changed

### Install sign-off contract (BR-105 / F18)

- **`github-issue-install-signoff-contract.yaml`:** BR-086 `rw_config_patterns` uses `story_doc_pattern_contains_any` (`03d` or `02d`) and `task_doc_pattern_contains_any` (`t{task` or `T{task`) — mirrors BR-083/BR-084 alternates.
- **Policy:** Contract alignment chosen over installer revert; v3.2 `kanban_paths.py` SoT unchanged.

### Tests

- `tests/test_install_release_workflow_rw_config.py`: v3.2 SBL fixture + full `evaluate_all` BR-086 READY regression; book T03 regression preserved.

### Documentation

- `INSTALL_IN_YOUR_PROJECT.md`: sign-off note for BR-086 / BR-105 dual-convention acceptance.
- `docs/implementation-cycles/IPP-E06S09T28-br105-v32-signoff-story-padding.md`: IPP from MWF Leg 1.
- Greenfield mirror synced (`FR-110`).

---

## Verification

- [x] Pytest `tests/test_install_release_workflow_rw_config.py` — 11 passed
- [ ] SBL attempt 05 replay — operator confirmation pending
- [x] Book T03 config regression — automated sign-off tests pass

---

## References

- [BR-105](../../kanban/fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md)
- [BR-086](../../kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [UXR-014](../../kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)
- [IPP-E06S09T28](../../implementation-cycles/IPP-E06S09T28-br105-v32-signoff-story-padding.md)
