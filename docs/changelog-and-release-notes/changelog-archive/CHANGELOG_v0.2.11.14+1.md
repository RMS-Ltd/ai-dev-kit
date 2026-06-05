# Changelog v0.2.11.14+1

**Release Date:** 2026-06-05 05:15:00 UTC  
**Epic:** 2 | **Story:** 11 | **Task:** 14  
**SemVer:** v0.4.923+1

---

## Summary

E02:S11:T14 — **BR-052:** GitHub Actions workflow optimization — path filters and pip caching on active Python CI workflows; BR-052 intake trigger scope preserved for post-BR-053 re-enable.

---

## Change implemented

### Active workflow optimizations (BR-052)

- **`tests.yml`:** Path filters on push/PR (`tests/**`, `src/**`, `packages/**`, `pyproject.toml`, workflow self-path); pip cache via `setup-python`.
- **`workflow-scripts-pytest.yml`:** Pip cache for faster dependency install.
- **`framework-release.yml`:** Pip cache for tag/dispatch release builds.

### Intake trigger scope (BR-052 + BR-053)

- **Active `fr-br-intake.yml`:** Remains `workflow_dispatch` only (T13/BR-051; no issue/push triggers).
- **Future template `fr-br-intake.yml.DISABLED`:** BR-052 labeled/unlabeled scope with `edited` exclusion for post-BR-053 re-enable.
- **Deferral rationale:** BR-053 push-trigger bug — automatic issue triggers remain disabled until evidence-based re-enable.

### Verification

- **IPP:** [IPP-E02S11T14-github-actions-workflow-optimization.md](../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)
- **Pytest:** `tests/test_gha_workflow_br052.py` (8 tests)

---

## References

- [BR-052](../../project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md)
- [BR-053](../../project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)
- [T14 task doc](../../project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md)
