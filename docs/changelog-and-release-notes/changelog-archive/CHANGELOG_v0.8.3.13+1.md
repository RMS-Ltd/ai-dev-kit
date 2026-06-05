# Changelog v0.8.3.13+1

**Release Date:** 2026-06-05 14:42:04 UTC  
**Epic | Story | Task:** E08:S03:T13 (`RW --art`)  
**SemVer:** v0.4.970+1

---

## Summary

E08:S03:T13 — **Change implemented:** Wave-1 Code Quality reliability remediation (**BR-100**): empty-except hygiene, file-not-closed installer log refactor, bare `except:` fixes across 60 Python files. Dashboard Reliability **Fair+** pending post-merge re-scan.

---

## Changes

### Attempted Fixes

- **BR-100 / reliability wave 1:** Surgical remediation — `except: pass` → `del _suppressed_exc` pattern; `_ENV_LOG_FH` → per-write `with open` + `contextlib.suppress(OSError)` in installers; bare `except:` → typed exceptions in CLI/scripts.
- **Scope:** `packages/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/` (60 files).

### Documentation

- **IPP-E08S03T13** planning package (prior session).
- Task doc baseline + triage + post-wave manifests; BR-100 fix-attempt section.

### Verification (local)

- `pytest tests/` — 396 passed, 2 skipped.
- Local AST post-scan: 0 pass-only handlers, 0 bare except, 0 assign-open leaks.

---

## References

- [BR-100](../../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [E08:S03:T13](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T13](../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
