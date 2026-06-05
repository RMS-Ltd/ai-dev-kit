# Changelog v0.8.3.12+1

**Release Date:** 2026-06-05 11:55:14 UTC  
**Epic | Story | Task:** E08:S03:T12 (`RW --art`)  
**SemVer:** v0.4.969+1

---

## Summary

E08:S03:T12 — **Attempted fix:** Wave-1 Code Quality maintainability hygiene burn-down (**BR-099**): `ruff` autofix across 406 Python files; `ruff` added to dev extras. Dashboard ≥50% / **Good** score pending post-merge re-scan.

---

## Changes

### Attempted Fixes

- **BR-099 / maintainability wave 1:** `ruff check --fix` (F401, F841, I001, F811) on `packages/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/` — 937 → 0 local proxy issues; 13 edge-case imports fixed manually.
- **`setup.py`:** Added `ruff>=0.8.0` to `extras_require["dev"]`.

### Documentation

- **IPP-E08S03T12** planning package (prior session).
- Task doc baseline + post-wave manifests; BR-099 attempted-fix section.

### Verification (local)

- `pytest tests/` — 396 passed, 2 skipped.
- Workflow-scripts pytest gate — 116 passed.

---

## References

- [BR-099](../../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [E08:S03:T12](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T12](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
