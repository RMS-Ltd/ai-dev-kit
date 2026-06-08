# Changelog v0.21.2.2+1

**Release Date:** 2026-06-07 17:37:57 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 02  
**SemVer:** v0.4.1076+1

---

## Summary

E21:S02:T02 — **Change implemented:** Locale manifest v2 + en-GB/en-US `keys/` scaffold (kanban + workflow-mgt); FR-006 `supported_locales` registry; naming conventions policy. ADR-024 C1 hybrid structure.

---

## Changed

### Locale structure

- `packages/frameworks/kanban/locales/manifest.yaml` — v2, `keys` category, `supported_locales`
- `packages/frameworks/workflow-mgt/locales/manifest.yaml` — v2, `keys` category
- `locales/{en-GB,en-US}/keys/cli.yaml` and `errors.yaml` (both packages)

### Documentation

- `docs/governance/standards/locale-file-structure-conventions.md` — canonical layout + key naming
- `docs/implementation-cycles/IPP-E21S02T02-locale-file-structure.md` — IPP
- Package `locales/README.md` updates

### Tests

- `tests/test_locale_structure_v2.py` — manifest v2 structural guard

### Adopter mirror

- `greenfield-install/` synced via `sync_greenfield_install.py`

---

## References

- [T02](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md)
- [IPP-E21S02T02](../implementation-cycles/IPP-E21S02T02-locale-file-structure.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
