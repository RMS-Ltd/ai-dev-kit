# Changelog v0.21.3.3+1

**Release Date:** 2026-06-08 12:23:21 UTC  
**Epic:** 21 | **Story:** 3 | **Task:** 3  
**SemVer:** v0.4.1091+1

---

## Summary

E21:S03:T03 — Wire translation lookup and rendering at installer + CLI call sites via `locale_message()`.

---

## Change implemented

- Added `locale_message()` helper in `localisation_config.py` (pre-config bootstrap + substitution).
- Wired `install_release_workflow.py` to 93 `installer.*` keys and error surfaces.
- Wired `cli/commands/init.py` and `cli/utils.py` to `cli.*` / `cli.status.*` keys.
- Added `tests/test_translation_lookup_rendering.py` (L1–L8, marker `fr006`).
- Published [IPP-E21S03T03](../../implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md).
- Updated governance docs (inventory, registry wiring_status, locale-key/switching conventions).
- Synced greenfield-install workflow-mgt scripts.

---

## References

- [IPP-E21S03T03](../../implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md)
- [translatable-content-inventory.md](../../governance/standards/translatable-content-inventory.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
