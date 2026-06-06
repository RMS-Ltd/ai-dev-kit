# Changelog v0.8.3.12+5

**Release Date:** 2026-06-06 12:47:21 UTC  
**Epic | Story | Task:** E08:S03:T12  
**SemVer (task_touch):** v0.4.996+5  

## Summary

Wave-3 maintainability verification (BR-099): IPP revision + `greenfield-install/` wave-3 manifest/triage; local ruff proxy **0** open for wave-3 rule set; dashboard **Good+** re-scan still pending.

## Change implemented

- **IPP-E08S03T12** revised — wave 1–2 complete; wave 3 steps 22–27 documented; **Good+** hard gate before COMPLETE
- **Wave-3 pre/post manifests** in task doc @ `bf3c10ed` — F541/F401/F841/I001/F811/F823 all **0** in `greenfield-install/` (no Python edits required)
- **Wave-3 triage** — out-of-scope ruff (E402, F821, …) documented as separate backlog (**93** findings)
- Task remains **IN PROGRESS** until GitHub Code Quality dashboard **Good+** (T16)

## Verification

- `pytest tests/` — **407 passed**, 2 skipped
- `workflow-scripts-pytest` (local) — **119 passed**
- `ruff check greenfield-install --select F541,F401,F841,I001,F811,F823` — **0** issues

## Kanban / intake

- **E08:S03:T12** — wave-3 manifests + IPP §4.2 steps 22–27 **DONE**; status **IN PROGRESS** (T16 pending)
- **BR-099** — wave-3 attempt narrative updated; AC3/AC5 still open until dashboard **Good+**

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [T12](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T12](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
