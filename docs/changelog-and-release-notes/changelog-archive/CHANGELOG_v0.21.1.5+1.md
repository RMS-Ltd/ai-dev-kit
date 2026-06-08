# Changelog v0.21.1.5+1

**Release Date:** 2026-06-07 10:54:27 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 05  
**SemVer:** v0.4.1072+1

---

## Summary

E21:S01:T05 — **Change implemented:** Read and locale-resolution API in `localisation_config.py` (`read_localisation_config`, `resolve_locale_asset`, manifest loaders).

---

## Changed

### Localisation API

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py` — read/resolve functions + framework root helpers
- `cli/localisation.py` — re-export new APIs

### Tests

- `tests/test_localisation_config_read_resolve.py` — T1–T10

### Documentation

- `docs/implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md`
- `packages/frameworks/kanban/locales/README.md` — T05 complete, T06 handoff

---

## References

- [T05](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md)
- [IPP-E21S01T05](../implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md)
