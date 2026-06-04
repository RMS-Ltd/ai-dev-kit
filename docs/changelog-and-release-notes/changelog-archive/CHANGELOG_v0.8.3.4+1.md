# Changelog v0.8.3.4+1

**Release Date:** 2026-06-04 22:32:54 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 4  
**Internal Version:** v0.8.3.4+1  
**SemVer:** v0.4.886+1

---

## Summary

E08:S03:T04 — **BR-058:** Change implemented for repo-wide **Tests** GitHub Actions workflow (Python 3.11) and pytest suite remediation (348 passed locally).

---

## Changes

### Added

- `.github/workflows/tests.yml` — `name: Tests`; runs `pip install -e ".[dev]"` and `pytest tests/` on every PR and push to `main`/`dev`
- `docs/implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md`

### Changed

- **Test remediation:** `test_utils.py` (`.resolve()` path compare), `test_install_receipt_fr062.py` (`workflow-mgt` path), kanban install tests (lowercase `epic-*` / `kboard.md`), `test_validate_kanban_governance_policy.py` (R06 fixture), `test_icw_workflow_customization` (replace-not-merge config)
- `packages/frameworks/workflow-mgt/scripts/validation/README.md` — two-gate CI model (workflow-scripts-pytest + tests)
- Task doc E08:S03:T04 — IN PROGRESS → COMPLETE; IPP wired
- **BR-058** — RESOLVED

### Documentation

- Validation README documents complementary CI gates (E07:S07:T02 scoped + E08:S03:T04 repo-wide)

---

## Verification

- [x] Local: `python3 -m pytest tests/` — 348 passed, 1 skipped
- [ ] CI: GitHub Actions **Tests** workflow green on PR (pending user verification)

---

## References

- [BR-058](../../project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
- [IPP-E08S03T04](../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [IPP-E07S07T02](../../implementation-cycles/IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md)
