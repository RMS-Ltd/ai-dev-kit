# Changelog v0.21.3.2+1

**Release Date:** 2026-06-08 12:14:02 UTC  
**Epic:** 21 | **Story:** 3 | **Task:** 2  
**SemVer:** v0.4.1090+1

---

## Summary

E21:S03:T02 — Scaffold on-disk locale trees for nine FR-006 major languages; publish rollout matrix.

---

## Change implemented

- Added `scaffold_locale_trees.py` — deterministic en-GB copy to `es`, `fr`, `de`, `zh-CN`, `zh-TW`, `ja`, `pt`, `ru`, `ar`.
- Created 153 locale files across kanban + workflow-mgt; updated both manifests.
- Published [locale-rollout-matrix.md](../../governance/standards/locale-rollout-matrix.md) with P0–P3 tiers and S05–S07 ownership.
- Extended translatable-content registry v2 with per-locale scaffold status.
- Added `tests/test_locale_scaffold_major_languages.py`; extended structure tests.
- Synced greenfield-install mirrors.

**Note:** Content is en-GB interim placeholder; linguistic translation deferred to E21:S05–S07.

---

## References

- [IPP-E21S03T02](../../implementation-cycles/IPP-E21S03T02-create-translation-files-major-languages.md)
- [IPP-E21S03T01](../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md)
