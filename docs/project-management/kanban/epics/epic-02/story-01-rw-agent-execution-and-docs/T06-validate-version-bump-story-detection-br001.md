---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T06 — validate_version_bump story auto-detection (BR-001)

**Task ID:** E02:S01:T06  
**Status:** ✅ COMPLETE (v0.2.1.6+1)  
**Priority:** HIGH  
**Created:** 2025-12-05  
**Last updated:** 2026-06-05 (RW **v0.2.1.6+2** — Step 7 kboard prune)  
**Version Anchor:** v0.2.1.6+1  
**Code:** E02S01T06

Publication Status: NOT_APPLICABLE

---

## Scope

Fix `validate_version_bump.py` `find_story_file()` Epic/Story auto-detection: use file path or **Code** field, never first `Epic N` in content (BR-001). BR-002 changelog ordering deferred.

---

## Input

- [BR-001](../../../fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md)
- [IPP-E02S01T06](../../../../implementation-cycles/IPP-E02S01T06-validate-version-bump-story-detection-br001.md)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`

---

## Deliverable

- Extended `extract_epic_story_from_path()` for legacy `epic-{NN}/stories/story-{NNN}` paths
- `find_story_file()` path-first + Code-field fallback; no content Epic regex
- Pytest coverage (T1–T5 in IPP §3)
- BR-001 fix-attempt history update

---

## Acceptance Criteria

- [x] Legacy path `epic-03/stories/story-003-*` resolves Epic 3 Story 3
- [x] References to other Epics do not break detection
- [x] Code field fallback when path lacks tokens
- [x] All `test_validate_version_bump.py` tests pass (23/23)
- [x] RW release with `--art` for E02:S01:T06

---

## References

- [BR-002](../../../fr-br/BR-002-changelog-validator-ordering-bug.md) (deferred)
- [story-01-rw-agent-execution-and-docs.md](../story-01-rw-agent-execution-and-docs.md) §T06
