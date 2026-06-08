# Changelog v0.21.3.6+1

**Release Date:** 2026-06-08 13:35:13 UTC  
**Epic:** 21 | **Story:** 3 | **Task:** 6  
**SemVer:** v0.4.1094+1

---

## Summary

E21:S03:T06 — Translation completeness tracking (`report_locale_completeness.py`), tier metrics, and missing-translation alerts.

---

## Change implemented

- Added `report_locale_completeness.py` — per-locale structural/linguistic completeness, P0–P3 tier breakdown, JSON/table output, `--fail-under` and `--alert-on` flags, optional `--update-registry`.
- Extended `locale_translation_utils.py` with completeness helpers (tier assignment, whole-file compare, registry load).
- Added `tests/test_translation_completeness_tracking.py` (C1–C13, marker `fr006`).
- Published [IPP-E21S03T06](../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md).
- Updated translation-management-tools guide, workflow policy, inventory, rollout matrix, ADR-024 integration plan, registry `completeness_tool` header, package locale READMEs.

---

## References

- [IPP-E21S03T06](../../implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md)
- [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md)
- [translatable-content-registry.yaml](../../governance/standards/translatable-content-registry.yaml)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
