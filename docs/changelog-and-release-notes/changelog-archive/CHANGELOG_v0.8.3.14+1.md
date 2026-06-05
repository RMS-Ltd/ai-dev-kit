# Changelog v0.8.3.14+1

**Release Date:** 2026-06-05 14:51:20 UTC  
**Epic | Story | Task:** E08:S03:T14 (`RW --art`)  
**SemVer:** v0.4.972+1

---

## Summary

E08:S03:T14 — **Change implemented:** Code Quality AI suggestions triage (**BR-101**): 12 of 14 findings applied across semver_converter, sync_greenfield_install, contamination detector/tests, and portal link tests; 2 dismissed with rationale (version.py dataclass, sync `rglob` pattern). GitHub AI panel 0-open verification pending dismiss #10–#11 after merge.

---

## Changes

### Attempted Fixes

- **BR-101 / AI findings wave:** Triage inventory for 14 suggestions from [ai-findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings).
- **semver_converter** (packages + greenfield-install): optional BUILD in `semver_to_internal`, collision-safe reverse lookup, regex `(epic,story)` parse, drop redundant `epic_key`.
- **sync_greenfield_install:** warn on `git ls-files` failure; `_validate_safe_dest` before `shutil.rmtree`.
- **contamination_detector** + tests: case-insensitive canonical epic match; `fr-br/` root path; import fallback + `Epic-*` test paths.
- **test_portal_br068_monorepo_links:** `https://` blob prefix, helper rename, violation-count assertion message.

### Dismissed (documented)

- `src/ai_dev_kit/version.py` dataclass refactor — RW/validators require flat `VERSION_*` constants.
- `sync_greenfield_install` `rglob('**/*')` — no meaningful pathlib benefit.

### Documentation

- T14 task doc inventory + post-triage manifest; BR-101 fix-attempt section; IPP-E08S03T14 (prior session).

### Verification (local)

- `pytest packages/frameworks/kanban/scripts/test_contamination_detector.py tests/test_portal_br068_monorepo_links.py` — 7 passed.

---

## References

- [BR-101](../../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [E08:S03:T14](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)
- [IPP-E08S03T14](../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
