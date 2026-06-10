# Changelog — v0.2.3.10+1

**Release Date:** 2026-06-10 15:10:33 UTC  
**Epic:** 2 | **Story:** 3 | **Task:** 10  
**SemVer:** v0.4.1126+1

## Summary

E02:S03:T10 — **FR-126 workflow encapsulation integrity (MWF leverage):** Waves 2–4 complete. Added CMW/PVW command guides; **BR-102** MWF sub-agent leg delegation (no operator mode-switch pauses); registry encapsulation metadata; advisory `validate_workflow_encapsulation.py`; cheatsheet and greenfield sync. T11 BR-102 fix delivered via Wave 3.

## Changes

### Added

- `.claude/commands/cmw.md` — Changelog Management Workflow command guide
- `.claude/commands/pvw.md` — Package Version Workflow command guide
- `packages/frameworks/workflow-mgt/scripts/validation/validate_workflow_encapsulation.py` — advisory encapsulation validator (FR-126)

### Updated

- `.claude/commands/mwf.md` — BR-102 sub-agent / inline leg delegation; narrowed `MWF CHAIN PAUSED`
- `meta-workflow-agent-execution.md` — continuous orchestration contract
- `mwf-workflow.yaml` — leg `delegate` metadata v1.1.0
- `workflow-registry.yaml` v1.4.0 — `command_guide`, `encapsulation_status`, composite leg metadata
- `docs/guides/workflow-initiation-cheatsheet.md` — §4c MWF continuous orchestration
- `CLAUDE.md` — MWF BR-102 orchestration; CMW/PVW command paths
- `rw-trigger-dual-source-parity.md` — FR-126 P0 delta log
- `T10`, `T11`, `FR-126`, `BR-102` — COMPLETE / IMPLEMENTED status
- `greenfield-install/` — FR-110 mirror sync

### Attempted Fixes

- **BR-102:** MWF no longer pauses for parent-session plan mode; legs delegate via sub-agent or inline command guide (pending operator verification on next `MWF … delivery` run).
