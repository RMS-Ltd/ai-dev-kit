# Changelog v0.21.2.1+1

**Release Date:** 2026-06-07 17:19:25 UTC  
**Epic:** 21 | **Story:** 02 | **Task:** 01  
**SemVer:** v0.4.1075+1

---

## Summary

E21:S02:T01 — **Change implemented:** i18n framework selection for FR-006 Phase 2 — ADR-024 **C1 hybrid** (manifest + whole-file markdown + YAML key catalogs; Babel formatting deferred to S02:T05). Evaluation matrix, IPP, integration handoffs for S02:T02–T07.

---

## Changed

### Architecture

- `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` — canonical i18n strategy
- `docs/architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md` — scored candidates C1–C4

### Planning / kanban

- `docs/implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md` — IPW package
- T01 task doc — scope, deliverables, V1–V8, COMPLETE marker
- Story S02, FR-006 Phase 2 anchors, `kanban/locales/README.md` Phase 2 roadmap

### Tests

- `tests/test_i18n_framework_decision_artifacts.py` — structural guard (V8)

---

## References

- [T01](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)
- [IPP-E21S02T01](../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
