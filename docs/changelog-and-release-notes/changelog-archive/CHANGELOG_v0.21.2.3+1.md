# Changelog v0.21.2.3+1

**Release Date:** 2026-06-07 17:46:54 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 03  
**SemVer:** v0.4.1077+1

---

## Summary

E21:S02:T03 — **Change implemented:** Locale detection APIs (system, browser Accept-Language, `ADK_LOCALE`) and ADR-024 precedence in `resolve_language()`. Policy: locale-detection-conventions.

---

## Changed

### Detection APIs (`localisation_config.py`)

- `parse_locale_tag`, `map_to_supported_locale`, `detect_env_locale`, `detect_system_locale`
- `parse_accept_language`, `detect_browser_locale`
- `resolve_language()` extended: override → config → `ADK_LOCALE` → system → `accept_language` → default

### CLI bridge

- `cli/localisation.py` re-exports detection APIs

### Documentation

- `docs/governance/standards/locale-detection-conventions.md` — canonical precedence policy
- `docs/implementation-cycles/IPP-E21S02T03-locale-detection.md` — IPP
- ADR-024 T03 row updated (browser = Accept-Language API)
- Package `locales/README.md` updates

### Tests

- `tests/test_locale_detection.py` — T1–T12 detection and precedence coverage

### Adopter mirror

- `greenfield-install/packages/frameworks/workflow-mgt/scripts/localisation_config.py` synced

---

## References

- [IPP-E21S02T03](../../implementation-cycles/IPP-E21S02T03-locale-detection.md)
- [locale-detection-conventions.md](../../governance/standards/locale-detection-conventions.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
