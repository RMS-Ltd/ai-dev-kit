---
lifecycle: draft
ttl_days: null
created_at: 2026-04-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Test Design — E6:S07:T114 canonical board filename migration

## Test Objectives

Validate canonical-board defaults, legacy compatibility behavior, and documentation-site integrity.

## Test Matrix

1. **Workflow edge regression**
   - Command: `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
   - Expected: all category-4 tests pass.

2. **Alias compatibility**
   - Verify script candidate paths include canonical + legacy fallback where applicable.
   - Expected: no runtime regressions when older board filenames are present.

3. **Documentation integrity**
   - Command: `npm run build` (repo root).
   - Expected: Docusaurus build exits 0 with no unresolved-link failures from renamed board references.

4. **Lint/diagnostics sanity**
   - Run lint diagnostics on edited docs/scripts paths.
   - Expected: no newly introduced lints.

## Evidence Capture

- Command outputs for (1) and (3).
- Edited-file set and fallback-path checks for (2).
- Lint report snapshot for (4).

## References

- [ICW Specification](./ICW-E6S07T114-specification.md)
- [Task E6:S07:T114](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
