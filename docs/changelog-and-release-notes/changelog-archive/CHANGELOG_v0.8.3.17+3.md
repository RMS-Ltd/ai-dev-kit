# Changelog — v0.8.3.17+3

**Release Date:** 2026-06-06 15:15:00 UTC

**Epic:** 8 | **Story:** 3 | **Task:** 17

## Summary

E08:S03:T17 — **Attempted fix:** CodeQL `security-and-quality` suite mapping for local CQG (`python-security-and-quality.qls`). SemVer **v0.4.1004+3**.

## Changes

### Fixed

- `resolve_query_pack_spec()` maps GitHub `security-and-quality` → `codeql/python-queries:codeql-suites/python-security-and-quality.qls`
- CQG `run_cqg.py` analyze step verified locally after fix

### Added

- `test_code_quality_config.py` — suite resolution tests

### Updated

- FR-106 mirror under `greenfield-install/`

## References

- [T17](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)
- [Operator guide](../../../packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md)
