# Changelog v0.21.2.5+1

**Release Date:** 2026-06-07 18:12:06 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 05  
**SemVer:** v0.4.1080+1

---

## Summary

E21:S02:T05 — **Change implemented:** Locale-aware date/time/number/currency formatting via `locale_formatting.py` (Babel wrappers + stdlib fallback). Policy: locale-formatting-conventions.

---

## Changed

### Formatting APIs (`locale_formatting.py`)

- `format_date`, `format_time`, `format_datetime`, `format_decimal`, `format_number`, `format_currency`
- `format_for_project` resolves locale via `resolve_language()`
- `LOCALE_FORMAT_PROFILES` per FR-006 supported locale
- `to_babel_locale`, `get_locale_format_profile`, `is_babel_available`
- Optional Babel import with documented stdlib fallback

### Dependencies

- `Babel>=2.12` in `requirements.txt` and `setup.py` (not in RW installer minimal deps)

### CLI bridge

- Re-exports in `cli/localisation.py`

### Documentation

- `docs/governance/standards/locale-formatting-conventions.md`
- `docs/implementation-cycles/IPP-E21S02T05-locale-formatting.md`
- ADR-024 T05 row updated; locales README cross-links

### Tests

- `tests/test_locale_formatting.py` (multi-locale + fallback path)

### Greenfield

- Mirrored `locale_formatting.py` and locales README updates

---

## References

- [IPP-E21S02T05](../../implementation-cycles/IPP-E21S02T05-locale-formatting.md)
- [locale-formatting-conventions.md](../../governance/standards/locale-formatting-conventions.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
