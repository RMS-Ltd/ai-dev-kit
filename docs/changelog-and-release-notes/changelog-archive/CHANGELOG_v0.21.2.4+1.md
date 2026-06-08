# Changelog v0.21.2.4+1

**Release Date:** 2026-06-07 17:59:32 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 04  
**SemVer:** v0.4.1078+1

---

## Summary

E21:S02:T04 — **Change implemented:** Language switching via `switch_locale()`, `adk config locale`, `--locale` on init/installer, FR-006 config round-trip. Policy: locale-switching-conventions.

---

## Changed

### Switching APIs (`localisation_config.py`)

- `locale_payload_from_tag`, `switch_locale`
- `read_localisation_config` round-trips FR-006 registry tags
- `ensure_localisation_config` accepts `locale` + `force` overwrite path
- `resolve_language_from_args` accepts `locale` parameter

### CLI

- `adk config locale show` / `set <tag>` / `set --interactive`
- `adk init --locale` (canonical); `--language` alias retained
- RW installer `--locale` flag

### Documentation

- `docs/governance/standards/locale-switching-conventions.md`
- `docs/implementation-cycles/IPP-E21S02T04-locale-switching.md`
- ADR-024 T04 row updated

### Tests

- `tests/test_locale_switching.py`
- `tests/test_commands.py` locale smoke tests
- `test_localisation_config_read_resolve.py` T3b registry round-trip

### Adopter mirror

- `greenfield-install/` localisation_config + install_release_workflow synced

---

## References

- [IPP-E21S02T04](../../implementation-cycles/IPP-E21S02T04-locale-switching.md)
- [locale-switching-conventions.md](../../governance/standards/locale-switching-conventions.md)
