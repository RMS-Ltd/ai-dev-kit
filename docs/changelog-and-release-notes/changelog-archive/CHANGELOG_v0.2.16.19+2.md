# Changelog v0.2.16.19+2

**Release Date:** 2026-06-05 15:25:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 19  
**SemVer:** v0.4.976+2

---

## Summary

E02:S16:T19 (UXR-022) — Change implemented: RW `--dpz` short flag for BUILD +0 override; `--doc-policy-zero` retained as alias in parsers, validators, tests, cheatsheet, and agent SoT docs.

---

## Added

- `--dpz` argparse alias in `resolve_rw_build.py` and `validate_version_bump.py`
- Pytest parity coverage for `--dpz` CLI and API paths
- [IPP-E02S16T19-rw-dpz-short-flag-uxr022.md](../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md)

---

## Changed

- [workflow-initiation-cheatsheet.md](../../guides/workflow-initiation-cheatsheet.md) — §2 RW matrix uses `--dpz` primary
- `.cursorrules`, `.claude/commands/rw.md`, dual-source RW excerpt, release-workflow guide
- `greenfield-install/` workflow-mgt mirrors via sync

---

## Notes

- BR-067 / BR-097 policy semantics unchanged
- Agents must still not infer `--dpz` from docs-only releases alone
