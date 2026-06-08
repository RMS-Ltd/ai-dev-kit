# Changelog v0.21.2.7+1

**Release Date:** 2026-06-07 18:38:15 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 07  
**SemVer:** v0.4.1083+1

---

## Summary

E21:S02:T07 — **Change implemented:** Translation fallback chain extended to ADR-024 order (selected → `default_locale` → `en-GB` → `en-US` → canonical template for assets). Policy: locale-fallback-conventions.

---

## Changed

### Fallback APIs (`localisation_config.py`)

- `SECONDARY_ENGLISH_LOCALE = "en-US"`
- `_language_fallback_chain` uses `map_to_supported_locale` (preserves FR-006 registry tags `fr`/`es`)
- Public `language_fallback_chain(locales_root, preferred)` for diagnostics
- Updated docstrings on `resolve_locale_asset` and `resolve_locale_key`

### Documentation

- `docs/governance/standards/locale-fallback-conventions.md`
- `docs/implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md` (linked from task)
- `locale-key-conventions.md` §2 step 3; package `locales/README.md` (×4)

### Tests

- `tests/test_locale_fallback_chain.py` (7 tests)

### CLI

- Re-export `SECONDARY_ENGLISH_LOCALE`, `language_fallback_chain` in `cli/localisation.py`

### Greenfield

- Synced `localisation_config.py` and locales README updates

---

## References

- [IPP-E21S02T07](../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md)
- [locale-fallback-conventions.md](../../governance/standards/locale-fallback-conventions.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
