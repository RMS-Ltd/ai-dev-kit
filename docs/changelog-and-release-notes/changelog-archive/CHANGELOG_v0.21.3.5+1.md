# Changelog v0.21.3.5+1

**Release Date:** 2026-06-08 13:09:04 UTC  
**Epic:** 21 | **Story:** 3 | **Task:** 5  
**SemVer:** v0.4.1093+1

---

## Summary

E21:S03:T05 — Translation management tools for maintainers (structural validation, key sync, maintainer documentation).

---

## Change implemented

- Added `validate_locale_translations.py` — YAML parse, manifest paths, en-GB key parity, `{{placeholder}}` checks (`--strict`, `--verbose`).
- Added `sync_locale_keys.py` — incremental missing-key sync from en-GB (`--dry-run`).
- Added `locale_translation_utils.py` shared helpers.
- Published [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md) maintainer guide.
- Published [IPP-E21S03T05](../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md).
- Updated translation workflow policy, contributing guide, inventory/registry, ADR-024 integration plan, package locale READMEs.
- Added `tests/test_translation_management_tools.py` (V1–V11, marker `fr006`).

---

## References

- [IPP-E21S03T05](../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md)
- [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md)
- [translation-workflow-and-review.md](../../governance/standards/translation-workflow-and-review.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
