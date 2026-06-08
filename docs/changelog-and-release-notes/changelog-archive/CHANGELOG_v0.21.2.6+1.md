# Changelog v0.21.2.6+1

**Release Date:** 2026-06-07 18:33:23 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 06  
**SemVer:** v0.4.1082+1

---

## Summary

E21:S02:T06 — **Change implemented:** Translation key system via `resolve_locale_key()` with manifest-backed YAML lookup, catalog cache, and `prompt_language_choice` key integration. Policy: locale-key-conventions.

---

## Changed

### Key resolution APIs (`localisation_config.py`)

- `resolve_locale_key(project_root, key, *, package, substitutions, language)`
- `_parse_locale_key`, `_load_key_catalog`, `_KEY_CATALOG_CACHE`
- `_apply_locale_substitutions` shared with `render_locale_text`
- `prompt_language_choice(project_root=None)` loads strings from key catalogs with hardcoded fallback

### Documentation

- `docs/governance/standards/locale-key-conventions.md`
- `docs/implementation-cycles/IPP-E21S02T06-locale-key-system.md`
- ADR-024 T06 row; locale-file-structure §4.3; package locales READMEs

### Tests

- `tests/test_locale_key_resolution.py` (9 tests)

### CLI

- Re-export `resolve_locale_key` in `cli/localisation.py`

### Greenfield

- Synced `localisation_config.py` and locales README updates

---

## References

- [IPP-E21S02T06](../../implementation-cycles/IPP-E21S02T06-locale-key-system.md)
- [locale-key-conventions.md](../../governance/standards/locale-key-conventions.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
