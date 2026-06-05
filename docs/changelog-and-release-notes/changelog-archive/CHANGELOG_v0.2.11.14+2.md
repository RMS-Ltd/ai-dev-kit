# Changelog v0.2.11.14+2

**Release Date:** 2026-06-05 05:20:00 UTC
**Epic:** 2 | **Story:** 11 | **Task:** 14
**SemVer:** v0.4.922+2

## Summary

E02:S11:T14 — **BR-052:** GitHub Actions workflow optimization (BUILD +2 — prior v0.2.11.14+1 tag collision recovery per BR-097).

## Change implemented

- `tests.yml` — path filters + pip cache
- `workflow-scripts-pytest.yml` — pip cache
- `framework-release.yml` — pip cache
- `fr-br-intake.yml` — workflow_dispatch only; BR-052 scope in `.DISABLED` template
- `tests/test_gha_workflow_br052.py` — 8-test contract

## References

- [BR-052](../../project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md)
- [IPP-E02S11T14](../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)
