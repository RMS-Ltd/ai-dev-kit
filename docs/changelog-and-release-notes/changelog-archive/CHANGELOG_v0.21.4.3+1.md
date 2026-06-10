# Changelog v0.21.4.3+1

**Release Date:** 2026-06-10 09:52:07 UTC

**Epic:** 21 | **Story:** 04 | **Task:** 03

---

## Summary

E21:S04:T03 — **Change implemented:** Framework RTL support for Arabic (`ar`) with Hebrew (`he`) API extension; CLI/installer direction-aware formatting; governance standard and tests. SemVer **v0.4.1111+1**.

---

## Changes

### Framework (RTL APIs)

- `RTL_LOCALES`, `is_rtl_locale`, `text_direction_for_locale` in `localisation_config.py`
- `format_cli_status_line`, `format_numbered_choice`, `format_locale_line_for_direction` for CLI/installer
- Exported via `cli/localisation.py`
- Installer `_print_msg` for `project_not_found`, `config_loaded`, `config_written`
- `prompt_language_choice` uses direction-aware numbered choices
- `locale_metadata.ar.text_direction: rtl` in kanban + workflow-mgt manifests

### Documentation

- [IPP-E21S04T03](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)
- [locale-rtl-conventions.md](../../governance/standards/locale-rtl-conventions.md)
- ADR-024 integration plan row; cross-link fixes (translation workflow RTL owner)

### Tests

- `tests/test_locale_rtl_support.py`
- `tests/test_locale_rtl_conventions.py`

### Greenfield

- `greenfield-install/` mirror synced

---

## Version

`v0.21.4.3+1` (internal) · `v0.4.1111+1` (SemVer)
