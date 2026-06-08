# Changelog v0.8.3.12+10

**Release Date:** 2026-06-07 10:45:00 UTC  
**Epic | Story | Task:** E08:S03:T12 (`RW --art`)  
**SemVer (task_touch):** v0.4.1036+10  

## Summary

**Change implemented:** BR-099 wave-6 code — Chunks L/M maintainability remediation across `packages/` + `greenfield-install/` mirror; CQG maintainability **103 → 87** (still **Fair**). Task **IN PROGRESS** (Good+ gate pending).

## Changed

- Python corpus: import consolidation (test modules), unused import/local cleanup, ineffectual-statement fixes, lambda/multiple-definition hygiene, ruff F401/F841/I001/F811/F541 guard **0**
- `packages/frameworks/**`, `greenfield-install/**`, `cli/`, `scripts/kb_stub_sweep.py` — wave-6 Chunk L/M scope per IPP §4.7

## Verification

- Ruff hygiene (F401,F841,I001,F811,F541): **0** remaining
- CQG maintainability (local SARIF re-analysis): **87** warnings (**Fair**; baseline **103** @ step 28)

## Notes

- SemVer primary tag **`v0.4.1036`** (reassigned after rebase onto parallel E05 releases)
- Good+ not met — step 28 re-scan on `main` post-merge still required; task remains **IN PROGRESS**

## Kanban / intake

- **E08:S03:T12** — wave-6 code @ **v0.8.3.12+10**; **IN PROGRESS**
- **BR-099** — AC3 open (**Fair** @ **87** local CQG)

## References

- [IPP-E08S03T12 §4.7](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [T12](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
