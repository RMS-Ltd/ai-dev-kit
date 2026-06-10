# CHANGELOG v0.6.9.29+2 — BR-106 non-interactive CHANGELOG scaffold (E06:S09:T29)

**Release Date:** 2026-06-10 19:07:27 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 29  
**SemVer:** v0.4.1139+2  
**Internal:** v0.6.9.29+2

---

## Summary

**MWF delivery:** Attempted fix for BR-106 — `--non-interactive` RW install no longer prompts for `CHANGELOG.md` or `version_file` scaffolds when stdin is unavailable. Deterministic auto-create path wired via `scaffold_interactive` flag.

---

## Changed

### RW installer (BR-106 / F19)

- **`install_release_workflow.py`:** `scaffold_interactive` derived from `--non-interactive`, `--locale`/`--language`, or `--config`; passed to `ensure_version_file_scaffold` and `ensure_main_changelog_scaffold` (live + dry-run).
- **Root cause:** prior wiring used `interactive=not bool(args.config)` only, leaving prompts active under `--non-interactive`.

### Tests

- `tests/test_install_release_workflow_non_interactive_scaffold.py`: mode C with closed stdin creates `CHANGELOG.md` and `version_file` without EOFError.

### Documentation

- `INSTALL_IN_YOUR_PROJECT.md`: non-interactive auto-scaffold behaviour documented.
- `docs/implementation-cycles/IPP-E06S09T29-br106-non-interactive-changelog-scaffold.md`: IPP from MWF Leg 1.
- Greenfield mirror synced (`FR-110`).

---

## Verification

- [x] Pytest scaffold + non-interactive tests — 10 passed
- [ ] SBL attempt 05 replay without pre-created CHANGELOG — operator confirmation pending

---

## References

- [BR-106](../../kanban/fr-br/BR-106-rw-install-non-interactive-changelog-prompt-eof.md)
- [BR-088](../../kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md)
- [IPP-E06S09T29](../../implementation-cycles/IPP-E06S09T29-br106-non-interactive-changelog-scaffold.md)
