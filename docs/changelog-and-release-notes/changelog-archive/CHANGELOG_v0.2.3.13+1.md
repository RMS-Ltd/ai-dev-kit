# Changelog v0.2.3.13+1

**Release Date:** 2026-06-24 13:45:25 UTC  
**Epic:** 2 | **Story:** 3 | **Task:** 13  
**SemVer:** v0.4.1220+1  
**Task:** [E02:S03:T13 — MWF `delivery` RW intent preflight (FR-137)](../../kanban/epics/epic-02/story-03-additional-workflows-and-examples/T13-mwf-delivery-rw-intent-preflight-fr137.md)

---

## Summary

Change implemented for **FR-137** — MWF `delivery` Phase 0 RW intent preflight fails fast before IPW/IDW when `version.py` mismatches requested `E:S:T` without `--art`; explicit `--art` forwards through to IDW `--rw`.

---

## Changes

### Added

- `validate_mwf_delivery_preflight.py` — FR-137 wrapper with `MWF ABORTED (preflight: RW intent)` messaging and `delivery --art` hint
- `tests/workflow_mgt/test_mwf_delivery_preflight.py` — AC1–AC3 + E03:S02:T15 regression documentation check
- [IPP-E02S03T13](../../implementation-cycles/IPP-E02S03T13-mwf-delivery-rw-intent-preflight-fr137.md) — MWF Leg 1 planning package

### Changed

- `.claude/commands/mwf.md` — Phase 0 preflight step; distinct abort token
- `meta-workflow-agent-execution.md` — orchestration Phase 0 matrix
- `mwf-workflow.yaml`, `mwf-config.yaml`, `workflow-registry.yaml` — `preflight: rw_task_intent` metadata
- `workflow-initiation-cheatsheet.md` — §4c + §7 preflight / `--art` matrix
- `.cursorrules`, `CLAUDE.md` — MWF preflight reference
- Greenfield mirror synced

### Kanban

- T13 → IN PROGRESS → COMPLETE @ v0.2.3.13+1
- FR-137 status sync

---

## Verification

- `pytest tests/workflow_mgt/test_mwf_delivery_preflight.py` — 4 passed
- MWF preflight demonstrated: `MWF E02:S03:T13 delivery` aborted pre-IPW; `delivery --art` passed Phase 0

---

## References

- [FR-137](../../kanban/fbu/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md)
- [BR-056](../../kanban/fbu/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
