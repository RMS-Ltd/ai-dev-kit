# CHANGELOG v0.6.7.107+3

**Release Date:** 2026-05-30 23:59:00 UTC  
**Version:** 0.6.7.107+3 (E06:S07:T107)  
**Epic:** E6 — Framework Management  
**Story:** S07 — ADK implementation analysis and package management  
**Task:** T107 — IDE command whitelist optimization  

**Task doc:** [T107-ide-command-whitelist-optimization.md](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)

---

## Summary

Change implemented: pattern-based IDE command allowlist catalog for Cursor maintainers (ADR-013), repo validator, maintainer playbook, and isolated pytest runner (avoids global pytest-django leakage).

---

## Added

- [ADR-013](../../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md) — catalog + validator + Cursor playbook enforcement model
- [IPP-E06S07T107](../../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)
- `.cursor/whitelist-patterns.yaml` v1.1 — portable `{PROJECT_ROOT}` patterns for RW validators, git, gh, pytest
- `validate_whitelist_patterns.py` + `test_validate_whitelist_patterns.py`
- `run_isolated_pytest.sh`, validation `pytest.ini`, `conftest.py`
- [ide-whitelist-guide.md](../../developer-tools/ide-whitelist-guide.md), [ide-whitelist-uat-log.md](../../developer-tools/ide-whitelist-uat-log.md)

## Updated

- T107 task doc — `**Task ID:**` header for FR-060 validators; AC evidence
- [FR-050](../../project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md) — remove incorrect T107 implementing-task link
- [BR-039](../../project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) — complementary Cursor track (does not fix vendor)
- `AGENTS.md`, workflow cheatsheet, `docs/governance/README.md`

## Verification

- `validate_whitelist_patterns.py` — PASS
- `python test_validate_whitelist_patterns.py` — 4 passed (isolated from pytest-django)

---

## Notes

- YAML does **not** auto-load in Cursor; maintainers map patterns via guide.
- Prior archive `CHANGELOG_v0.6.7.107+1` was workflows reorg (misattributed); this build is whitelist scope only.
