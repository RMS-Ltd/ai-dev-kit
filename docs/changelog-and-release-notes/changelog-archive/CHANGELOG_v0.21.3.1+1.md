# Changelog v0.21.3.1+1

**Release Date:** 2026-06-08 11:50:47 UTC  
**Epic:** 21 | **Story:** 3 | **Task:** 1  
**SemVer:** v0.4.1089+1

---

## Summary

E21:S03:T01 — Translatable content inventory and YAML key extraction for installer and CLI surfaces (FR-006 Phase 3 pipeline start).

---

## Change implemented

- Created canonical [translatable-content-inventory.md](../../governance/standards/translatable-content-inventory.md) and machine-readable registry for T06 handoff.
- Added workflow-mgt `installer` key domain (93 keys) plus extended `cli` (+18) and `errors` (+3) catalogs in en-GB/en-US.
- Registered `installer` in manifest v2; synced greenfield-install mirrors.
- Added `tests/test_translatable_content_inventory.py`; extended locale structure tests.
- IPP [IPP-E21S03T01](../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md) wired to task doc.
- Validator strings inventoried only (Option B); call-site wiring deferred to E21:S03:T03.

---

## References

- [IPP-E21S03T01](../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
